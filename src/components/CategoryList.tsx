import React from 'react';
import {
  Calculator,
  Landmark,
  Globe,
  BookOpen,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { CategoryId, Language } from '../types';
import { useTranslation } from '../i18n/translations';
import { CATEGORIES_CONFIG, QUESTIONS_DATA } from '../data/questions';

interface CategoryListProps {
  currentLang: Language;
  onSelectCategory: (categoryId: CategoryId | 'all') => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  currentLang,
  onSelectCategory,
}) => {
  const t = useTranslation(currentLang);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-6 h-6" aria-hidden="true" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6" aria-hidden="true" />;
      case 'Globe':
        return <Globe className="w-6 h-6" aria-hidden="true" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" aria-hidden="true" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" aria-hidden="true" />;
      default:
        return <HelpCircle className="w-6 h-6" aria-hidden="true" />;
    }
  };

  const getCategoryQuestionCount = (catId: CategoryId) => {
    return QUESTIONS_DATA.filter((q) => q.category === catId).length;
  };

  return (
    <section id="subjects-section" className="py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
              {t.navQuizzes}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.subjectsSectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
              {t.subjectsSectionSubtitle}
            </p>
          </div>

          {/* Mixed All-Category CTA */}
          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-purple-600 hover:bg-slate-800 dark:hover:bg-purple-700 transition-colors whitespace-nowrap self-start md:self-auto shadow-xs"
          >
            <span>{t.allSubjectsTab}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_CONFIG.map((cat) => {
            const count = getCategoryQuestionCount(cat.id);
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${cat.colorClass}`}
                    >
                      {getIcon(cat.iconName)}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                      {count} {t.questionsCountSuffix}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {cat.name[currentLang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {cat.description[currentLang]}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-colors"
                >
                  <span>{t.startSubjectQuiz}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
