import React from 'react';
import { Award, CheckCircle, Percent, Target } from 'lucide-react';
import { Language, UserStats } from '../types';
import { useTranslation } from '../i18n/translations';

interface StatsOverviewProps {
  currentLang: Language;
  userStats: UserStats;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ currentLang, userStats }) => {
  const t = useTranslation(currentLang);

  const totalAnswered = userStats.totalCorrectAnswers + userStats.totalIncorrectAnswers;
  const accuracy =
    totalAnswered > 0 ? Math.round((userStats.totalCorrectAnswers / totalAnswered) * 100) : 0;

  const statItems = [
    {
      label: t.statTotalPoints,
      value: `${userStats.totalPoints} ${t.ptsShort}`,
      icon: <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />,
    },
    {
      label: t.statTotalQuizzes,
      value: userStats.quizzesCompleted,
      icon: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
    },
    {
      label: t.statCorrectAnswers,
      value: userStats.totalCorrectAnswers,
      icon: <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />,
    },
    {
      label: t.statAccuracy,
      value: `${accuracy}%`,
      icon: <Percent className="w-5 h-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />,
    },
  ];

  return (
    <section className="py-12 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {t.statsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.statsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-white truncate">
                  {item.value}
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
