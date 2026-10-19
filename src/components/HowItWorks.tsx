import React from 'react';
import { BookOpen, HelpCircle, Trophy } from 'lucide-react';
import { Language } from '../types';
import { useTranslation } from '../i18n/translations';

interface HowItWorksProps {
  currentLang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const t = useTranslation(currentLang);

  const steps = [
    {
      index: '01',
      title: t.step1Title,
      description: t.step1Desc,
      icon: <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />,
    },
    {
      index: '02',
      title: t.step2Title,
      description: t.step2Desc,
      icon: <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />,
    },
    {
      index: '03',
      title: t.step3Title,
      description: t.step3Desc,
      icon: <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />,
    },
  ];

  return (
    <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
            {t.brandName}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.howItWorksTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.howItWorksSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.index}
              className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 flex items-center justify-center border border-purple-200 dark:border-purple-800">
                  {step.icon}
                </div>
                <span className="font-mono text-2xl font-black text-slate-200 dark:text-slate-800 tabular-nums">
                  {step.index}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
