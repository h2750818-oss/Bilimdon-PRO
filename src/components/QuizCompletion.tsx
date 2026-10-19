import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Award,
  CheckCircle,
  XCircle,
  Percent,
  Clock,
  RotateCcw,
  BookOpen,
  Eye,
} from 'lucide-react';
import { Language, Question, QuizResult } from '../types';
import { useTranslation } from '../i18n/translations';
import { playSound } from '../utils/sound';

interface QuizCompletionProps {
  currentLang: Language;
  result: QuizResult;
  questions: Question[];
  soundEnabled: boolean;
  onPlayAgain: () => void;
  onChooseCategory: () => void;
  onReviewAnswers: () => void;
}

export const QuizCompletion: React.FC<QuizCompletionProps> = ({
  currentLang,
  result,
  questions,
  soundEnabled,
  onPlayAgain,
  onChooseCategory,
  onReviewAnswers,
}) => {
  const t = useTranslation(currentLang);

  // Score count-up microinteraction
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    playSound('complete', soundEnabled);

    const target = result.pointsEarned;
    if (target === 0) {
      setAnimatedScore(0);
      return;
    }

    const duration = 800; // ms
    const steps = 20;
    const stepTime = duration / steps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedScore(target);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.round(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [result.pointsEarned, soundEnabled]);

  // Encouraging feedback
  let title: string = t.resultGoodTitle;
  let bannerColor = 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800';

  if (result.accuracy === 100) {
    title = t.resultPerfectTitle;
    bannerColor = 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800';
  } else if (result.accuracy >= 80) {
    title = t.resultGreatTitle;
    bannerColor = 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800';
  } else if (result.accuracy < 50) {
    title = t.resultTryAgainTitle;
    bannerColor = 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800';
  }

  return (
    <section className="py-12 max-w-3xl mx-auto px-4 sm:px-6 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 text-center">
        {/* Top Trophy Banner */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-md">
            <Trophy className="w-8 h-8" aria-hidden="true" />
          </div>

          <div
            className={`px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider ${bannerColor}`}
          >
            {title}
          </div>

          <div className="pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {t.resultScoreSummary}
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-purple-600 dark:text-purple-400 tabular-nums">
              +{animatedScore} <span className="text-xl">{t.ptsShort}</span>
            </div>
          </div>
        </div>

        {/* 4 Summary Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-medium">{t.resultCorrectRatio}</span>
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
              {result.correctAnswers}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 mb-1">
              <XCircle className="w-4 h-4" />
              <span className="text-xs font-medium">{t.resultIncorrectRatio}</span>
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
              {result.incorrectAnswers}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
              <Percent className="w-4 h-4" />
              <span className="text-xs font-medium">{t.resultAccuracy}</span>
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
              {result.accuracy}%
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-medium">{t.resultTimeTaken}</span>
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
              {result.timeTakenSeconds}s
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onReviewAnswers}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>{t.reviewAnswersBtn}</span>
          </button>

          <button
            type="button"
            onClick={onPlayAgain}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-sm transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.playAgainBtn}</span>
          </button>

          <button
            type="button"
            onClick={onChooseCategory}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.chooseAnotherCategoryBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
