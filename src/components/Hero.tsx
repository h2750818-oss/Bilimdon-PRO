import React from 'react';
import { ArrowRight, BookOpen, Layers, Award, Sparkles } from 'lucide-react';
import { Language, UserStats } from '../types';
import { useTranslation } from '../i18n/translations';

interface HeroProps {
  currentLang: Language;
  userStats: UserStats;
  onStartQuiz: () => void;
  onExploreSubjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  userStats,
  onStartQuiz,
  onExploreSubjects,
}) => {
  const t = useTranslation(currentLang);
  const heroImageSrc = '/src/assets/images/hero_education_banner_1792403341494.jpg';

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-300">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.heroBadge}</span>
              <span aria-hidden="true">·</span>
              <span>{t.tagline}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance">
              {t.heroTitlePrefix}
              <span className="text-purple-600 dark:text-purple-400">
                {t.heroTitleHighlight}
              </span>
              {t.heroTitleSuffix}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {t.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartQuiz}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 active:scale-[0.98] transition-all shadow-md shadow-purple-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 whitespace-nowrap"
              >
                <span>{t.heroStartQuiz}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                onClick={onExploreSubjects}
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                {t.heroExploreSubjects}
              </button>
            </div>

            {/* Quiet Unboxed Metadata Line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400 pt-3">
              <span className="font-medium text-slate-700 dark:text-slate-300">{t.heroTotalQuestions}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">{t.heroTotalSubjects}</span>
              <span aria-hidden="true">·</span>
              <span>{t.heroInstantFeedback}</span>
              <span aria-hidden="true">·</span>
              <span>{t.heroPointsPerCorrect}</span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-gradient-to-tr from-purple-900 via-slate-900 to-indigo-950 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] flex items-center justify-center">
              <img
                src={heroImageSrc}
                alt="Bilimdon PRO interactive learning illustration with educational books, globe, and scientific tools"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to styled SVG container
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
            </div>

            {/* Quick Live Overview Floater */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-purple-600 dark:text-purple-400 tabular-nums">
                  {userStats.totalPoints}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {t.scoreLabel}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                  {userStats.quizzesCompleted}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {t.statTotalQuizzes}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                  {userStats.unlockedAchievements.length}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {t.achievementsHeading}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
