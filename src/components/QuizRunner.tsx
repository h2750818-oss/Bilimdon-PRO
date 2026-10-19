import React, { useState, useEffect, useCallback } from 'react';
import {
  Clock,
  ArrowRight,
  Check,
  X,
  AlertTriangle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { Language, Question, QuizConfig, QuizResult, UserAnswerRecord } from '../types';
import { useTranslation } from '../i18n/translations';
import { playSound } from '../utils/sound';

interface QuizRunnerProps {
  currentLang: Language;
  config: QuizConfig;
  questions: Question[];
  soundEnabled: boolean;
  onQuizFinished: (result: QuizResult, questions: Question[]) => void;
  onExitQuiz: () => void;
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({
  currentLang,
  config,
  questions,
  soundEnabled,
  onQuizFinished,
  onExitQuiz,
}) => {
  const t = useTranslation(currentLang);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Per-question timer
  const [secondsRemaining, setSecondsRemaining] = useState<number>(config.timerSeconds);
  const [startTime] = useState<number>(Date.now());

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  // Handle Answer Submission
  const handleSubmitAnswer = useCallback(
    (forcedTimeout = false) => {
      if (isAnswerSubmitted) return;

      const userChoice = forcedTimeout ? -1 : selectedIndex;
      const isCorrect = userChoice === currentQuestion.correctIndex;

      setIsAnswerSubmitted(true);

      const pointsForThis = isCorrect ? 10 : 0;
      if (isCorrect) {
        setTotalScore((prev) => prev + pointsForThis);
        playSound('correct', soundEnabled);
      } else {
        playSound('incorrect', soundEnabled);
      }

      setUserAnswers((prev) => [
        ...prev,
        {
          questionId: currentQuestion.id,
          selectedIndex: userChoice !== null ? userChoice : -1,
          isCorrect,
        },
      ]);
    },
    [isAnswerSubmitted, selectedIndex, currentQuestion, soundEnabled]
  );

  // Timer countdown
  useEffect(() => {
    if (config.timerSeconds <= 0 || isAnswerSubmitted) return;

    setSecondsRemaining(config.timerSeconds);

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitAnswer(true);
          return 0;
        }
        if (prev <= 4) {
          playSound('tick', soundEnabled);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, config.timerSeconds, isAnswerSubmitted, handleSubmitAnswer, soundEnabled]);

  // Keyboard shortcut listener (1, 2, 3, 4 to pick, Enter to submit/next)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showExitConfirm) return;

      if (!isAnswerSubmitted) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          setSelectedIndex(idx);
        } else if (e.key === 'Enter' && selectedIndex !== null) {
          handleSubmitAnswer(false);
        }
      } else {
        if (e.key === 'Enter') {
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswerSubmitted, selectedIndex, showExitConfirm, handleSubmitAnswer]);

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      // Calculate final summary
      const correctCount = userAnswers.filter((a) => a.isCorrect).length;
      const incorrectCount = questions.length - correctCount;
      const accuracy = Math.round((correctCount / questions.length) * 100);
      const timeTaken = Math.round((Date.now() - startTime) / 1000);

      const result: QuizResult = {
        id: `quiz_${Date.now()}`,
        date: new Date().toISOString(),
        category: config.category,
        difficulty: config.difficulty,
        totalQuestions: questions.length,
        correctAnswers: correctCount,
        incorrectAnswers: incorrectCount,
        pointsEarned: correctCount * 10,
        accuracy,
        timeTakenSeconds: timeTaken,
        answers: userAnswers,
      };

      onQuizFinished(result, questions);
    }
  };

  const progressPercent = Math.round(((currentIndex + (isAnswerSubmitted ? 1 : 0)) / questions.length) * 100);

  return (
    <section className="py-8 sm:py-12 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Top Bar: Progress and Timer */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              {t.questionOf} {currentIndex + 1} {t.fromTotal} {questions.length}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-xs font-semibold font-mono tabular-nums text-slate-700 dark:text-slate-300">
              {totalScore} {t.ptsShort}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {config.timerSeconds > 0 && (
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-colors ${
                  secondsRemaining <= 5
                    ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 animate-pulse'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>
                  {secondsRemaining} {t.secondsShort}
                </span>
              </div>
            )}

            <button
              onClick={() => setShowExitConfirm(true)}
              className="text-xs font-medium text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
            >
              {t.quitQuizPrompt}
            </button>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 capitalize">
            {currentQuestion.category} · {currentQuestion.difficulty}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
            {currentQuestion.question[currentLang]}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {t.selectOptionHint}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuestion.options[currentLang].map((optText, idx) => {
              const isSelected = selectedIndex === idx;
              const isCorrectChoice = idx === currentQuestion.correctIndex;
              const showSuccess = isAnswerSubmitted && isCorrectChoice;
              const showWrong = isAnswerSubmitted && isSelected && !isCorrectChoice;

              let style =
                'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-purple-300 dark:hover:border-purple-600';

              if (isSelected && !isAnswerSubmitted) {
                style =
                  'bg-purple-50 dark:bg-purple-950/40 border-purple-600 dark:border-purple-500 text-purple-900 dark:text-purple-200 ring-2 ring-purple-500/20';
              } else if (showSuccess) {
                style =
                  'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20 font-semibold';
              } else if (showWrong) {
                style =
                  'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 line-through';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswerSubmitted}
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-left text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${style} ${
                    isAnswerSubmitted ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-200/80 dark:bg-slate-700/80 flex items-center justify-center font-mono font-bold text-xs text-slate-700 dark:text-slate-300 shrink-0">
                      {idx + 1}
                    </span>
                    <span>{optText}</span>
                  </span>

                  {showSuccess && <Check className="w-5 h-5 text-emerald-600 shrink-0" aria-label="To‘g‘ri" />}
                  {showWrong && <X className="w-5 h-5 text-rose-600 shrink-0" aria-label="Noto‘g‘ri" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Immediate Explanation Feedback */}
        {isAnswerSubmitted && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 text-xs font-bold">
              {selectedIndex === currentQuestion.correctIndex ? (
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  {t.correctBadge} (+10 {t.ptsShort})
                </span>
              ) : (
                <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <X className="w-4 h-4" />
                  {t.incorrectBadge}
                </span>
              )}
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                {t.explanationHeader}{' '}
              </span>
              {currentQuestion.explanation[currentLang]}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-2 flex items-center justify-end gap-3">
          {!isAnswerSubmitted ? (
            <button
              type="button"
              disabled={selectedIndex === null}
              onClick={() => handleSubmitAnswer(false)}
              className="px-6 py-2.5 text-xs font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs transition-colors"
            >
              {t.submitAnswerBtn}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextQuestion}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 shadow-xs transition-colors"
            >
              <span>{isLastQuestion ? t.finishQuizBtn : t.nextQuestionBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Exit Confirmation Dialog */}
      {showExitConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
        >
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {t.quitQuizPrompt}
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.quitQuizConfirm}
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {t.cancelAction}
              </button>
              <button
                onClick={onExitQuiz}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-rose-600 text-white hover:bg-rose-700"
              >
                {t.quitQuizPrompt}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
