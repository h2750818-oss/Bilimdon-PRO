import React from 'react';
import { Award, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { useTranslation } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
  const t = useTranslation(currentLang);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white">
              <Award className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Bilimdon<span className="text-purple-600 dark:text-purple-400">PRO</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {t.tagline}
              </div>
            </div>
          </div>

          {/* Languages & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs">
              {(['uz', 'ru', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-1 rounded uppercase font-semibold transition-colors ${
                    currentLang === lang
                      ? 'text-purple-600 dark:text-purple-400 font-bold underline'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={t.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">{t.backToTop}</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {t.footerRights}
        </div>
      </div>
    </footer>
  );
};
