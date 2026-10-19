import React, { useState } from 'react';
import { X, Clock, Sliders, Layers } from 'lucide-react';
import { CategoryId, Difficulty, Language, QuizConfig } from '../types';
import { useTranslation } from '../i18n/translations';
import { CATEGORIES_CONFIG, QUESTIONS_DATA } from '../data/questions';

interface QuizLauncherModalProps {
  currentLang: Language;
  initialCategory: CategoryId | 'all';
  isOpen: boolean;
  onClose: () => void;
  onStartQuiz: (config: QuizConfig) => void;
}

export const QuizLauncherModal: React.FC<QuizLauncherModalProps> = ({
  currentLang,
  initialCategory,
  isOpen,
  onClose,
  onStartQuiz,
}) => {
  const t = useTranslation(currentLang);

  const [category, setCategory] = useState<CategoryId | 'all'>(initialCategory);
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);

  if (!isOpen) return null;

  // Filter available questions to calculate maximum valid count
  const matchingQuestions = QUESTIONS_DATA.filter((q) => {
    const matchCat = category === 'all' || q.category === category;
    const matchDiff = difficulty === 'all' || q.difficulty === difficulty;
    return matchCat && matchDiff;
  });

  const availableCounts = [5, 10, 15].filter((c) => c <= matchingQuestions.length);
  const maxAvailable = matchingQuestions.length;
  if (!availableCounts.includes(maxAvailable) && maxAvailable > 0 && maxAvailable < 15) {
    availableCounts.push(maxAvailable);
    availableCounts.sort((a, b) => a - b);
  }

  const effectiveCount = Math.min(questionCount, maxAvailable || 5);

  const handleLaunch = () => {
    if (matchingQuestions.length === 0) return;
    onStartQuiz({
      category,
      difficulty,
      questionCount: effectiveCount,
      timerSeconds,
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-config-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 id="quiz-config-title" className="text-xl font-bold text-slate-900 dark:text-white">
              {t.quizModalTitle}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {t.quizModalSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={t.cancelAction}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Subject Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {t.subjectSelectorLabel}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as CategoryId | 'all')}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">{t.allCategoriesOption}</option>
              {CATEGORIES_CONFIG.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name[currentLang]}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {t.difficultyLabel}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'all', label: t.diffAll },
                { id: 'beginner', label: t.diffBeginner },
                { id: 'intermediate', label: t.diffIntermediate },
                { id: 'advanced', label: t.diffAdvanced },
              ].map((diff) => (
                <button
                  key={diff.id}
                  type="button"
                  onClick={() => setDifficulty(diff.id as Difficulty | 'all')}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl border text-left transition-colors ${
                    difficulty === diff.id
                      ? 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-500 ring-1 ring-purple-500'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {diff.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question Count Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {t.countSelectorLabel}
            </label>
            <div className="flex gap-2">
              {availableCounts.length > 0 ? (
                availableCounts.map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setQuestionCount(cnt)}
                    className={`flex-1 py-2 text-xs font-bold font-mono rounded-xl border transition-colors ${
                      effectiveCount === cnt
                        ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {cnt}
                  </button>
                ))
              ) : (
                <div className="text-xs text-rose-500">{t.notEnoughQuestions}</div>
              )}
            </div>
            <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1.5 font-mono">
              {matchingQuestions.length} {t.questionsCountSuffix}
            </div>
          </div>

          {/* Timer Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {t.timerSelectorLabel}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { sec: 0, label: t.timerOff },
                { sec: 15, label: t.timer15 },
                { sec: 30, label: t.timer30 },
              ].map((opt) => (
                <button
                  key={opt.sec}
                  type="button"
                  onClick={() => setTimerSeconds(opt.sec)}
                  className={`px-3 py-2 text-xs font-medium rounded-xl border text-center transition-colors ${
                    timerSeconds === opt.sec
                      ? 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-500 ring-1 ring-purple-500 font-semibold'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3 bg-slate-50/50 dark:bg-slate-900/50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {t.cancelAction}
          </button>
          <button
            type="button"
            disabled={matchingQuestions.length === 0}
            onClick={handleLaunch}
            className="px-6 py-2.5 text-xs font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs transition-colors"
          >
            {t.startQuizAction}
          </button>
        </div>
      </div>
    </div>
  );
};
