import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_quiz',
    title: {
      uz: 'Birinchi qadam',
      ru: 'Первый шаг',
      en: 'First Step',
    },
    description: {
      uz: 'Dastlabki testni muvaffaqiyatli yakunladingiz',
      ru: 'Вы успешно завершили свой первый тест',
      en: 'Completed your very first quiz',
    },
    conditionDescription: {
      uz: 'Ixtiyoriy bitta testni yakunlang',
      ru: 'Завершите любой один тест',
      en: 'Complete any one quiz',
    },
    iconName: 'Sparkles',
  },
  {
    id: 'five_quizzes',
    title: {
      uz: 'Tirishqoq o‘quvchi',
      ru: 'Прилежный ученик',
      en: 'Persistent Learner',
    },
    description: {
      uz: 'Jami 5 ta testni to‘liq topshirdingiz',
      ru: 'Завершено 5 полноценных тестов',
      en: 'Completed 5 quizzes in total',
    },
    conditionDescription: {
      uz: 'Jami 5 ta testni yakunlang',
      ru: 'Завершите 5 тестов',
      en: 'Finish 5 quizzes',
    },
    iconName: 'Award',
  },
  {
    id: 'perfect_score',
    title: {
      uz: 'A‘lo natija (100%)',
      ru: 'Идеальный результат (100%)',
      en: 'Flawless 100%',
    },
    description: {
      uz: 'Barcha savollarga 100% to‘g‘ri javob berildi',
      ru: 'Все ответы в тесте оказались верными',
      en: 'Answered 100% of questions correctly in a quiz',
    },
    conditionDescription: {
      uz: 'Kamida 5 savolli testda 100% natija ko‘rsating',
      ru: 'Получите 100% в тесте минимум из 5 вопросов',
      en: 'Score 100% on a quiz with at least 5 questions',
    },
    iconName: 'Trophy',
  },
  {
    id: 'ten_correct',
    title: {
      uz: 'O‘nta aniq nishon',
      ru: 'Десятка в яблочко',
      en: 'Ten on Target',
    },
    description: {
      uz: 'Jami 10 ta savolga to‘g‘ri javob berildi',
      ru: 'Набрано 10 правильных ответов за все время',
      en: 'Reached 10 total correct answers',
    },
    conditionDescription: {
      uz: 'Platformada jami 10 ta savolga to‘g‘ri javob bering',
      ru: 'Ответьте правильно на 10 вопросов в сумме',
      en: 'Accumulate 10 correct answers overall',
    },
    iconName: 'CheckCircle',
  },
  {
    id: 'daily_challenge',
    title: {
      uz: 'Kun qahramoni',
      ru: 'Герой дня',
      en: 'Daily Champion',
    },
    description: {
      uz: 'Bugungi kunlik savolga to‘g‘ri javob berildi',
      ru: 'Правильно отвечен сегодняшний вопрос дня',
      en: 'Answered today’s Daily Challenge correctly',
    },
    conditionDescription: {
      uz: 'Kunlik savol topshirig‘ini yeching',
      ru: 'Решите вопрос ежедневного вызова',
      en: 'Solve the daily question challenge',
    },
    iconName: 'Calendar',
  },
  {
    id: 'speed_demon',
    title: {
      uz: 'Tezkor fikrlovchi',
      ru: 'Быстрый ум',
      en: 'Speed Thinker',
    },
    description: {
      uz: 'Vaqtli rejimda kamida 80% aniqlik bilan test yakunlandi',
      ru: 'Пройден тест с таймером и точностью не менее 80%',
      en: 'Finished a timed quiz with at least 80% accuracy',
    },
    conditionDescription: {
      uz: 'Vaqtli testda kamida 80% natija oling',
      ru: 'Завершите тест с таймером с результатом от 80%',
      en: 'Complete a timed quiz scoring 80% or higher',
    },
    iconName: 'Zap',
  },
  {
    id: 'knowledge_master',
    title: {
      uz: 'Qomusiy erudit',
      ru: 'Эрудит',
      en: 'Polymath',
    },
    description: {
      uz: 'Jami 50 ta savolga to‘g‘ri javob berildi',
      ru: 'Накоплено 50 правильных ответов',
      en: 'Accumulated 50 total correct answers',
    },
    conditionDescription: {
      uz: 'Jami 50 ta savolga to‘g‘ri javob bering',
      ru: 'Наберите 50 правильных ответов',
      en: 'Answer 50 questions correctly overall',
    },
    iconName: 'Crown',
  },
];
