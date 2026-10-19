import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Sparkles,
  CheckCircle,
  Calendar,
  Zap,
  Crown,
  Lock,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  BarChart3,
  Users,
} from 'lucide-react';
import { CategoryId, Language, UserStats } from '../types';
import { useTranslation } from '../i18n/translations';
import { getLevelInfo } from '../utils/levels';
import { ACHIEVEMENTS } from '../data/achievements';
import { CATEGORIES_CONFIG } from '../data/questions';
import { ResetConfirmModal } from './ResetConfirmModal';

interface DashboardProps {
  currentLang: Language;
  userStats: UserStats;
  onStartQuiz: () => void;
  onResetProgress: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  currentLang,
  userStats,
  onStartQuiz,
  onResetProgress,
}) => {
  const t = useTranslation(currentLang);
  const [showResetModal, setShowResetModal] = useState(false);

  const levelInfo = getLevelInfo(userStats.totalPoints);
  const totalAnswered = userStats.totalCorrectAnswers + userStats.totalIncorrectAnswers;
  const overallAccuracy =
    totalAnswered > 0 ? Math.round((userStats.totalCorrectAnswers / totalAnswered) * 100) : 0;

  const renderAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  // Local simulated benchmark leaderboard showing user's live position relative to model cohorts
  const modelPeers = [
    { name: 'Azizbek K.', points: 420, level: 5 },
    { name: 'Elena V.', points: 310, level: 4 },
    { name: 'Sardor M.', points: 240, level: 4 },
    { name: 'Nodira T.', points: 150, level: 3 },
    { name: 'Jasur B.', points: 90, level: 2 },
  ];

  const allLeaderboardEntries = [
    ...modelPeers.map((p) => ({ ...p, isUser: false })),
    { name: `${t.youIndicator} (${levelInfo.title[currentLang]})`, points: userStats.totalPoints, level: levelInfo.level, isUser: true },
  ].sort((a, b) => b.points - a.points);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {t.navResults}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            {t.dashboardTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            {t.dashboardSubtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowResetModal(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 transition-colors self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetProgressBtn}</span>
        </button>
      </div>

      {/* Level & XP Progression Hero Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20 shrink-0">
            <Crown className="w-8 h-8" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              {t.currentLevelTitle}
            </div>
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">
              Lvl {levelInfo.level} · {levelInfo.title[currentLang]}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5 tabular-nums">
              {userStats.totalPoints} {t.ptsShort}
            </div>
          </div>
        </div>

        <div className="md:col-span-8 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {levelInfo.isMaxLevel ? t.maxLevelReached : t.nextLevelProgress}
            </span>
            {!levelInfo.isMaxLevel && (
              <span className="text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                {levelInfo.pointsToNext} {t.pointsNeeded}
              </span>
            )}
          </div>
          <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 transition-all duration-500"
              style={{ width: `${levelInfo.progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4 Core Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            {t.statTotalPoints}
          </div>
          <div className="text-2xl font-bold font-mono text-purple-600 dark:text-purple-400 tabular-nums">
            {userStats.totalPoints}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            {t.statTotalQuizzes}
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
            {userStats.quizzesCompleted}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            {t.statAccuracy}
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
            {overallAccuracy}%
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            {t.statBestScore}
          </div>
          <div className="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400 tabular-nums">
            {userStats.bestScore} {t.ptsShort}
          </div>
        </div>
      </div>

      {/* Two Column Section: Subject Performance & Local Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Subject Breakdown Chart */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            <span>{t.subjectPerformanceHeading}</span>
          </div>

          <div className="space-y-4 pt-2">
            {CATEGORIES_CONFIG.map((cat) => {
              const stats = userStats.categoryStats[cat.id] || { attempts: 0, correct: 0 };
              const accuracy = stats.attempts > 0 ? Math.round((stats.correct / stats.attempts) * 100) : 0;

              return (
                <div key={cat.id} className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {cat.name[currentLang]}
                    </span>
                    <span className="font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                      {stats.correct}/{stats.attempts} ({accuracy}%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-purple-600 dark:bg-purple-500 rounded-full transition-all duration-300"
                      style={{ width: `${accuracy}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Local Leaderboard */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
            <Users className="w-5 h-5 text-indigo-600" />
            <span>{t.localLeaderboardHeading}</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.localLeaderboardNotice}
          </p>

          <div className="space-y-2 pt-1">
            {allLeaderboardEntries.slice(0, 6).map((entry, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${
                  entry.isUser
                    ? 'bg-purple-50 dark:bg-purple-950/50 border border-purple-300 dark:border-purple-800 font-bold text-purple-950 dark:text-purple-200'
                    : 'bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-mono font-bold text-[10px] text-slate-700 dark:text-slate-300">
                    {idx + 1}
                  </span>
                  <span>{entry.name}</span>
                </div>
                <div className="font-mono font-bold tabular-nums">
                  {entry.points} {t.ptsShort}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Showcase */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.achievementsHeading}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {userStats.unlockedAchievements.length} / {ACHIEVEMENTS.length} {t.unlockedBadge}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((ach) => {
            const isUnlocked = userStats.unlockedAchievements.includes(ach.id);
            const unlockDate = userStats.achievementUnlockDates[ach.id];

            return (
              <div
                key={ach.id}
                className={`p-4 rounded-xl border transition-all ${
                  isUnlocked
                    ? 'bg-purple-50/50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900/60 text-slate-900 dark:text-white'
                    : 'bg-slate-50/50 dark:bg-slate-800/20 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-75'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                      isUnlocked
                        ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    {isUnlocked ? renderAchievementIcon(ach.iconName) : <Lock className="w-4 h-4" />}
                  </div>

                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-xs font-bold truncate">
                        {ach.title[currentLang]}
                      </h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider">
                        {isUnlocked ? t.unlockedBadge : t.lockedBadge}
                      </span>
                    </div>

                    <p className="text-[11px] leading-tight text-slate-600 dark:text-slate-400">
                      {ach.description[currentLang]}
                    </p>

                    <div className="text-[10px] text-slate-400 dark:text-slate-500 pt-1">
                      {isUnlocked && unlockDate ? (
                        <span>
                          {t.unlockedAtText}: {unlockDate.slice(0, 10)}
                        </span>
                      ) : (
                        <span>{ach.conditionDescription[currentLang]}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent History Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          {t.recentHistoryHeading}
        </h2>

        {userStats.recentHistory.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center mx-auto text-purple-600 dark:text-purple-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.noQuizzesYetTitle}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              {t.noQuizzesYetDesc}
            </p>
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 shadow-xs transition-colors"
            >
              <span>{t.startFirstQuizBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="pb-3">{t.historyDateCol}</th>
                  <th className="pb-3">{t.historyCategoryCol}</th>
                  <th className="pb-3">{t.historyDifficultyCol}</th>
                  <th className="pb-3 text-right">{t.historyScoreCol}</th>
                  <th className="pb-3 text-right">{t.historyAccuracyCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {userStats.recentHistory.map((rec) => (
                  <tr key={rec.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-3 font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                      {rec.date.slice(0, 10)} {rec.date.slice(11, 16)}
                    </td>
                    <td className="py-3 font-medium capitalize text-slate-800 dark:text-slate-200">
                      {rec.category}
                    </td>
                    <td className="py-3 capitalize text-slate-500 dark:text-slate-400">
                      {rec.difficulty}
                    </td>
                    <td className="py-3 text-right font-mono font-bold text-purple-600 dark:text-purple-400 tabular-nums">
                      +{rec.pointsEarned} {t.ptsShort}
                    </td>
                    <td className="py-3 text-right font-mono font-bold text-slate-700 dark:text-slate-300 tabular-nums">
                      {rec.accuracy}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Reset Modal */}
      <ResetConfirmModal
        currentLang={currentLang}
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirmReset={() => {
          setShowResetModal(false);
          onResetProgress();
        }}
      />
    </div>
  );
};
