import { Language } from '../types';

export const TRANSLATIONS = {
  uz: {
    // Brand & Nav
    brandName: 'Bilimdon PRO',
    tagline: 'Bilimingni sinab ko‘r, yangi marralarni zabt et!',
    navHome: 'Asosiy',
    navQuizzes: 'Testlar',
    navResults: 'Natijalar va yutuqlar',
    navAbout: 'Platforma haqida',
    startQuizNav: 'Testni boshlash',
    scoreLabel: 'Ballar',
    ptsShort: 'ball',
    levelLabel: 'Daraja',

    // Hero
    heroBadge: 'Interaktiv ta’lim platformasi',
    heroTitlePrefix: 'Bilimingizni sinab ko‘ring, ',
    heroTitleHighlight: 'yangi marralarni',
    heroTitleSuffix: ' zabt eting!',
    heroDescription:
      'Matematika, tarix, geografiya, ingliz tili va umumiy bilimlar bo‘yicha interaktiv testlar. Qobiliyatlaringizni charxlab, yutuqlar to‘plang va shaxsiy natijalaringizni rivojlantiring.',
    heroStartQuiz: 'Hoziroq test boshlash',
    heroExploreSubjects: 'Fanlarni ko‘rish',
    heroTotalQuestions: '35+ original savol',
    heroTotalSubjects: '5 ta asosiy fan',
    heroInstantFeedback: 'Har bir savolga tushuntirish',
    heroPointsPerCorrect: 'Har bir to‘g‘ri javobga +10 ball',

    // Daily Challenge
    dailyChallengeTitle: 'Kunlik sinov — Savoli',
    dailyChallengeSubtitle: 'Har kuni bitta yangi topshiriq bilan ongingizni charxlang',
    dailyBadgeLabel: 'Kunlik savol',
    dailyAnswerPrompt: 'To‘g‘ri javobni tanlang va tekshiring:',
    dailySubmitBtn: 'Javobni tasdiqlash',
    dailyCompletedBadge: 'Bugungi sinov muvaffaqiyatli topshirildi!',
    dailyPointsAwarded: '+10 ball hisobingizga qo‘shildi',
    dailyAlreadyAnswered: 'Siz bugun ushbu savolga javob bergansiz. Yangi sinov ertaga ochiladi.',
    dailyExplanationTitle: 'Batafsil tushuntirish:',
    dailyCorrect: 'Barakalla! Javobingiz to‘g‘ri.',
    dailyIncorrect: 'Afsuski, javob noto‘g‘ri bo‘ldi. Tushuntirish bilan tanishing:',

    // Subjects
    subjectsSectionTitle: 'Fan yo‘nalishlari',
    subjectsSectionSubtitle: 'O‘zingiz qiziqqan fanni tanlang va bilimlaringizni sinab ko‘ring',
    questionsCountSuffix: 'ta savol mavjud',
    startSubjectQuiz: 'Ushbu fandan boshlash',
    allSubjectsTab: 'Barcha fanlar aralash',

    // How it works
    howItWorksTitle: 'Bilimdon PRO qanday ishlaydi?',
    howItWorksSubtitle: 'Uchta oddiy qadamda bilimingizni mustahkamlang',
    step1Title: 'Fanni va rejimni tanlang',
    step1Desc: 'Qiziqqan sohangiz, murakkablik darajasi va vaqt cheklovini o‘zingizga moslang.',
    step2Title: 'Savollarga javob bering',
    step2Desc: 'Interaktiv kartalar orqali javob bering va darhol ilmiy tushuntirishlarni o‘rganing.',
    step3Title: 'Ballar va nishonlar to‘plang',
    step3Desc: 'Har bir to‘g‘ri javob uchun ball oling, darajalarni ko‘taring va yutuqlarni oching.',

    // Statistics
    statsTitle: 'Sizning o‘rganish statistikangiz',
    statsSubtitle: 'Barcha ko‘rsatkichlar brauzeringizdagi real natijalar asosida hisoblanadi',
    statTotalQuizzes: 'Topshirilgan testlar',
    statCorrectAnswers: 'To‘g‘ri javoblar',
    statIncorrectAnswers: 'Noto‘g‘ri javoblar',
    statAccuracy: 'O‘rtacha aniqlik',
    statTotalPoints: 'Umumiy ballar',
    statBestScore: 'Eng yaxshi natija',

    // Quiz Config
    quizModalTitle: 'Yangi test parametrlarini tanlang',
    quizModalSubtitle: 'O‘zingizga qulay rejimni sozlab oling',
    subjectSelectorLabel: 'Fan yo‘nalishi',
    allCategoriesOption: 'Barcha fanlar (Aralash test)',
    difficultyLabel: 'Murakkablik darajasi',
    diffAll: 'Barcha darajalar',
    diffBeginner: 'Boshlang‘ich (Beginner)',
    diffIntermediate: 'O‘rta (Intermediate)',
    diffAdvanced: 'Murakkab (Advanced)',
    countSelectorLabel: 'Savollar soni',
    timerSelectorLabel: 'Vaqt hisoblagich (Savol uchun taymer)',
    timerOff: 'Vaqt cheklovisiz (O‘ylab yechish)',
    timer15: 'Tezkor: 15 soniya',
    timer30: 'Klassik: 30 soniya',
    startQuizAction: 'Testni boshlash',
    cancelAction: 'Bekor qilish',
    notEnoughQuestions: 'Ushbu filtr bo‘yicha yetarli savol topilmadi. Boshqa filtrni tanlang.',

    // Active Quiz
    questionOf: 'Savol',
    fromTotal: 'dan',
    timeLeft: 'Qolgan vaqt',
    secondsShort: 'soniya',
    timeOutAlert: 'Vaqt tugadi!',
    selectOptionHint: 'Javob variantlaridan birini tanlang yoki klaviaturadagi 1, 2, 3, 4 tugmalaridan foydalaning:',
    submitAnswerBtn: 'Javobni tasdiqlash',
    nextQuestionBtn: 'Keyingi savol',
    finishQuizBtn: 'Natijani ko‘rish',
    correctBadge: 'To‘g‘ri javob!',
    incorrectBadge: 'Noto‘g‘ri javob!',
    explanationHeader: 'Ilmiy tushuntirish:',
    quitQuizPrompt: 'Testni to‘xtatish',
    quitQuizConfirm: 'Haqiqatan ham testni to‘xtatmoqchimisiz? Joriy natijalar saqlanmaydi.',

    // Quiz Results Screen
    resultPerfectTitle: 'Qoyilmaqom g‘alaba! 100% natija!',
    resultGreatTitle: 'Ajoyib natija! Barakalla!',
    resultGoodTitle: 'Yaxshi ko‘rsatkich! Rivojlanishda davom eting!',
    resultTryAgainTitle: 'Yaxshi urinish! Yana bir bor mashq qiling!',
    resultScoreSummary: 'Ushbu testdan to‘plangan ball:',
    resultCorrectRatio: 'To‘g‘ri javoblar',
    resultIncorrectRatio: 'Noto‘g‘ri javoblar',
    resultAccuracy: 'Aniqlik ko‘rsatkichi',
    resultTimeTaken: 'Sarflangan vaqt',
    reviewAnswersBtn: 'Javoblarni tahlil qilish',
    playAgainBtn: 'Qayta urinib ko‘rish',
    chooseAnotherCategoryBtn: 'Boshqa fanni tanlash',

    // Review Modal
    reviewModalTitle: 'Savollar tahlili va tushuntirishlar',
    reviewModalSubtitle: 'Qaysi savolga qanday javob berganingizni batafsil ko‘rib chiqing',
    reviewYourAnswer: 'Sizning javobingiz',
    reviewCorrectAnswer: 'To‘g‘ri javob',
    reviewExplanation: 'Tushuntirish',
    closeBtn: 'Yopish',

    // Results Dashboard & Achievements
    dashboardTitle: 'Natijalar va shaxsiy profil',
    dashboardSubtitle: 'O‘zlashtirish dinamikasi, yutuqlar to‘plami va mahalliy reyting',
    currentLevelTitle: 'Joriy darajangiz',
    nextLevelProgress: 'Keyingi darajagacha:',
    pointsNeeded: 'ball kerak',
    maxLevelReached: 'Eng yuqori darajaga yetdingiz!',
    achievementsHeading: 'Yutuqlar to‘plami',
    unlockedBadge: 'Ochilgan',
    lockedBadge: 'Qulflangan',
    unlockedAtText: 'Ochilgan sana',
    subjectPerformanceHeading: 'Fanlar bo‘yicha o‘zlashtirish',
    accuracyText: 'aniqlik',
    noQuizzesYetTitle: 'Hali birorta ham test topshirilmagan',
    noQuizzesYetDesc: 'Birinchi testingizni topshirib, ballar to‘plang va shaxsiy statistikangizni boshlang!',
    startFirstQuizBtn: 'Birinchi testni boshlash',
    recentHistoryHeading: 'Oxirgi testlar tarixi',
    historyDateCol: 'Sana',
    historyCategoryCol: 'Fan',
    historyDifficultyCol: 'Daraja',
    historyScoreCol: 'Ball',
    historyAccuracyCol: 'Aniqlik',
    localLeaderboardHeading: 'Mahalliy sinov reytingi (Demo)',
    localLeaderboardNotice:
      'Eslatma: Ushbu reyting mahalliy namuna hisoblanadi va sizning hozirgi brauzeringizdagi haqiqiy balingizni o‘quvchi etalonlari bilan taqqoslaydi.',
    youIndicator: 'Siz',
    resetProgressBtn: 'Barcha natijalarni tozalash',

    // Reset Modal
    resetModalTitle: 'O‘rganish natijalarini tozalashni tasdiqlaysizmi?',
    resetModalWarning:
      'Diqqat: Ushbu amal barcha to‘plangan ballar, daraja, ochilgan yutuqlar, kunlik sinov holati va testlar tarixini butunlay o‘chirib yuboradi.',
    resetModalDisclaimer: 'O‘chirilgan ma’lumotlarni qayta tiklab bo‘lmaydi.',
    confirmResetBtn: 'Ha, tozalash',
    cancelResetBtn: 'Bekor qilish',

    // About Section
    aboutSectionTitle: 'Bilimdon PRO haqida',
    aboutSectionSubtitle: 'Zamonaviy, xavfsiz va qulay interaktiv ta’lim platformasi',
    aboutMissionTitle: 'Bizning maqsadimiz',
    aboutMissionText:
      'Bilimdon PRO — yoshlar, talabalar va o‘z ustida ishlovchi har bir inson uchun ilmiy bilimlarni qiziqarli o‘yin elementlari (gamification) orqali mustahkamlashga mo‘ljallangan ochiq ta’lim platformasi.',
    aboutStorageTitle: 'Ma’lumotlar qanday saqlanadi?',
    aboutStorageText:
      'Platforma to‘liq maxfiylik tamoyiliga tayanadi. Sizning barcha ballaringiz, o‘rganish statistikangiz va yutuqlaringiz faqatgina o‘zingizning qurilmangizdagi brauzer xotirasida (localStorage) saqlanadi. Hech qanday shaxsiy ma’lumot yoki tashqi server talab etilmaydi.',
    aboutPointsSystemTitle: 'Ballar va baholash qoidalari',
    aboutPointsSystemText:
      'Har bir to‘g‘ri javob uchun qat’iy +10 ball beriladi. Xato javoblar uchun ball olib tashlanmaydi. Bir xil savolga takroran ball yozilishi oldi olingan. Ballar yig‘ilib borgach, darajangiz yangilanadi va yangi yutuqlar ochiladi.',
    faqHeading: 'Ko‘p so‘raladigan savollar',
    faq1Question: 'Internet bo‘lmasa ham ishlaydimi?',
    faq1Answer: 'Ha, barcha savollar va tizim funksiyalari to‘g‘ridan-to‘g‘ri ilova ichiga joylashtirilgan bo‘lib, to‘liq oflayn ishlaydi.',
    faq2Question: 'Boshqa telefonda yoki kompyuterda davom ettirish mumkinmi?',
    faq2Answer: 'Statistika faqat siz foydalanayotgan brauzerda saqlanadi. Agar boshqa qurilmaga o‘tsangiz, o‘sha qurilmada yangidan ball to‘planadi.',
    faq3Question: 'Savollar bazasi kengayadimi?',
    faq3Answer: 'Hozirda 35 dan ortiq keng qamrovli 3 tilli savollar mavjud bo‘lib, fanlar bo‘yicha yangilanib boriladi.',

    // Footer
    footerRights: 'Bilimdon PRO — Barcha huquqlar himoyalangan.',
    footerTagline: 'Bilimingni sinab ko‘r, yangi marralarni zabt et!',
    backToTop: 'Yuqoriga qaytish',

    // A11y
    themeToggleAria: 'Mavzuni almashtirish (yorug‘ / qorong‘i)',
    soundToggleAria: 'Ovoz effektlarini yoqish yoki o‘chirish',
    mobileMenuOpen: 'Menyuni ochish',
    mobileMenuClose: 'Menyuni yopish',
    languageSelectorAria: 'Tilni tanlash',
  },

  ru: {
    // Brand & Nav
    brandName: 'Bilimdon PRO',
    tagline: 'Проверь свои знания, покоряй новые вершины!',
    navHome: 'Главная',
    navQuizzes: 'Тесты',
    navResults: 'Результаты и награды',
    navAbout: 'О платформе',
    startQuizNav: 'Начать тест',
    scoreLabel: 'Баллы',
    ptsShort: 'б.',
    levelLabel: 'Уровень',

    // Hero
    heroBadge: 'Интерактивная образовательная платформа',
    heroTitlePrefix: 'Проверьте свои знания, ',
    heroTitleHighlight: 'покоряйте новые',
    heroTitleSuffix: ' вершины!',
    heroDescription:
      'Интерактивные тесты по математике, истории, географии, английскому языку и общему кругозору. Развивайте эрудицию, открывайте достижения и ставьте личные рекорды.',
    heroStartQuiz: 'Начать тест прямо сейчас',
    heroExploreSubjects: 'Выбрать предмет',
    heroTotalQuestions: '35+ авторских вопросов',
    heroTotalSubjects: '5 ключевых предметов',
    heroInstantFeedback: 'Объяснение к каждому вопросу',
    heroPointsPerCorrect: '+10 баллов за каждый верный ответ',

    // Daily Challenge
    dailyChallengeTitle: 'Ежедневный вызов — Вопрос дня',
    dailyChallengeSubtitle: 'Каждый день развивайте ум с новым увлекательным вопросом',
    dailyBadgeLabel: 'Вопрос дня',
    dailyAnswerPrompt: 'Выберите правильный вариант ответа и проверьте себя:',
    dailySubmitBtn: 'Подтвердить ответ',
    dailyCompletedBadge: 'Вызов дня успешно пройден!',
    dailyPointsAwarded: '+10 баллов зачислено на ваш баланс',
    dailyAlreadyAnswered: 'Вы уже ответили на вопрос дня. Следующий вызов откроется завтра.',
    dailyExplanationTitle: 'Подробное объяснение:',
    dailyCorrect: 'Великолепно! Ваш ответ абсолютно верен.',
    dailyIncorrect: 'К сожалению, ответ неверный. Ознакомьтесь с объяснением:',

    // Subjects
    subjectsSectionTitle: 'Учебные дисциплины',
    subjectsSectionSubtitle: 'Выберите интересующий вас предмет и проверьте уровень знаний',
    questionsCountSuffix: 'вопросов в базе',
    startSubjectQuiz: 'Пройти тест по предмету',
    allSubjectsTab: 'Все предметы (микс)',

    // How it works
    howItWorksTitle: 'Как устроен Bilimdon PRO?',
    howItWorksSubtitle: 'Три простых шага к систематическому повышению знаний',
    step1Title: 'Выберите предмет и настройки',
    step1Desc: 'Настройте категорию, уровень сложности и таймер под свои предпочтения.',
    step2Title: 'Отвечайте на вопросы',
    step2Desc: 'Интерактивные карточки с мгновенной обратной связью и подробным разбором.',
    step3Title: 'Получайте баллы и награды',
    step3Desc: 'Зарабатывайте баллы за правильные ответы, повышайте уровень и открывайте трофеи.',

    // Statistics
    statsTitle: 'Ваша статистика обучения',
    statsSubtitle: 'Все показатели рассчитываются исключительно на основе ваших реальных ответов',
    statTotalQuizzes: 'Пройдено тестов',
    statCorrectAnswers: 'Верных ответов',
    statIncorrectAnswers: 'Ошибок',
    statAccuracy: 'Точность ответов',
    statTotalPoints: 'Всего баллов',
    statBestScore: 'Лучший результат',

    // Quiz Config
    quizModalTitle: 'Настройки нового теста',
    quizModalSubtitle: 'Выберите параметры прохождения теста',
    subjectSelectorLabel: 'Предмет',
    allCategoriesOption: 'Все предметы (Смешанный тест)',
    difficultyLabel: 'Уровень сложности',
    diffAll: 'Все уровни',
    diffBeginner: 'Начальный (Beginner)',
    diffIntermediate: 'Средний (Intermediate)',
    diffAdvanced: 'Продвинутый (Advanced)',
    countSelectorLabel: 'Количество вопросов',
    timerSelectorLabel: 'Таймер на вопрос',
    timerOff: 'Без ограничения по времени',
    timer15: 'Быстрый: 15 секунд',
    timer30: 'Классический: 30 секунд',
    startQuizAction: 'Начать тест',
    cancelAction: 'Отмена',
    notEnoughQuestions: 'По выбранным критериям недостаточно вопросов. Измените параметры.',

    // Active Quiz
    questionOf: 'Вопрос',
    fromTotal: 'из',
    timeLeft: 'Осталось времени',
    secondsShort: 'сек.',
    timeOutAlert: 'Время вышло!',
    selectOptionHint: 'Выберите вариант ответа или используйте клавиши 1, 2, 3, 4 на клавиатуре:',
    submitAnswerBtn: 'Подтвердить ответ',
    nextQuestionBtn: 'Следующий вопрос',
    finishQuizBtn: 'Завершить и узнать результат',
    correctBadge: 'Верно!',
    incorrectBadge: 'Неверно!',
    explanationHeader: 'Научное пояснение:',
    quitQuizPrompt: 'Прервать тест',
    quitQuizConfirm: 'Вы действительно хотите прервать тест? Текущий прогресс не сохранится.',

    // Quiz Results Screen
    resultPerfectTitle: 'Блестящая победа! 100% точность!',
    resultGreatTitle: 'Отличный результат! Так держать!',
    resultGoodTitle: 'Хороший результат! Продолжайте практиковаться!',
    resultTryAgainTitle: 'Хорошая попытка! Попробуйте еще раз!',
    resultScoreSummary: 'Баллов за этот тест:',
    resultCorrectRatio: 'Верных ответов',
    resultIncorrectRatio: 'Неверных ответов',
    resultAccuracy: 'Процент точности',
    resultTimeTaken: 'Затраченное время',
    reviewAnswersBtn: 'Разбор ответов',
    playAgainBtn: 'Пройти снова',
    chooseAnotherCategoryBtn: 'Выбрать другой предмет',

    // Review Modal
    reviewModalTitle: 'Разбор вопросов и пояснения',
    reviewModalSubtitle: 'Подробный анализ каждого вопроса и вашего ответа',
    reviewYourAnswer: 'Ваш ответ',
    reviewCorrectAnswer: 'Правильный ответ',
    reviewExplanation: 'Пояснение',
    closeBtn: 'Закрыть',

    // Results Dashboard & Achievements
    dashboardTitle: 'Результаты и личный прогресс',
    dashboardSubtitle: 'Динамика обучения, коллекция наград и локальный рейтинг',
    currentLevelTitle: 'Текущий ранг',
    nextLevelProgress: 'До следующего уровня:',
    pointsNeeded: 'баллов осталось',
    maxLevelReached: 'Достигнут максимальный уровень!',
    achievementsHeading: 'Коллекция достижений',
    unlockedBadge: 'Открыто',
    lockedBadge: 'Заблокировано',
    unlockedAtText: 'Дата получения',
    subjectPerformanceHeading: 'Успеваемость по предметам',
    accuracyText: 'точность',
    noQuizzesYetTitle: 'Вы пока не прошли ни одного теста',
    noQuizzesYetDesc: 'Пройдите свой первый тест, чтобы начать копить баллы и формировать личную статистику!',
    startFirstQuizBtn: 'Начать первый тест',
    recentHistoryHeading: 'История недавних тестов',
    historyDateCol: 'Дата',
    historyCategoryCol: 'Предмет',
    historyDifficultyCol: 'Сложность',
    historyScoreCol: 'Баллы',
    historyAccuracyCol: 'Точность',
    localLeaderboardHeading: 'Локальная таблица лидеров (Демо)',
    localLeaderboardNotice:
      'Примечание: Таблица демонстрирует сопоставление ваших фактических результатов с модельными эталонами.',
    youIndicator: 'Вы',
    resetProgressBtn: 'Сбросить весь прогресс',

    // Reset Modal
    resetModalTitle: 'Подтвердите сброс прогресса',
    resetModalWarning:
      'Внимание: Это действие безвозвратно удалит все накопленные баллы, уровни, открытые награды, статус ежедневного вызова и историю тестов.',
    resetModalDisclaimer: 'Удаленные данные невозможно восстановить.',
    confirmResetBtn: 'Да, сбросить данные',
    cancelResetBtn: 'Отмена',

    // About Section
    aboutSectionTitle: 'О платформе Bilimdon PRO',
    aboutSectionSubtitle: 'Современное, надежное и удобное решение для интерактивного обучения',
    aboutMissionTitle: 'Наша цель',
    aboutMissionText:
      'Bilimdon PRO создана для студентов, школьников и всех стремящихся к постоянному саморазвитию. Мы превращаем проверку знаний в увлекательный процесс с элементами геймификации.',
    aboutStorageTitle: 'Как хранятся данные?',
    aboutStorageText:
      'Платформа обеспечивает полную конфиденциальность. Все ваши результаты, баллы и награды хранятся исключительно локально в памяти вашего браузера (localStorage). Никакие персональные данные не отправляются на удаленные серверы.',
    aboutPointsSystemTitle: 'Система начисления баллов',
    aboutPointsSystemText:
      'За каждый правильный ответ начисляется ровно 10 баллов. Штрафов за ошибки нет. Повторное начисление баллов за один и тот же вопрос исключено. По мере накопления баллов повышается ранг и открываются награды.',
    faqHeading: 'Часто задаваемые вопросы',
    faq1Question: 'Работает ли платформа без интернета?',
    faq1Answer: 'Да, вся база вопросов и логика находятся внутри приложения и функционируют полностью автономно.',
    faq2Question: 'Синхронизируются ли данные между телефоном и компьютером?',
    faq2Answer: 'Нет, прогресс сохраняется в текущем браузере. На новом устройстве накопление баллов начнется сначала.',
    faq3Question: 'Сколько вопросов доступно?',
    faq3Answer: 'В базе представлено более 35 выверенных мультиязычных вопросов по 5 ключевым предметам.',

    // Footer
    footerRights: 'Bilimdon PRO — Все права защищены.',
    footerTagline: 'Проверь свои знания, покоряй новые вершины!',
    backToTop: 'Наверх',

    // A11y
    themeToggleAria: 'Переключить тему оформления (светлая / темная)',
    soundToggleAria: 'Включить или выключить звуковые эффекты',
    mobileMenuOpen: 'Открыть меню навигации',
    mobileMenuClose: 'Закрыть меню',
    languageSelectorAria: 'Выбор языка интерфейса',
  },

  en: {
    // Brand & Nav
    brandName: 'Bilimdon PRO',
    tagline: 'Test your knowledge, conquer new heights!',
    navHome: 'Home',
    navQuizzes: 'Quizzes',
    navResults: 'Results & Badges',
    navAbout: 'About',
    startQuizNav: 'Start Quiz',
    scoreLabel: 'Points',
    ptsShort: 'pts',
    levelLabel: 'Level',

    // Hero
    heroBadge: 'Interactive Learning Platform',
    heroTitlePrefix: 'Test your knowledge, ',
    heroTitleHighlight: 'conquer new',
    heroTitleSuffix: ' heights!',
    heroDescription:
      'Interactive quizzes covering mathematics, history, geography, English, and general knowledge. Sharpen your skills, earn achievements, and track your personal learning journey.',
    heroStartQuiz: 'Start Quiz Now',
    heroExploreSubjects: 'Explore Subjects',
    heroTotalQuestions: '35+ original questions',
    heroTotalSubjects: '5 core disciplines',
    heroInstantFeedback: 'Scientific explanation for each question',
    heroPointsPerCorrect: '+10 points per correct answer',

    // Daily Challenge
    dailyChallengeTitle: 'Daily Challenge — Question of the Day',
    dailyChallengeSubtitle: 'Sharpen your mind each day with a fresh, curated question',
    dailyBadgeLabel: 'Daily Quest',
    dailyAnswerPrompt: 'Select the correct answer choice below:',
    dailySubmitBtn: 'Submit Answer',
    dailyCompletedBadge: 'Today’s challenge successfully completed!',
    dailyPointsAwarded: '+10 points credited to your account',
    dailyAlreadyAnswered: 'You have already answered today’s challenge. The next quest unlocks tomorrow.',
    dailyExplanationTitle: 'Detailed Explanation:',
    dailyCorrect: 'Well done! Your answer is correct.',
    dailyIncorrect: 'Incorrect answer. Review the explanation below:',

    // Subjects
    subjectsSectionTitle: 'Subject Disciplines',
    subjectsSectionSubtitle: 'Choose a subject that sparks your curiosity and test your skills',
    questionsCountSuffix: 'questions available',
    startSubjectQuiz: 'Take Subject Quiz',
    allSubjectsTab: 'All Subjects Combined',

    // How it works
    howItWorksTitle: 'How Bilimdon PRO Works',
    howItWorksSubtitle: 'Three simple steps to test and expand your knowledge',
    step1Title: 'Select Subject & Settings',
    step1Desc: 'Customize your subject, difficulty tier, and optional countdown timer.',
    step2Title: 'Answer Questions',
    step2Desc: 'Enjoy accessible interactive cards with immediate answers and scientific explanations.',
    step3Title: 'Earn Points & Badges',
    step3Desc: 'Gain points for correct answers, progress through student tiers, and unlock trophies.',

    // Statistics
    statsTitle: 'Your Learning Statistics',
    statsSubtitle: 'All metrics are computed strictly from your verified local quiz completions',
    statTotalQuizzes: 'Quizzes Completed',
    statCorrectAnswers: 'Correct Answers',
    statIncorrectAnswers: 'Incorrect Answers',
    statAccuracy: 'Accuracy Rate',
    statTotalPoints: 'Total Points',
    statBestScore: 'Personal Best',

    // Quiz Config
    quizModalTitle: 'Configure New Quiz',
    quizModalSubtitle: 'Set up your preferred quiz session parameters',
    subjectSelectorLabel: 'Subject Category',
    allCategoriesOption: 'All Subjects (Mixed Quiz)',
    difficultyLabel: 'Difficulty Level',
    diffAll: 'All Difficulties',
    diffBeginner: 'Beginner',
    diffIntermediate: 'Intermediate',
    diffAdvanced: 'Advanced',
    countSelectorLabel: 'Number of Questions',
    timerSelectorLabel: 'Per-Question Countdown Timer',
    timerOff: 'Untimed (Self-paced)',
    timer15: 'Rapid: 15 Seconds',
    timer30: 'Standard: 30 Seconds',
    startQuizAction: 'Launch Quiz',
    cancelAction: 'Cancel',
    notEnoughQuestions: 'Not enough questions match your chosen filters. Please adjust selections.',

    // Active Quiz
    questionOf: 'Question',
    fromTotal: 'of',
    timeLeft: 'Time remaining',
    secondsShort: 'sec',
    timeOutAlert: 'Time has expired!',
    selectOptionHint: 'Select an answer choice or press keys 1, 2, 3, 4 on your keyboard:',
    submitAnswerBtn: 'Submit Answer',
    nextQuestionBtn: 'Next Question',
    finishQuizBtn: 'Complete Quiz & View Score',
    correctBadge: 'Correct!',
    incorrectBadge: 'Incorrect!',
    explanationHeader: 'Explanation:',
    quitQuizPrompt: 'Exit Quiz',
    quitQuizConfirm: 'Are you sure you want to exit? In-progress quiz answers will not be recorded.',

    // Quiz Results Screen
    resultPerfectTitle: 'Flawless Victory! 100% Accuracy!',
    resultGreatTitle: 'Great Job! Well done!',
    resultGoodTitle: 'Solid performance! Keep practicing!',
    resultTryAgainTitle: 'Good effort! Try again to boost your score!',
    resultScoreSummary: 'Points earned this session:',
    resultCorrectRatio: 'Correct Answers',
    resultIncorrectRatio: 'Incorrect Answers',
    resultAccuracy: 'Accuracy Rate',
    resultTimeTaken: 'Time Taken',
    reviewAnswersBtn: 'Review Answers',
    playAgainBtn: 'Play Again',
    chooseAnotherCategoryBtn: 'Choose Another Category',

    // Review Modal
    reviewModalTitle: 'Question Review & Explanations',
    reviewModalSubtitle: 'Detailed breakdown of every question and your selected response',
    reviewYourAnswer: 'Your Choice',
    reviewCorrectAnswer: 'Correct Choice',
    reviewExplanation: 'Explanation',
    closeBtn: 'Close',

    // Results Dashboard & Achievements
    dashboardTitle: 'Results & Progress Dashboard',
    dashboardSubtitle: 'Your mastery growth, unlocked achievements, and local benchmark rankings',
    currentLevelTitle: 'Current Rank',
    nextLevelProgress: 'Progress to next level:',
    pointsNeeded: 'points needed',
    maxLevelReached: 'Maximum rank achieved!',
    achievementsHeading: 'Achievement Showcase',
    unlockedBadge: 'Unlocked',
    lockedBadge: 'Locked',
    unlockedAtText: 'Unlocked on',
    subjectPerformanceHeading: 'Performance by Subject',
    accuracyText: 'accuracy',
    noQuizzesYetTitle: 'No Quizzes Completed Yet',
    noQuizzesYetDesc: 'Take your first quiz to earn points, build your mastery profile, and unlock achievements!',
    startFirstQuizBtn: 'Start First Quiz',
    recentHistoryHeading: 'Recent Quiz History',
    historyDateCol: 'Date',
    historyCategoryCol: 'Subject',
    historyDifficultyCol: 'Difficulty',
    historyScoreCol: 'Score',
    historyAccuracyCol: 'Accuracy',
    localLeaderboardHeading: 'Local Benchmark Standings (Demo)',
    localLeaderboardNotice:
      'Notice: This leaderboard is a simulated local benchmark comparing your real browser score with student cohorts.',
    youIndicator: 'You',
    resetProgressBtn: 'Reset All Learning Progress',

    // Reset Modal
    resetModalTitle: 'Confirm Learning Data Reset',
    resetModalWarning:
      'Warning: This action permanently erases all earned points, ranks, unlocked achievements, daily challenge completion, and quiz history from this browser.',
    resetModalDisclaimer: 'Deleted progress cannot be recovered.',
    confirmResetBtn: 'Yes, Reset Everything',
    cancelResetBtn: 'Cancel',

    // About Section
    aboutSectionTitle: 'About Bilimdon PRO',
    aboutSectionSubtitle: 'A modern, reliable, and accessible educational platform',
    aboutMissionTitle: 'Our Mission',
    aboutMissionText:
      'Bilimdon PRO is designed for students, lifelong learners, and curious minds. We combine scientifically accurate content with thoughtful gamification to make learning engaging and rewarding.',
    aboutStorageTitle: 'How is Data Stored?',
    aboutStorageText:
      'Bilimdon PRO prioritizes user privacy. All your points, learning stats, and unlocked badges are stored exclusively in your local browser’s localStorage. No user accounts, credentials, or remote databases are used.',
    aboutPointsSystemTitle: 'Scoring Rules & Progression',
    aboutPointsSystemText:
      'You earn 10 points for every correct answer. There are zero penalties for incorrect attempts. Duplicate scoring on the same question attempt is strictly prevented. As points accumulate, you ascend through scholarship ranks.',
    faqHeading: 'Frequently Asked Questions',
    faq1Question: 'Does the application work offline?',
    faq1Answer: 'Yes! All question data, audio synthesizers, and scoring logic run directly in your browser without requiring network access.',
    faq2Question: 'Can I sync my progress across multiple devices?',
    faq2Answer: 'Progress is saved within your specific browser storage. Accessing the platform on a different device begins a fresh learning session.',
    faq3Question: 'How many questions are included?',
    faq3Answer: 'Over 35 rigorously verified multilingual questions are available across five primary subjects.',

    // Footer
    footerRights: 'Bilimdon PRO — All rights reserved.',
    footerTagline: 'Test your knowledge, conquer new heights!',
    backToTop: 'Back to top',

    // A11y
    themeToggleAria: 'Toggle light and dark theme',
    soundToggleAria: 'Toggle audio sound effects',
    mobileMenuOpen: 'Open navigation menu',
    mobileMenuClose: 'Close navigation menu',
    languageSelectorAria: 'Select interface language',
  },
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS['en'];

export function useTranslation(lang: Language) {
  return TRANSLATIONS[lang] || TRANSLATIONS.uz;
}
