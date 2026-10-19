import React, { useState } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Award,
} from 'lucide-react';
import { Language, Theme } from '../types';
import { useTranslation } from '../i18n/translations';
import { getLevelInfo } from '../utils/levels';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: Theme;
  onThemeToggle: () => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
  totalPoints: number;
  activeSection: string;
  onNavigate: (section: 'home' | 'quizzes' | 'results' | 'about') => void;
  onOpenQuickQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  currentTheme,
  onThemeToggle,
  soundEnabled,
  onSoundToggle,
  totalPoints,
  activeSection,
  onNavigate,
  onOpenQuickQuiz,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslation(currentLang);
  const levelInfo = getLevelInfo(totalPoints);

  const navItems: Array<{ id: 'home' | 'quizzes' | 'results' | 'about'; label: string }> = [
    { id: 'home', label: t.navHome },
    { id: 'quizzes', label: t.navQuizzes },
    { id: 'results', label: t.navResults },
    { id: 'about', label: t.navAbout },
  ];

  const handleNavClick = (id: 'home' | 'quizzes' | 'results' | 'about') => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-purple-500/20">
              <Award className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
              Bilimdon<span className="text-purple-600 dark:text-purple-400">PRO</span>
            </span>
          </button>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Controls & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Score & Level Indicator */}
            <button
              onClick={() => handleNavClick('results')}
              title={`${levelInfo.title[currentLang]} · ${totalPoints} ${t.ptsShort}`}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
            >
              <span className="hidden sm:inline">Lvl {levelInfo.level} ·</span>
              <span className="font-mono tabular-nums">{totalPoints}</span>
              <span>{t.ptsShort}</span>
            </button>

            {/* Language Selector */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700" role="group" aria-label={t.languageSelectorAria}>
              {(['uz', 'ru', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-1 text-xs font-semibold rounded uppercase transition-colors ${
                    currentLang === lang
                      ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  aria-pressed={currentLang === lang}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Sound Toggle */}
            <button
              onClick={onSoundToggle}
              title={soundEnabled ? 'Ovozni o‘chirish / Mute sound' : 'Ovozni yoqish / Enable sound'}
              aria-label={t.soundToggleAria}
              aria-pressed={soundEnabled}
              className={`p-2 rounded-lg text-xs font-medium transition-colors border ${
                soundEnabled
                  ? 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800'
                  : 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4" aria-hidden="true" />
              ) : (
                <VolumeX className="w-4 h-4" aria-hidden="true" />
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onThemeToggle}
              title="Mavzuni almashtirish / Toggle theme"
              aria-label={t.themeToggleAria}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenQuickQuiz}
              className="hidden lg:inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white shadow-xs transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              {t.startQuizNav}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label={mobileMenuOpen ? t.mobileMenuClose : t.mobileMenuOpen}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickQuiz();
              }}
              className="w-full flex items-center justify-center py-3 text-sm font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 shadow-sm transition-colors"
            >
              {t.startQuizNav}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
