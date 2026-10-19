export type Language = 'uz' | 'ru' | 'en';
export type Theme = 'light' | 'dark';

export type CategoryId = 'math' | 'history' | 'geography' | 'english' | 'general';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface MultilingualText {
  uz: string;
  ru: string;
  en: string;
}

export interface Question {
  id: string;
  category: CategoryId;
  difficulty: Difficulty;
  question: MultilingualText;
  options: {
    uz: [string, string, string, string];
    ru: [string, string, string, string];
    en: [string, string, string, string];
  };
  correctIndex: number;
  explanation: MultilingualText;
}

export interface UserAnswerRecord {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
}

export interface QuizResult {
  id: string;
  date: string; // ISO date string
  category: CategoryId | 'all';
  difficulty: Difficulty | 'all';
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  pointsEarned: number;
  accuracy: number;
  timeTakenSeconds: number;
  answers: UserAnswerRecord[];
}

export interface Achievement {
  id: string;
  title: MultilingualText;
  description: MultilingualText;
  iconName: string;
  conditionDescription: MultilingualText;
}

export interface UserStats {
  totalPoints: number;
  quizzesCompleted: number;
  totalCorrectAnswers: number;
  totalIncorrectAnswers: number;
  bestScore: number;
  dailyChallengeLastCompletedDate: string | null;
  unlockedAchievements: string[]; // achievement IDs
  achievementUnlockDates: Record<string, string>; // ID -> ISO date string
  recentHistory: QuizResult[];
  categoryStats: Record<CategoryId, { attempts: number; correct: number }>;
}

export interface QuizConfig {
  category: CategoryId | 'all';
  difficulty: Difficulty | 'all';
  questionCount: number;
  timerSeconds: number; // 0 = untimed, or 15, 30
}
