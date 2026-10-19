import React, { useState } from 'react';
import { Calendar, Check, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language, Question, UserStats } from '../types';
import { useTranslation } from '../i18n/translations';
import { QUESTIONS_DATA } from '../data/questions';
import { recordDailyChallengeCompletion } from '../utils/storage';
import { playSound } from '../utils/sound';

interface DailyChallengeProps {
  currentLang: Language;
  userStats: UserStats;
  soundEnabled: boolean;
  onStatsUpdated: (stats: UserStats, newlyUnlocked: string[]) => void;
}

export const DailyChallenge: React.FC<DailyChallengeProps> = ({
  currentLang,
  userStats,
  soundEnabled,
  onStatsUpdated,
}) => {
  const t = useTranslation(currentLang);
  const todayKey = new Date().toISOString().slice(0, 10);
  const isAlreadyCompleted = userStats.dailyChallengeLastCompletedDate === todayKey;

  // Deterministically select daily question based on day-of-year
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const dailyQuestion: Question = QUESTIONS_DATA[dayOfYear % QUESTIONS_DATA.length];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(isAlreadyCompleted);
  const [submissionCorrect, setSubmissionCorrect] = useState<boolean>(isAlreadyCompleted);

  const badgeImageSrc = '/src/assets/images/badge_daily_quest_1792403357149.jpg';

  const handleSubmit = () => {
    if (selectedIndex === null || hasSubmitted || isAlreadyCompleted) return;

    const isCorrect = selectedIndex === dailyQuestion.correctIndex;
    setHasSubmitted(true);
    setSubmissionCorrect(isCorrect);

    if (isCorrect) {
      playSound('correct', soundEnabled);
    } else {
      playSound('incorrect', soundEnabled);
    }

    const { updatedStats, newlyUnlockedAchievements } = recordDailyChallengeCompletion(isCorrect);
    onStatsUpdated(updatedStats, newlyUnlockedAchievements);
  };

  return (
    <section className="py-12 bg-slate-100/70 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-purple-200 dark:border-purple-800 shrink-0 bg-purple-900 flex items-center justify-center">
                <img
                  src={badgeImageSrc}
                  alt="Daily Challenge Badge"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.dailyBadgeLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{todayKey}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {t.dailyChallengeTitle}
                </h2>
              </div>
            </div>

            {isAlreadyCompleted && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 self-start sm:self-center">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                <span>{t.dailyCompletedBadge}</span>
              </div>
            )}
          </div>

          {/* Question Text */}
          <div className="pt-6 space-y-4">
            <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug">
              {dailyQuestion.question[currentLang]}
            </p>

            {/* Answer Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {dailyQuestion.options[currentLang].map((option, idx) => {
                const isSelected = selectedIndex === idx;
                const isCorrectChoice = idx === dailyQuestion.correctIndex;
                const showSuccess = (hasSubmitted || isAlreadyCompleted) && isCorrectChoice;
                const showWrong = (hasSubmitted || isAlreadyCompleted) && isSelected && !isCorrectChoice;

                let cardStyle =
                  'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-600 text-slate-800 dark:text-slate-200';

                if (isSelected && !hasSubmitted && !isAlreadyCompleted) {
                  cardStyle =
                    'bg-purple-50 dark:bg-purple-950/40 border-purple-600 dark:border-purple-500 text-purple-900 dark:text-purple-200 shadow-xs ring-2 ring-purple-500/20';
                } else if (showSuccess) {
                  cardStyle =
                    'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold ring-2 ring-emerald-500/20';
                } else if (showWrong) {
                  cardStyle =
                    'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-200 line-through';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={hasSubmitted || isAlreadyCompleted}
                    onClick={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between p-4 rounded-xl border text-left text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${cardStyle} ${
                      hasSubmitted || isAlreadyCompleted ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-200/70 dark:bg-slate-700/70 flex items-center justify-center text-xs font-mono font-bold text-slate-700 dark:text-slate-300 shrink-0">
                        {idx + 1}
                      </span>
                      <span>{option}</span>
                    </span>

                    {showSuccess && <Check className="w-5 h-5 text-emerald-600 shrink-0" aria-label="To‘g‘ri javob" />}
                    {showWrong && <X className="w-5 h-5 text-rose-600 shrink-0" aria-label="Noto‘g‘ri javob" />}
                  </button>
                );
              })}
            </div>

            {/* Action or Notice */}
            {!hasSubmitted && !isAlreadyCompleted ? (
              <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {t.dailyAnswerPrompt}
                </span>

                <button
                  type="button"
                  disabled={selectedIndex === null}
                  onClick={handleSubmit}
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs transition-colors"
                >
                  {t.dailySubmitBtn}
                </button>
              </div>
            ) : (
              <div className="pt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-bold">
                  {submissionCorrect ? (
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <Check className="w-4 h-4" />
                      {t.dailyCorrect}
                    </span>
                  ) : (
                    <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <X className="w-4 h-4" />
                      {t.dailyIncorrect}
                    </span>
                  )}
                  {submissionCorrect && !isAlreadyCompleted && (
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold">
                      ({t.dailyPointsAwarded})
                    </span>
                  )}
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    {t.dailyExplanationTitle}{' '}
                  </span>
                  {dailyQuestion.explanation[currentLang]}
                </div>

                {isAlreadyCompleted && (
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-1">
                    {t.dailyAlreadyAnswered}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
