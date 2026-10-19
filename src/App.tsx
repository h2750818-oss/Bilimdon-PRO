import React, { useState, useEffect } from 'react';
import {
  CategoryId,
  Language,
  Question,
  QuizConfig,
  QuizResult,
  Theme,
  UserStats,
} from './types';
import {
  getStoredLanguage,
  setStoredLanguage,
  getStoredTheme,
  setStoredTheme,
  getStoredSound,
  setStoredSound,
  getStoredUserStats,
  recordQuizResult,
  resetAllLearningData,
} from './utils/storage';
import { playSound } from './utils/sound';
import { QUESTIONS_DATA } from './data/questions';
import { ACHIEVEMENTS } from './data/achievements';
import { useTranslation } from './i18n/translations';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DailyChallenge } from './components/DailyChallenge';
import { CategoryList } from './components/CategoryList';
import { HowItWorks } from './components/HowItWorks';
import { StatsOverview } from './components/StatsOverview';
import { Dashboard } from './components/Dashboard';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { QuizLauncherModal } from './components/QuizLauncherModal';
import { QuizRunner } from './components/QuizRunner';
import { QuizCompletion } from './components/QuizCompletion';
import { ReviewAnswersModal } from './components/ReviewAnswersModal';
import { Trophy, X } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>(getStoredLanguage);
  const [theme, setTheme] = useState<Theme>(getStoredTheme);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(getStoredSound);
  const [userStats, setUserStats] = useState<UserStats>(getStoredUserStats);

  // Navigation & View State
  const [activeSection, setActiveSection] = useState<'home' | 'quizzes' | 'results' | 'about'>('home');

  // Quiz Launcher State
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);
  const [launcherCategory, setLauncherCategory] = useState<CategoryId | 'all'>('all');

  // Active Quiz State
  const [activeQuiz, setActiveQuiz] = useState<{
    config: QuizConfig;
    questions: Question[];
  } | null>(null);

  // Completed Quiz State
  const [completedQuiz, setCompletedQuiz] = useState<{
    result: QuizResult;
    questions: Question[];
  } | null>(null);

  // Review Answers Modal State
  const [reviewModalData, setReviewModalData] = useState<{
    questions: Question[];
    userAnswers: QuizResult['answers'];
  } | null>(null);

  // Achievement Toast Notification
  const [achievementToast, setAchievementToast] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const t = useTranslation(lang);

  // Apply Theme to <html> class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    setStoredTheme(theme);
  }, [theme]);

  // Apply Language to <html> lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    setStoredLanguage(lang);
  }, [lang]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSoundToggle = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      setStoredSound(next);
      if (next) {
        playSound('tick', true);
      }
      return next;
    });
  };

  const triggerAchievementToast = (achievementId: string) => {
    const ach = ACHIEVEMENTS.find((a) => a.id === achievementId);
    if (!ach) return;

    playSound('achievement', soundEnabled);
    setAchievementToast({
      title: ach.title[lang],
      description: ach.description[lang],
    });

    setTimeout(() => {
      setAchievementToast(null);
    }, 4500);
  };

  // Open Quiz Setup
  const handleOpenLauncher = (category: CategoryId | 'all' = 'all') => {
    setLauncherCategory(category);
    setIsLauncherOpen(true);
  };

  // Start Quiz
  const handleStartQuiz = (config: QuizConfig) => {
    setIsLauncherOpen(false);
    setCompletedQuiz(null);

    // Filter questions
    let pool = QUESTIONS_DATA.filter((q) => {
      const matchCat = config.category === 'all' || q.category === config.category;
      const matchDiff = config.difficulty === 'all' || q.difficulty === config.difficulty;
      return matchCat && matchDiff;
    });

    // If pool is too small, fallback to matching by category only
    if (pool.length < config.questionCount && config.difficulty !== 'all') {
      pool = QUESTIONS_DATA.filter((q) => {
        return config.category === 'all' || q.category === config.category;
      });
    }

    // Shuffle questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, config.questionCount);

    setActiveQuiz({
      config,
      questions: selectedQuestions,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quiz Finished
  const handleQuizFinished = (result: QuizResult, questions: Question[]) => {
    const isTimed = (activeQuiz?.config.timerSeconds ?? 0) > 0;
    const { updatedStats, newlyUnlockedAchievements } = recordQuizResult({
      result,
      isTimed,
    });

    setUserStats(updatedStats);
    setActiveQuiz(null);
    setCompletedQuiz({ result, questions });

    if (newlyUnlockedAchievements.length > 0) {
      triggerAchievementToast(newlyUnlockedAchievements[0]);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Daily Challenge Updated
  const handleDailyChallengeStatsUpdated = (newStats: UserStats, newlyUnlocked: string[]) => {
    setUserStats(newStats);
    if (newlyUnlocked.length > 0) {
      triggerAchievementToast(newlyUnlocked[0]);
    }
  };

  // Reset Progress
  const handleResetProgress = () => {
    const clean = resetAllLearningData();
    setUserStats(clean);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Global Header */}
      <Header
        currentLang={lang}
        onLanguageChange={handleLanguageChange}
        currentTheme={theme}
        onThemeToggle={handleThemeToggle}
        soundEnabled={soundEnabled}
        onSoundToggle={handleSoundToggle}
        totalPoints={userStats.totalPoints}
        activeSection={activeSection}
        onNavigate={(sec) => {
          setActiveSection(sec);
          setActiveQuiz(null);
          setCompletedQuiz(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuickQuiz={() => handleOpenLauncher('all')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* State 1: Active Quiz in Progress */}
        {activeQuiz ? (
          <QuizRunner
            currentLang={lang}
            config={activeQuiz.config}
            questions={activeQuiz.questions}
            soundEnabled={soundEnabled}
            onQuizFinished={handleQuizFinished}
            onExitQuiz={() => {
              setActiveQuiz(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : completedQuiz ? (
          /* State 2: Quiz Completion Results */
          <QuizCompletion
            currentLang={lang}
            result={completedQuiz.result}
            questions={completedQuiz.questions}
            soundEnabled={soundEnabled}
            onPlayAgain={() => {
              if (activeQuiz) return;
              handleStartQuiz({
                category: completedQuiz.result.category,
                difficulty: completedQuiz.result.difficulty,
                questionCount: completedQuiz.result.totalQuestions,
                timerSeconds: 0,
              });
            }}
            onChooseCategory={() => {
              setCompletedQuiz(null);
              handleOpenLauncher('all');
            }}
            onReviewAnswers={() => {
              setReviewModalData({
                questions: completedQuiz.questions,
                userAnswers: completedQuiz.result.answers,
              });
            }}
          />
        ) : (
          /* State 3: Section Views */
          <>
            {activeSection === 'home' && (
              <div className="animate-fade-in">
                <Hero
                  currentLang={lang}
                  userStats={userStats}
                  onStartQuiz={() => handleOpenLauncher('all')}
                  onExploreSubjects={() => {
                    const el = document.getElementById('subjects-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />

                <DailyChallenge
                  currentLang={lang}
                  userStats={userStats}
                  soundEnabled={soundEnabled}
                  onStatsUpdated={handleDailyChallengeStatsUpdated}
                />

                <CategoryList
                  currentLang={lang}
                  onSelectCategory={(cat) => handleOpenLauncher(cat)}
                />

                <HowItWorks currentLang={lang} />

                <StatsOverview currentLang={lang} userStats={userStats} />
              </div>
            )}

            {activeSection === 'quizzes' && (
              <div className="animate-fade-in">
                <CategoryList
                  currentLang={lang}
                  onSelectCategory={(cat) => handleOpenLauncher(cat)}
                />
                <StatsOverview currentLang={lang} userStats={userStats} />
              </div>
            )}

            {activeSection === 'results' && (
              <div className="animate-fade-in">
                <Dashboard
                  currentLang={lang}
                  userStats={userStats}
                  onStartQuiz={() => handleOpenLauncher('all')}
                  onResetProgress={handleResetProgress}
                />
              </div>
            )}

            {activeSection === 'about' && (
              <div className="animate-fade-in">
                <AboutSection currentLang={lang} />
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer currentLang={lang} onLanguageChange={handleLanguageChange} />

      {/* Quiz Launcher Modal */}
      <QuizLauncherModal
        currentLang={lang}
        initialCategory={launcherCategory}
        isOpen={isLauncherOpen}
        onClose={() => setIsLauncherOpen(false)}
        onStartQuiz={handleStartQuiz}
      />

      {/* Review Answers Modal */}
      {reviewModalData && (
        <ReviewAnswersModal
          currentLang={lang}
          questions={reviewModalData.questions}
          userAnswers={reviewModalData.userAnswers}
          isOpen={true}
          onClose={() => setReviewModalData(null)}
        />
      )}

      {/* Achievement Unlocked Toast Notification */}
      {achievementToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-purple-300 dark:border-purple-700 shadow-2xl animate-fade-in max-w-sm"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              {t.achievementsHeading}
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
              {achievementToast.title}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight truncate">
              {achievementToast.description}
            </div>
          </div>
          <button
            onClick={() => setAchievementToast(null)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
