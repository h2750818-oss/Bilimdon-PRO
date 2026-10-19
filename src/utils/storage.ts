import { CategoryId, Language, QuizResult, Theme, UserStats } from '../types';

const STORAGE_KEYS = {
  LANG: 'bilimdon_lang_v1',
  THEME: 'bilimdon_theme_v1',
  SOUND: 'bilimdon_sound_v1',
  STATS: 'bilimdon_stats_v1',
} as const;

export const INITIAL_USER_STATS: UserStats = {
  totalPoints: 0,
  quizzesCompleted: 0,
  totalCorrectAnswers: 0,
  totalIncorrectAnswers: 0,
  bestScore: 0,
  dailyChallengeLastCompletedDate: null,
  unlockedAchievements: [],
  achievementUnlockDates: {},
  recentHistory: [],
  categoryStats: {
    math: { attempts: 0, correct: 0 },
    history: { attempts: 0, correct: 0 },
    geography: { attempts: 0, correct: 0 },
    english: { attempts: 0, correct: 0 },
    general: { attempts: 0, correct: 0 },
  },
};

export function getStoredLanguage(): Language {
  try {
    const val = localStorage.getItem(STORAGE_KEYS.LANG);
    if (val === 'uz' || val === 'ru' || val === 'en') {
      return val;
    }
  } catch {
    // ignore
  }
  return 'uz';
}

export function setStoredLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
  } catch {
    // ignore
  }
}

export function getStoredTheme(): Theme {
  try {
    const val = localStorage.getItem(STORAGE_KEYS.THEME);
    if (val === 'light' || val === 'dark') {
      return val;
    }
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // ignore
  }
  return 'light';
}

export function setStoredTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch {
    // ignore
  }
}

export function getStoredSound(): boolean {
  try {
    const val = localStorage.getItem(STORAGE_KEYS.SOUND);
    if (val !== null) {
      return val === 'true';
    }
  } catch {
    // ignore
  }
  return false; // Muted by default per specification!
}

export function setStoredSound(enabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SOUND, enabled ? 'true' : 'false');
  } catch {
    // ignore
  }
}

export function getStoredUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STATS);
    if (!raw) return { ...INITIAL_USER_STATS };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.totalPoints === 'number') {
      return {
        ...INITIAL_USER_STATS,
        ...parsed,
        categoryStats: {
          ...INITIAL_USER_STATS.categoryStats,
          ...(parsed.categoryStats || {}),
        },
      };
    }
  } catch (e) {
    console.warn('Failed to parse user stats from localStorage, resetting to default safely', e);
  }
  return { ...INITIAL_USER_STATS };
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save user stats to localStorage', e);
  }
}

export interface RecordQuizResultParams {
  result: QuizResult;
  isTimed: boolean;
}

export interface RecordQuizResultOutcome {
  updatedStats: UserStats;
  newlyUnlockedAchievements: string[];
}

