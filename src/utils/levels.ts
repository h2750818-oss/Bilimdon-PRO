import { MultilingualText } from '../types';

export interface LevelThreshold {
  level: number;
  minPoints: number;
  maxPoints: number;
  title: MultilingualText;
  badgeColor: string;
}

export const LEVEL_THRESHOLDS: LevelThreshold[] = [
  {
    level: 1,
    minPoints: 0,
    maxPoints: 49,
    title: {
      uz: 'Yangi boshlovchi',
      ru: 'Новичок',
      en: 'Novice',
    },
    badgeColor: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
  },
  {
    level: 2,
    minPoints: 50,
    maxPoints: 119,
    title: {
      uz: 'Izlanuvchi o‘quvchi',
      ru: 'Ученик',
      en: 'Apprentice',
    },
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
  },
  {
    level: 3,
    minPoints: 120,
    maxPoints: 219,
    title: {
      uz: 'Bilimdon',
      ru: 'Знаток',
      en: 'Scholar',
    },
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
  },
  {
    level: 4,
    minPoints: 220,
    maxPoints: 349,
    title: {
      uz: 'Mutaxassis',
      ru: 'Эксперт',
      en: 'Expert',
    },
    badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300',
  },
  {
    level: 5,
    minPoints: 350,
    maxPoints: 499,
    title: {
      uz: 'Zukko Usta',
      ru: 'Мастер',
      en: 'Master',
    },
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
  },
  {
    level: 6,
    minPoints: 500,
    maxPoints: Infinity,
    title: {
      uz: 'Bilimdon PRO Afsona',
      ru: 'Легенда Bilimdon PRO',
      en: 'Bilimdon PRO Legend',
    },
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  },
];

export function getLevelInfo(points: number) {
  const currentThreshold =
    LEVEL_THRESHOLDS.find(
      (threshold) => points >= threshold.minPoints && points <= threshold.maxPoints
    ) || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];

  const nextThreshold = LEVEL_THRESHOLDS.find((threshold) => threshold.level === currentThreshold.level + 1);

  let progressPercentage = 100;
  let pointsToNext = 0;

  if (nextThreshold) {
    const range = nextThreshold.minPoints - currentThreshold.minPoints;
    const currentProgress = points - currentThreshold.minPoints;
    progressPercentage = Math.min(100, Math.max(0, Math.round((currentProgress / range) * 100)));
    pointsToNext = Math.max(0, nextThreshold.minPoints - points);
  }

  return {
    level: currentThreshold.level,
    title: currentThreshold.title,
    badgeColor: currentThreshold.badgeColor,
    minPoints: currentThreshold.minPoints,
    maxPoints: currentThreshold.maxPoints,
    nextLevelPoints: nextThreshold ? nextThreshold.minPoints : null,
    progressPercentage,
    pointsToNext,
    isMaxLevel: !nextThreshold,
  };
}