export function recordQuizResult({ result, isTimed }: RecordQuizResultParams): RecordQuizResultOutcome {
  const current = getStoredUserStats();

  const newQuizzesCompleted = current.quizzesCompleted + 1;
  const newTotalPoints = current.totalPoints + result.pointsEarned;
  const newCorrect = current.totalCorrectAnswers + result.correctAnswers;
  const newIncorrect = current.totalIncorrectAnswers + result.incorrectAnswers;
  const newBestScore = Math.max(current.bestScore, result.pointsEarned);

  // Update recent history (keep max 20)
  const newHistory = [result, ...current.recentHistory].slice(0, 20);

  // Update category stats
  const updatedCategoryStats = { ...current.categoryStats };
  if (result.category !== 'all') {
    const cat = result.category as CategoryId;
    if (!updatedCategoryStats[cat]) {
      updatedCategoryStats[cat] = { attempts: 0, correct: 0 };
    }
    updatedCategoryStats[cat] = {
      attempts: updatedCategoryStats[cat].attempts + result.totalQuestions,
      correct: updatedCategoryStats[cat].correct + result.correctAnswers,
    };
  }

  // Check achievements
  const unlocked = new Set(current.unlockedAchievements);
  const unlockDates = { ...current.achievementUnlockDates };
  const newlyUnlocked: string[] = [];
  const nowIso = new Date().toISOString();

  const checkUnlock = (id: string, condition: boolean) => {
    if (condition && !unlocked.has(id)) {
      unlocked.add(id);
      unlockDates[id] = nowIso;
      newlyUnlocked.push(id);
    }
  };

  // 1. first_quiz
  checkUnlock('first_quiz', newQuizzesCompleted >= 1);

  // 2. five_quizzes
  checkUnlock('five_quizzes', newQuizzesCompleted >= 5);

  // 3. perfect_score
  checkUnlock('perfect_score', result.accuracy === 100 && result.totalQuestions >= 5);

  // 4. ten_correct
  checkUnlock('ten_correct', newCorrect >= 10);

  // 5. speed_demon (completed timed quiz with >= 80% accuracy)
  checkUnlock('speed_demon', isTimed && result.accuracy >= 80);

  // 6. knowledge_master (50 total correct)
  checkUnlock('knowledge_master', newCorrect >= 50);

  const updatedStats: UserStats = {
    ...current,
    totalPoints: newTotalPoints,
    quizzesCompleted: newQuizzesCompleted,
    totalCorrectAnswers: newCorrect,
    totalIncorrectAnswers: newIncorrect,
    bestScore: newBestScore,
    recentHistory: newHistory,
    categoryStats: updatedCategoryStats,
    unlockedAchievements: Array.from(unlocked),
    achievementUnlockDates: unlockDates,
  };

  saveUserStats(updatedStats);

  return {
    updatedStats,
    newlyUnlockedAchievements: newlyUnlocked,
  };
}

export function recordDailyChallengeCompletion(isCorrect: boolean): {
  updatedStats: UserStats;
  pointsAdded: number;
  newlyUnlockedAchievements: string[];
} {
  const current = getStoredUserStats();
  const todayKey = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  // Prevent duplicate awards on same date
  if (current.dailyChallengeLastCompletedDate === todayKey) {
    return {
      updatedStats: current,
      pointsAdded: 0,
      newlyUnlockedAchievements: [],
    };
  }

  const pointsAdded = isCorrect ? 10 : 0;
  const newPoints = current.totalPoints + pointsAdded;
  const newCorrect = current.totalCorrectAnswers + (isCorrect ? 1 : 0);
  const newIncorrect = current.totalIncorrectAnswers + (isCorrect ? 0 : 1);

  const unlocked = new Set(current.unlockedAchievements);
  const unlockDates = { ...current.achievementUnlockDates };
  const newlyUnlocked: string[] = [];
  const nowIso = new Date().toISOString();

  if (isCorrect && !unlocked.has('daily_challenge')) {
    unlocked.add('daily_challenge');
    unlockDates['daily_challenge'] = nowIso;
    newlyUnlocked.push('daily_challenge');
  }

  if (newCorrect >= 10 && !unlocked.has('ten_correct')) {
    unlocked.add('ten_correct');
    unlockDates['ten_correct'] = nowIso;
    newlyUnlocked.push('ten_correct');
  }

  const updatedStats: UserStats = {
    ...current,
    totalPoints: newPoints,
    totalCorrectAnswers: newCorrect,
    totalIncorrectAnswers: newIncorrect,
    dailyChallengeLastCompletedDate: todayKey,
    unlockedAchievements: Array.from(unlocked),
    achievementUnlockDates: unlockDates,
  };

  saveUserStats(updatedStats);

  return {
    updatedStats,
    pointsAdded,
    newlyUnlockedAchievements: newlyUnlocked,
  };
}

export function resetAllLearningData(): UserStats {
  try {
    localStorage.removeItem(STORAGE_KEYS.STATS);
  } catch {
    // ignore
  }
  return { ...INITIAL_USER_STATS };
}
