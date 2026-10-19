import { Question } from '../types';

export const QUESTIONS_DATA: Question[] = [
  // ===================== MATHEMATICS (7 questions) =====================
  {
    id: 'math_01',
    category: 'math',
    difficulty: 'beginner',
    question: {
      uz: 'Tenglamani yeching: 4x - 7 = 21. x ning qiymati nechaga teng?',
      ru: 'Решите уравнение: 4x - 7 = 21. Чему равен x?',
      en: 'Solve the equation: 4x - 7 = 21. What is the value of x?',
    },
    options: {
      uz: ['5', '7', '8', '6'],
      ru: ['5', '7', '8', '6'],
      en: ['5', '7', '8', '6'],
    },
    correctIndex: 1, // 7 (4*7 - 7 = 21)
    explanation: {
      uz: '4x = 21 + 7 = 28, bundan x = 28 / 4 = 7.',
      ru: '4x = 21 + 7 = 28, следовательно x = 28 / 4 = 7.',
      en: '4x = 21 + 7 = 28, so x = 28 / 4 = 7.',
    },
  },
  {
    id: 'math_02',
    category: 'math',
    difficulty: 'beginner',
    question: {
      uz: 'To‘g‘ri to‘rtburchakning bo‘yi 12 sm, eni 5 sm. Uning yuzi nechaga teng?',
      ru: 'Длина прямоугольника 12 см, а ширина 5 см. Какова его площадь?',
      en: 'A rectangle has a length of 12 cm and a width of 5 cm. What is its area?',
    },
    options: {
      uz: ['34 sm²', '60 sm²', '50 sm²', '70 sm²'],
      ru: ['34 см²', '60 см²', '50 см²', '70 см²'],
      en: ['34 cm²', '60 cm²', '50 cm²', '70 cm²'],
    },
    correctIndex: 1, // 60
    explanation: {
      uz: 'Yuzi S = bo‘yi × eni = 12 × 5 = 60 sm².',
      ru: 'Площадь S = длина × ширина = 12 × 5 = 60 см².',
      en: 'Area S = length × width = 12 × 5 = 60 cm².',
    },
  },
  {
    id: 'math_03',
    category: 'math',
    difficulty: 'intermediate',
    question: {
      uz: 'Quyidagi sonlardan qaysi biri tub son hisoblanadi?',
      ru: 'Какое из следующих чисел является простым числом?',
      en: 'Which of the following numbers is a prime number?',
    },
    options: {
      uz: ['51', '87', '91', '73'],
      ru: ['51', '87', '91', '73'],
      en: ['51', '87', '91', '73'],
    },
    correctIndex: 3, // 73 (51=3*17, 87=3*29, 91=7*13)
    explanation: {
      uz: '73 soni faqat 1 ga va o‘ziga bo‘linadi. 51=3×17, 87=3×29, 91=7×13.',
      ru: '73 делится только на 1 и на себя. 51=3×17, 87=3×29, 91=7×13.',
      en: '73 is divisible only by 1 and itself. 51=3×17, 87=3×29, 91=7×13.',
    },
  },
  {
    id: 'math_04',
    category: 'math',
    difficulty: 'intermediate',
    question: {
      uz: 'Mahsulot narxi 200 000 so‘m edi. U dastlab 20% ga oshirildi, so‘ng 10% chegirma qilindi. Yakuniy narx qancha?',
      ru: 'Товар стоил 200 000 сум. Сначала цена выросла на 20%, затем была скидка 10%. Какова итоговая цена?',
      en: 'An item costs $200. First its price increased by 20%, then it was discounted by 10%. What is the final price?',
    },
    options: {
      uz: ['216 000 so‘m', '220 000 so‘m', '210 000 so‘m', '224 000 so‘m'],
      ru: ['216 000 сум', '220 000 сум', '210 000 сум', '224 000 сум'],
      en: ['$216', '$220', '$210', '$224'],
    },
    correctIndex: 0, // 200 * 1.2 = 240; 240 * 0.9 = 216
    explanation: {
      uz: '200 000 × 1.20 = 240 000. Keyin: 240 000 × 0.90 = 216 000.',
      ru: '200 000 × 1.20 = 240 000. Затем: 240 000 × 0.90 = 216 000.',
      en: '200 × 1.20 = 240. Then: 240 × 0.90 = 216.',
    },
  },
  {
    id: 'math_05',
    category: 'math',
    difficulty: 'intermediate',
    question: {
      uz: 'To‘g‘ri burchakli uchburchakning katetlari 6 sm va 8 sm ga teng. Gipotenuzasi necha sm?',
      ru: 'Катеты прямоугольного треугольника равны 6 см и 8 см. Чему равна гипотенуза?',
      en: 'The legs of a right-angled triangle are 6 cm and 8 cm. What is the length of the hypotenuse?',
    },
    options: {
      uz: ['10 sm', '12 sm', '14 sm', '9 sm'],
      ru: ['10 см', '12 см', '14 см', '9 см'],
      en: ['10 cm', '12 cm', '14 cm', '9 cm'],
    },
    correctIndex: 0, // 10 (Pifagor: 36+64=100 -> 10)
    explanation: {
      uz: 'Pifagor teoremasiga binoan: c² = a² + b² = 6² + 8² = 36 + 64 = 100, demak c = 10 sm.',
      ru: 'По теореме Пифагора: c² = 6² + 8² = 36 + 64 = 100, откуда c = 10 см.',
      en: 'By the Pythagorean theorem: c² = 6² + 8² = 36 + 64 = 100, so c = 10 cm.',
    },
  },
  {
    id: 'math_06',
    category: 'math',
    difficulty: 'advanced',
    question: {
      uz: 'x² - 5x + 6 = 0 kvadrat tenglamasining ildizlari yig‘indisi nechaga teng?',
      ru: 'Чему равна сумма корней квадратного уравнения x² - 5x + 6 = 0?',
      en: 'What is the sum of the roots of the quadratic equation x² - 5x + 6 = 0?',
    },
    options: {
      uz: ['5', '-5', '6', '-6'],
      ru: ['5', '-5', '6', '-6'],
      en: ['5', '-5', '6', '-6'],
    },
    correctIndex: 0, // Viyet: x1+x2 = -(-5)/1 = 5
    explanation: {
      uz: 'Viyet teoremasiga ko‘ra, keltirilgan kvadrat tenglamada ildizlar yig‘indisi x₁ + x₂ = -b/a = -(-5)/1 = 5.',
      ru: 'По теореме Виета сумма корней приведенного квадратного уравнения равна x₁ + x₂ = -b/a = -(-5)/1 = 5.',
      en: 'By Vieta’s formulas, the sum of roots is x₁ + x₂ = -b/a = -(-5)/1 = 5.',
    },
  },
  {
    id: 'math_07',
    category: 'math',
    difficulty: 'advanced',
    question: {
      uz: 'Standart o‘yin zarigi (1 dan 6 gacha) bir marta tashlanganda tub son tushish ehtimoli qancha?',
      ru: 'Какова вероятность выпадения простого числа при одном броске игральной кости (от 1 до 6)?',
      en: 'What is the probability of rolling a prime number with a fair 6-sided die?',
    },
    options: {
      uz: ['1/3', '1/2', '2/3', '1/6'],
      ru: ['1/3', '1/2', '2/3', '1/6'],
      en: ['1/3', '1/2', '2/3', '1/6'],
    },
    correctIndex: 1, // primes in 1..6 are 2, 3, 5 (3 out of 6 = 1/2)
    explanation: {
      uz: '1 dan 6 gacha tub sonlar: 2, 3, 5 (jami 3 ta). Ehtimollik: 3 / 6 = 1/2 (50%).',
      ru: 'Простые числа от 1 до 6: 2, 3, 5 (всего 3). Вероятность: 3 / 6 = 1/2 (50%).',
      en: 'The prime numbers from 1 to 6 are 2, 3, and 5 (3 numbers). Probability: 3/6 = 1/2 (50%).',
    },
  },

  // ===================== HISTORY (7 questions) =====================
  {
    id: 'hist_01',
    category: 'history',
    difficulty: 'beginner',
    question: {
      uz: 'Amir Temur davlatining poytaxti qaysi qadimiy shahar bo‘lgan?',
      ru: 'Какой древний город был столицей государства Амира Темура?',
      en: 'Which historic city was the capital of Amir Timur’s empire?',
    },
    options: {
      uz: ['Buxoro', 'Samarqand', 'Xiva', 'Hirot'],
      ru: ['Бухара', 'Самарканд', 'Хива', 'Герат'],
      en: ['Bukhara', 'Samarkand', 'Khiva', 'Herat'],
    },
    correctIndex: 1, // Samarqand
    explanation: {
      uz: 'Amir Temur 1370-yilda o‘z saltanatining poytaxti qilib Samarqand shahrini tanlagan va uni me’morchilik durdonasiga aylantirgan.',
      ru: 'В 1370 году Амир Темур сделал столицей своего государства Самарканд, превратив его в жемчужину архитектуры.',
      en: 'In 1370, Amir Timur chose Samarkand as the capital of his empire and transformed it into an architectural marvel.',
    },
  },
  {
    id: 'hist_02',
    category: 'history',
    difficulty: 'beginner',
    question: {
      uz: 'Qadimgi Misrdagi Gizadagi eng katta ehrom (piramida) kimning sharafiga qurilgan?',
      ru: 'В честь какого фараона была построена Великая пирамида в Гизе?',
      en: 'In honor of which pharaoh was the Great Pyramid of Giza constructed?',
    },
    options: {
      uz: ['Tutanxamun', 'Ramses II', 'Xufu (Xeops)', 'Exnaton'],
      ru: ['Тутанхамон', 'Рамсес II', 'Хуфу (Хеопс)', 'Эхнатон'],
      en: ['Tutankhamun', 'Ramesses II', 'Khufu (Cheops)', 'Akhenaten'],
    },
    correctIndex: 2, // Xufu
    explanation: {
      uz: 'Miloddan avvalgi taxminan 2560-yilda barpo etilgan Buyuk piramida fir’avn Xufu (Xeops) maqbarasi hisoblanadi.',
      ru: 'Великая пирамида в Гизе, построенная около 2560 года до н.э., была возведена как усыпальница фараона Хеопса (Хуфу).',
      en: 'Built around 2560 BC, the Great Pyramid of Giza was constructed as a tomb for pharaoh Khufu (Cheops).',
    },
  },
  {
    id: 'hist_03',
    category: 'history',
    difficulty: 'intermediate',
    question: {
      uz: 'Yevropada birinchi bo‘lib harakatlanuvchi harflar bilan kitob bosish dastgohini kim ixtiro qilgan?',
      ru: 'Кто в Европе изобрел первый печатный станок с подвижными литерами?',
      en: 'Who invented the movable type printing press in Europe?',
    },
    options: {
      uz: ['Yogann Gutenberg', 'Galileo Galiley', 'Isaak Nyuton', 'Leonardo da Vinchi'],
      ru: ['Иоганн Гутенберг', 'Галилео Галилей', 'Исаак Ньютон', 'Леонардо да Винчи'],
      en: ['Johannes Gutenberg', 'Galileo Galilei', 'Isaac Newton', 'Leonardo da Vinci'],
    },
    correctIndex: 0, // Gutenberg
    explanation: {
      uz: 'Yogann Gutenberg 1440-yillarda Germaniyada harakatlanuvchi harfli kitob bosish tizimini kashf etdi.',
      ru: 'Иоганн Гутенберг изобрел печатный станок с подвижными литерами в Германии около 1440 года.',
      en: 'Johannes Gutenberg introduced movable type printing to Europe around the 1440s in Germany.',
    },
  },
  {
    id: 'hist_04',
    category: 'history',
    difficulty: 'intermediate',
    question: {
      uz: 'Buyuk Boburiylar sulolasining asoschisi va mashhur "Boburnoma" muallifi kim?',
      ru: 'Кто был основателем династии Великих Моголов и автором знаменитой «Бабур-наме»?',
      en: 'Who founded the Mughal Empire and authored the famous autobiography "Baburnama"?',
    },
    options: {
      uz: ['Jaloliddin Manguberdi', 'Zahiriddin Muhammad Bobur', 'Alisher Navoiy', 'Mirzo Ulug‘bek'],
      ru: ['Джалалиддин Мангуберди', 'Захириддин Мухаммад Бабур', 'Алишер Навои', 'Мирзо Улугбек'],
      en: ['Jalal al-Din Mangburni', 'Zahir al-Din Muhammad Babur', 'Alisher Navoiy', 'Mirzo Ulugh Beg'],
    },
    correctIndex: 1, // Babur
    explanation: {
      uz: 'Zahiriddin Muhammad Bobur (1483–1530) Boburiylar davlatiga asos solgan va tengsiz tarixiy memuar "Boburnoma"ni yozgan.',
      ru: 'Захириддин Мухаммад Бабур (1483–1530) основал империю Бабуридов и написал бессмертный труд «Бабур-наме».',
      en: 'Zahir al-Din Muhammad Babur (1483–1530) founded the Mughal dynasty and wrote the renowned memoir "Baburnama".',
    },
  },
  {
    id: 'hist_05',
    category: 'history',
    difficulty: 'intermediate',
    question: {
      uz: 'Ikkinchi jahon urushi rasman qaysi yilda tugagan?',
      ru: 'В каком году официально закончилась Вторая мировая война?',
      en: 'In which year did World War II officially end?',
    },
    options: {
      uz: ['1944', '1945', '1946', '1943'],
      ru: ['1944', '1945', '1946', '1943'],
      en: ['1944', '1945', '1946', '1943'],
    },
    correctIndex: 1, // 1945
    explanation: {
      uz: 'Ikkinchi jahon urushi 1945-yil 2-sentabrda Yaponiya taslim bo‘lishi bilan rasman yakunlangan.',
      ru: 'Вторая мировая война завершилась 2 сентября 1945 года с подписанием акта о капитуляции Японии.',
      en: 'World War II concluded on September 2, 1945, with the formal surrender of Japan.',
    },
  },
  {
    id: 'hist_06',
    category: 'history',
    difficulty: 'advanced',
    question: {
      uz: 'Al-Xorazmiy qaysi mashhur ilmiy markazda "Al-jabr val-muqobala" asarini yozgan?',
      ru: 'В каком знаменитом научном центре Аль-Хорезми написал свой труд «Аль-джабр ва-ль-мукабала»?',
      en: 'In which renowned center of learning did Al-Khwarizmi compose "The Compendious Book on Calculation by Completion and Balancing"?',
    },
    options: {
      uz: ['Qohira universiteti', 'Bag‘doddagi "Bayt ul-hikma"', 'Iskandariya kutubxonasi', 'Kordova akademiyasi'],
      ru: ['Каирский университет', 'Багдадский «Дом мудрости»', 'Александрийская библиотека', 'Кордовская академия'],
      en: ['University of Cairo', 'House of Wisdom in Baghdad', 'Library of Alexandria', 'Academy of Cordoba'],
    },
    correctIndex: 1, // Bayt ul-hikma
    explanation: {
      uz: 'Muhammad ibn Muso al-Xorazmiy 9-asrda Bag‘doddagi "Bayt ul-hikma" (Donishmandlik uyi)da faoliyat yuritib, algebra faniga asos solgan.',
      ru: 'Аль-Хорезми работал в 9 веке в багдадском Доме мудрости («Байт аль-хикма»), где заложил основы алгебры.',
      en: 'Al-Khwarizmi conducted research at the House of Wisdom (Bayt al-Hikma) in 9th-century Baghdad, establishing algebra.',
    },
  },
  {
    id: 'hist_07',
    category: 'history',
    difficulty: 'advanced',
    question: {
      uz: 'Insoniyat tarixida Oy sathiga birinchi bo‘lib qadam qo‘ygan fazogir kim?',
      ru: 'Кто был первым астронавтом в истории человечества, ступившим на поверхность Луны?',
      en: 'Who was the first astronaut in human history to walk on the surface of the Moon?',
    },
    options: {
      uz: ['Yuriy Gagarin', 'Nil Armstrong', 'Bazz Oldrin', 'Maykl Kollinz'],
      ru: ['Юрий Гагарин', 'Нил Армстронг', 'Базз Олдрин', 'Майкл Коллинз'],
      en: ['Yuri Gagarin', 'Neil Armstrong', 'Buzz Aldrin', 'Michael Collins'],
    },
    correctIndex: 1, // Neil Armstrong
    explanation: {
      uz: '1969-yil 20-iyulda "Apollon-11" missiyasi qo‘mondoni Nil Armstrong Oygacha yetib borib, birinchi qadamni tashlagan.',
      ru: '20 июля 1969 года командир миссии «Аполлон-11» Нил Армстронг стал первым человеком на поверхности Луны.',
      en: 'On July 20, 1969, Apollo 11 mission commander Neil Armstrong became the first human to step onto the lunar surface.',
    },
  },

  // ===================== GEOGRAPHY (7 questions) =====================
  {
    id: 'geo_01',
    category: 'geography',
    difficulty: 'beginner',
    question: {
      uz: 'O‘zbekiston Respublikasining poytaxti qaysi shahar?',
      ru: 'Какой город является столицей Республики Узбекистан?',
      en: 'Which city is the capital of the Republic of Uzbekistan?',
    },
    options: {
      uz: ['Toshkent', 'Samarqand', 'Andijon', 'Namangan'],
      ru: ['Ташкент', 'Самарканд', 'Андижан', 'Наманган'],
      en: ['Tashkent', 'Samarkand', 'Andijan', 'Namangan'],
    },
    correctIndex: 0, // Toshkent
    explanation: {
      uz: 'Toshkent — O‘zbekistonning poytaxti va Markaziy Osiyodagi eng yirik megapolislardan biri.',
      ru: 'Ташкент — столица Узбекистана и крупнейший мегаполис Центральной Азии.',
      en: 'Tashkent is the capital of Uzbekistan and one of the largest metropolitan areas in Central Asia.',
    },
  },
  {
    id: 'geo_02',
    category: 'geography',
    difficulty: 'beginner',
    question: {
      uz: 'Dunyo okeanidagi eng chuqur botiq qaysi?',
      ru: 'Какая океаническая впадина является самой глубокой на Земле?',
      en: 'Which is the deepest oceanic trench on Earth?',
    },
    options: {
      uz: ['Yava botig‘i', 'Mariana botig‘i', 'Puerto-Riko botig‘i', 'Filippin botig‘i'],
      ru: ['Яванская впадина', 'Марианская впадина', 'Впадина Пуэрто-Рико', 'Филиппинская впадина'],
      en: ['Java Trench', 'Mariana Trench', 'Puerto Rico Trench', 'Philippine Trench'],
    },
    correctIndex: 1, // Mariana
    explanation: {
      uz: 'Tinch okeanidagi Mariana botig‘i (taxminan 11 022 metr) Yer yuzidagi eng chuqur nuqtadir.',
      ru: 'Марианская впадина в Тихом океане (глубина около 11 022 м) — глубочайшее место на планете.',
      en: 'The Mariana Trench in the western Pacific Ocean reaches a maximum depth of approximately 11,022 meters.',
    },
  },
  {
    id: 'geo_03',
    category: 'geography',
    difficulty: 'intermediate',
    question: {
      uz: 'Avstraliya davlatining rasmiy poytaxti qaysi shahar hisoblanadi?',
      ru: 'Какой город является официальной столицей Австралии?',
      en: 'What is the official capital city of Australia?',
    },
    options: {
      uz: ['Sidney', 'Melburn', 'Kanberra', 'Brisben'],
      ru: ['Сидней', 'Мельбурн', 'Канберра', 'Брисбен'],
      en: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    },
    correctIndex: 2, // Canberra
    explanation: {
      uz: 'Avstraliya poytaxti Kanberra shahridir (Sidney va Melburn o‘rtasidagi murosali tanlov sifatida qurilgan).',
      ru: 'Столицей Австралии является Канберра, выбранная в качестве компромисса между Сиднеем и Мельбурном.',
      en: 'Canberra was purposely built and designated as the federal capital of Australia as a compromise between Sydney and Melbourne.',
    },
  },
  {
    id: 'geo_04',
    category: 'geography',
    difficulty: 'intermediate',
    question: {
      uz: 'Yer yuzidagi eng baland tog‘ cho‘qqisi (Everest / Jomolungma) qaysi tog‘ tizmasida joylashgan?',
      ru: 'В какой горной системе находится высочайшая вершина Земли (Эверест / Джомолунгма)?',
      en: 'In which mountain range is Mount Everest (Chomolungma), Earth’s highest peak, located?',
    },
    options: {
      uz: ['And tog‘lari', 'Alp tog‘lari', 'Himolay tog‘lari', 'Tyanshan tog‘lari'],
      ru: ['Анды', 'Альпы', 'Гималаи', 'Тянь-Шань'],
      en: ['Andes', 'Alps', 'Himalayas', 'Tian Shan'],
    },
    correctIndex: 2, // Himalayas
    explanation: {
      uz: 'Everest (8848.86 m) Osiyodagi Himolay tog‘ tizmasida, Nepal va Xitoy chegarasida joylashgan.',
      ru: 'Эверест (8848.86 м) расположен в Гималаях на границе Непала и Китая.',
      en: 'Mount Everest (8,848.86 m) is situated in the Himalayas along the border of Nepal and China.',
    },
  },
  {
    id: 'geo_05',
    category: 'geography',
    difficulty: 'intermediate',
    question: {
      uz: 'Suv hajmi va havzasi kattaligi bo‘yicha dunyodagi eng yirik daryo qaysi?',
      ru: 'Какая река является самой полноводной и обладает самым большим бассейном в мире?',
      en: 'Which river is the largest in the world by water volume and basin size?',
    },
    options: {
      uz: ['Nil', 'Amazonka', 'Yantszi', 'Missisipi'],
      ru: ['Нил', 'Амазонка', 'Янцзы', 'Миссисипи'],
      en: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
    },
    correctIndex: 1, // Amazon
    explanation: {
      uz: 'Janubiy Amerikadagi Amazonka daryosi suv hajmi va havzasi yuzasi bo‘yicha dunyoda birinchi o‘rinda turadi.',
      ru: 'Река Амазонка в Южной Америке — крупнейшая по объёму стока и площади бассейна на планете.',
      en: 'The Amazon River in South America is by far the largest river globally by water discharge and drainage basin area.',
    },
  },
  {
    id: 'geo_06',
    category: 'geography',
    difficulty: 'advanced',
    question: {
      uz: 'Dunyoning eng katta subtropik issiq qumli cho‘li qaysi?',
      ru: 'Какая пустыня является крупнейшей жаркой песчаной пустыней в мире?',
      en: 'Which desert is the largest hot desert on Earth?',
    },
    options: {
      uz: ['Gobi', 'Saxroi Kabir (Sahara)', 'Qoraqum', 'Atakama'],
      ru: ['Гоби', 'Сахара', 'Каракумы', 'Атакама'],
      en: ['Gobi', 'Sahara', 'Karakum', 'Atacama'],
    },
    correctIndex: 1, // Sahara
    explanation: {
      uz: 'Saxroi Kabir (Sahara) 9.2 million km² maydonni egallagan dunyodagi eng katta issiq cho‘ldir.',
      ru: 'Сахара — крупнейшая жаркая пустыня на Земле, занимающая площадь около 9,2 млн км².',
      en: 'The Sahara spans over 9.2 million km², making it the largest hot desert on Earth.',
    },
  },
  {
    id: 'geo_07',
    category: 'geography',
    difficulty: 'advanced',
    question: {
      uz: 'Dunyoda bir vaqtning o‘zida ham Yevropada, ham Osiyoda joylashgan ikkita davlatni toping:',
      ru: 'Укажите пару государств, территория которых расположена одновременно в Европе и Азии:',
      en: 'Which pair of countries has territory in both Europe and Asia?',
    },
    options: {
      uz: ['Turkiya va Qozog‘iston', 'Misr va Suriya', 'Gretsiya va Eron', 'Polsha va Gruziya'],
      ru: ['Турция и Казахстан', 'Египет и Сирия', 'Греция и Иран', 'Польша и Грузия'],
      en: ['Turkey and Kazakhstan', 'Egypt and Syria', 'Greece and Iran', 'Poland and Georgia'],
    },
    correctIndex: 0, // Turkey and Kazakhstan
    explanation: {
      uz: 'Turkiya (Bosfor bo‘g‘ozi orqali) va Qozog‘iston (Ural daryosi g‘arbi orqali) ikkala qit’ada yerga ega transkontinental davlatlardir.',
      ru: 'Турция и Казахстан являются трансконтинентальными государствами, расположенными как в Европе, так и в Азии.',
      en: 'Both Turkey (via the Bosporus) and Kazakhstan (west of the Ural River) span Europe and Asia.',
    },
  },

  // ===================== ENGLISH (7 questions) =====================
  {
    id: 'eng_01',
    category: 'english',
    difficulty: 'beginner',
    question: {
      uz: 'Bo‘sh joyni to‘g‘ri to‘ldiring: "She _____ to the library every Wednesday."',
      ru: 'Заполните пропуск: "She _____ to the library every Wednesday."',
      en: 'Fill in the blank: "She _____ to the library every Wednesday."',
    },
    options: {
      uz: ['go', 'goes', 'going', 'gone'],
      ru: ['go', 'goes', 'going', 'gone'],
      en: ['go', 'goes', 'going', 'gone'],
    },
    correctIndex: 1, // goes
    explanation: {
      uz: 'Present Simple zamonida III shaxs birlikda (he/she/it) fe’lga "-s/-es" qo‘shimchasi qo‘shiladi: "goes".',
      ru: 'В Present Simple для 3-го лица единственного числа (she) глагол принимает окончание -es: "goes".',
      en: 'In Present Simple, third-person singular subjects (she) take the "-s/-es" verb ending: "goes".',
    },
  },
  {
    id: 'eng_02',
    category: 'english',
    difficulty: 'beginner',
    question: {
      uz: '"Piece of cake" inglizcha iborasi qanday ma’noni bildiradi?',
      ru: 'Что означает английская идиома "piece of cake"?',
      en: 'What does the English idiom "a piece of cake" mean?',
    },
    options: {
      uz: ['Mazali shirinlik', 'Juda oson va qiyinchiliksiz ish', 'Qimmatbaho sovg‘a', 'Xavfli vaziyat'],
      ru: ['Вкусный десерт', 'Очень легкое и простое дело', 'Дорогой подарок', 'Опасная ситуация'],
      en: ['A tasty dessert', 'Something very easy to do', 'An expensive gift', 'A dangerous risk'],
    },
    correctIndex: 1, // very easy
    explanation: {
      uz: '"A piece of cake" — xalqaro ibora bo‘lib, "juda oson, qiyinchiliksiz" degan ma’noni anglatadi.',
      ru: '"A piece of cake" означает нечто чрезвычайно легкое и простое в исполнении.',
      en: '"A piece of cake" is an idiom used to describe something that is very simple or effortless.',
    },
  },
  {
    id: 'eng_03',
    category: 'english',
    difficulty: 'intermediate',
    question: {
      uz: '"Meticulous" so‘zining eng yaqin sinonimi qaysi?',
      ru: 'Какой вариант является наиболее точным синонимом слова "meticulous"?',
      en: 'Which word is the closest synonym for "meticulous"?',
    },
    options: {
      uz: ['Careless', 'Careful & thorough', 'Quick', 'Hesitant'],
      ru: ['Careless', 'Careful & thorough', 'Quick', 'Hesitant'],
      en: ['Careless', 'Careful & thorough', 'Quick', 'Hesitant'],
    },
    correctIndex: 1, // Careful & thorough
    explanation: {
      uz: '"Meticulous" — har bir detalga o‘ta sinchkovlik va ehtiyotkorlik bilan yondashishni bildiradi.',
      ru: '"Meticulous" означает исключительно тщательный, аккуратный и внимательный к деталям.',
      en: '"Meticulous" means showing great attention to detail; very careful, precise, and thorough.',
    },
  },
  {
    id: 'eng_04',
    category: 'english',
    difficulty: 'intermediate',
    question: {
      uz: 'Gapni to‘ldiring: "If I _____ harder, I would have passed the exam with distinction."',
      ru: 'Вставьте верную форму: "If I _____ harder, I would have passed the exam with distinction."',
      en: 'Complete the sentence: "If I _____ harder, I would have passed the exam with distinction."',
    },
    options: {
      uz: ['studied', 'had studied', 'study', 'would study'],
      ru: ['studied', 'had studied', 'study', 'would study'],
      en: ['studied', 'had studied', 'study', 'would study'],
    },
    correctIndex: 1, // had studied (Third Conditional)
    explanation: {
      uz: 'Uchinchi shart maylida (Third Conditional) o‘tgan zamon taxmini uchun "If + Past Perfect (had studied)" ishlatiladi.',
      ru: 'В условных предложениях 3-го типа (Third Conditional) в придаточной части используется Past Perfect: "had studied".',
      en: 'Third Conditional sentences use "If + Past Perfect" ("had studied") with "would have + past participle" in the main clause.',
    },
  },
  {
    id: 'eng_05',
    category: 'english',
    difficulty: 'intermediate',
    question: {
      uz: 'Quyidagi jumlada qaysi predlog to‘g‘ri: "The conference starts _____ Monday at 9:00 AM."',
      ru: 'Какой предлог правилен: "The conference starts _____ Monday at 9:00 AM."',
      en: 'Choose the correct preposition: "The conference starts _____ Monday at 9:00 AM."',
    },
    options: {
      uz: ['in', 'at', 'on', 'by'],
      ru: ['in', 'at', 'on', 'by'],
      en: ['in', 'at', 'on', 'by'],
    },
    correctIndex: 2, // on
    explanation: {
      uz: 'Hafta kunlari (Monday, Tuesday va h.k.) oldidan "on" predlogi ishlatiladi.',
      ru: 'Перед днями недели в английском языке всегда используется предлог "on".',
      en: 'The preposition "on" is used before specific days of the week (e.g., on Monday).',
    },
  },
  {
    id: 'eng_06',
    category: 'english',
    difficulty: 'advanced',
    question: {
      uz: 'Quyidagi faol gapning to‘g‘ri majhul (passive) shaklini toping: "Alexander Fleming discovered penicillin in 1928."',
      ru: 'Выберите верный пассивный залог: "Alexander Fleming discovered penicillin in 1928."',
      en: 'Which is the correct passive voice: "Alexander Fleming discovered penicillin in 1928."',
    },
    options: {
      uz: [
        'Penicillin was discovered by Alexander Fleming in 1928.',
        'Penicillin is discovered by Alexander Fleming in 1928.',
        'Penicillin had been discovered by Alexander Fleming in 1928.',
        'Penicillin has discovered by Alexander Fleming in 1928.',
      ],
      ru: [
        'Penicillin was discovered by Alexander Fleming in 1928.',
        'Penicillin is discovered by Alexander Fleming in 1928.',
        'Penicillin had been discovered by Alexander Fleming in 1928.',
        'Penicillin has discovered by Alexander Fleming in 1928.',
      ],
      en: [
        'Penicillin was discovered by Alexander Fleming in 1928.',
        'Penicillin is discovered by Alexander Fleming in 1928.',
        'Penicillin had been discovered by Alexander Fleming in 1928.',
        'Penicillin has discovered by Alexander Fleming in 1928.',
      ],
    },
    correctIndex: 0, // was discovered
    explanation: {
      uz: 'Past Simple zamonida majhul nisbat "was/were + V3" qolipi orqali yasaladi: "was discovered".',
      ru: 'Для Past Simple пассивный залог образуется формулой "was/were + 3-я форма": "was discovered".',
      en: 'In Past Simple, passive voice is formed using "was/were + past participle": "was discovered".',
    },
  },
  {
    id: 'eng_07',
    category: 'english',
    difficulty: 'advanced',
    question: {
      uz: '"Eloquent" so‘zining ma’nosi nima?',
      ru: 'Что означает слово "eloquent"?',
      en: 'What is the definition of "eloquent"?',
    },
    options: {
      uz: ['Sukut saqlovchi', 'Fikrni ta’sirchan va ravon ifodalovchi', 'Tez chalg‘uvchi', 'Qo‘pol muomalali'],
      ru: ['Молчаливый', 'Красноречивый и убедительный', 'Рассеянный', 'Грубый в общении'],
      en: ['Quiet & timid', 'Fluent, persuasive and articulate in speech', 'Easily distracted', 'Hostile & rude'],
    },
    correctIndex: 1, // Fluent & persuasive
    explanation: {
      uz: '"Eloquent" — so‘zga chechan, o‘z nutqi bilan tinglovchini lol qoldiradigan notiqni ifodalaydi.',
      ru: '"Eloquent" означает красноречивый, выразительный и убедительный в своей речи.',
      en: '"Eloquent" means fluent or persuasive in speaking or writing clearly and powerfully.',
    },
  },

  // ===================== GENERAL KNOWLEDGE (7 questions) =====================
  {
    id: 'gen_01',
    category: 'general',
    difficulty: 'beginner',
    question: {
      uz: 'Yer sayyorasiga eng yaqin yulduz qaysi?',
      ru: 'Какая звезда находится ближе всего к планете Земля?',
      en: 'Which star is closest to planet Earth?',
    },
    options: {
      uz: ['Qutb yulduzi', 'Quyosh', 'Sirius', 'Proksima Sentavr'],
      ru: ['Полярная звезда', 'Солнце', 'Сириус', 'Проксима Центавра'],
      en: ['North Star', 'The Sun', 'Sirius', 'Proxima Centauri'],
    },
    correctIndex: 1, // The Sun
    explanation: {
      uz: 'Quyosh — Yerga eng yaqin bo‘lgan yulduzdir (masofasi taxminan 150 million kilometr).',
      ru: 'Солнце — ближайшая к нам звезда, расположенная на расстоянии около 150 млн километров.',
      en: 'The Sun is the closest star to Earth, located about 150 million kilometers away.',
    },
  },
  {
    id: 'gen_02',
    category: 'general',
    difficulty: 'beginner',
    question: {
      uz: 'Inson tanasidagi eng katta ichki yoki tashqi a’zo qaysi?',
      ru: 'Какой орган является самым крупным в теле человека?',
      en: 'What is the largest organ in the human body?',
    },
    options: {
      uz: ['Jigar', 'Teri', 'O‘pka', 'Yurak'],
      ru: ['Печень', 'Кожа', 'Легкие', 'Сердце'],
      en: ['Liver', 'Skin', 'Lungs', 'Heart'],
    },
    correctIndex: 1, // Skin
    explanation: {
      uz: 'Inson terisi butun tanani qoplagan eng katta a’zo hisoblanadi (kattalarda taxminan 2 m² va 3-4 kg).',
      ru: 'Кожа человека является самым крупным органом, покрывающим около 2 м² и весящим 3-4 кг.',
      en: 'The skin is the body’s largest organ, covering roughly 2 square meters in adults.',
    },
  },
  {
    id: 'gen_03',
    category: 'general',
    difficulty: 'intermediate',
    question: {
      uz: 'Kimyoviy elementlar davriy jadvalida "Au" belgisi qaysi metallni anglatadi?',
      ru: 'Какой металл обозначается символом "Au" в периодической таблице Менделеева?',
      en: 'Which metal is represented by the chemical symbol "Au" on the periodic table?',
    },
    options: {
      uz: ['Kumush (Argentum)', 'Oltin (Aurum)', 'Mis (Cuprum)', 'Alyuminiy'],
      ru: ['Серебро (Argentum)', 'Золото (Aurum)', 'Медь (Cuprum)', 'Алюминий'],
      en: ['Silver (Argentum)', 'Gold (Aurum)', 'Copper (Cuprum)', 'Aluminum'],
    },
    correctIndex: 1, // Gold
    explanation: {
      uz: '"Au" belgisi lotincha "Aurum" (yorqin nur) so‘zidan olingan bo‘lib, Oltin metallini ifodalaydi.',
      ru: 'Символ "Au" происходит от латинского слова "Aurum" и обозначает благородный металл — золото.',
      en: '"Au" originates from the Latin word "Aurum", meaning radiant dawn, representing gold.',
    },
  },
  {
    id: 'gen_04',
    category: 'general',
    difficulty: 'intermediate',
    question: {
      uz: 'Vakuumda yorug‘lik tezligi taxminan soniyasiga qanchaga teng?',
      ru: 'Какова примерная скорость света в вакууме в секунду?',
      en: 'What is the approximate speed of light in a vacuum?',
    },
    options: {
      uz: ['30 000 km/s', '300 000 km/s', '1 000 000 km/s', '150 000 km/s'],
      ru: ['30 000 км/с', '300 000 км/с', '1 000 000 км/с', '150 000 км/с'],
      en: ['30,000 km/s', '300,000 km/s', '1,000,000 km/s', '150,000 km/s'],
    },
    correctIndex: 1, // 300,000 km/s
    explanation: {
      uz: 'Yorug‘likning vakuumdagi aniq tezligi 299 792 458 m/s, ya’ni yaxlitlanganda taxminan 300 000 km/s.',
      ru: 'Точная скорость света в вакууме составляет 299 792 458 м/с, то есть около 300 000 км/с.',
      en: 'The exact speed of light in vacuum is 299,792,458 m/s, or approximately 300,000 km/s.',
    },
  },
  {
    id: 'gen_05',
    category: 'general',
    difficulty: 'intermediate',
    question: {
      uz: 'O‘simliklar fotosintez jarayonida havodan qaysi gazni o‘zlashtirib, kislorod ajratadi?',
      ru: 'Какой газ растения поглощают из воздуха в процессе фотосинтеза, выделяя кислород?',
      en: 'Which gas do plants absorb from the air during photosynthesis to release oxygen?',
    },
    options: {
      uz: ['Azot', 'Uglerod oksidi (Is gazi)', 'Karbonat angidrid (CO₂)', 'Metan'],
      ru: ['Азот', 'Угарный газ', 'Углекислый газ (CO₂)', 'Метан'],
      en: ['Nitrogen', 'Carbon monoxide', 'Carbon dioxide (CO₂)', 'Methane'],
    },
    correctIndex: 2, // CO2
    explanation: {
      uz: 'O‘simliklar quyosh nuri ta’sirida karbonat angidrid (CO₂) va suvdan glyukoza sintez qiladi hamda kislorod (O₂) chiqaradi.',
      ru: 'Под действием солнечного света растения поглощают CO₂ и воду, вырабатывая глюкозу и выделяя кислород.',
      en: 'During photosynthesis, chlorophyll absorbs carbon dioxide (CO₂) and water in the presence of sunlight, producing oxygen.',
    },
  },
  {
    id: 'gen_06',
    category: 'general',
    difficulty: 'advanced',
    question: {
      uz: 'Yer sayyorasidagi eng ulkan sutemizuvchi jonivor qaysi?',
      ru: 'Какое млекопитающее является самым крупным на планете Земля?',
      en: 'What is the largest living mammal on planet Earth?',
    },
    options: {
      uz: ['Afrika fili', 'Ko‘k kit (Moviy kit)', 'Kashalot', 'Oq ayiq'],
      ru: ['Африканский слон', 'Синий кит', 'Кашалот', 'Белый медведь'],
      en: ['African Elephant', 'Blue Whale', 'Sperm Whale', 'Polar Bear'],
    },
    correctIndex: 1, // Blue Whale
    explanation: {
      uz: 'Ko‘k kit — Yer tarixidagi eng og‘ir jonivor (uzunligi 30 metr, og‘irligi 150-180 tonnagacha yetishi mumkin).',
      ru: 'Синий кит — самое крупное животное в истории планеты (длина до 30 м, вес до 180 тонн).',
      en: 'The blue whale is the largest known animal to have ever existed, reaching lengths up to 30 meters and weights up to 180 tonnes.',
    },
  },
  {
    id: 'gen_07',
    category: 'general',
    difficulty: 'advanced',
    question: {
      uz: 'E = mc² mashhur tenglamasini kim fanga kiritgan?',
      ru: 'Кто сформулировал знаменитое уравнение взаимосвязи массы и энергии E = mc²?',
      en: 'Who formulated the famous mass-energy equivalence equation E = mc²?',
    },
    options: {
      uz: ['Isaak Nyuton', 'Albert Eynshteyn', 'Nils Bor', 'Nikola Tesla'],
      ru: ['Исаак Ньютон', 'Альберт Эйнштейн', 'Нильс Бор', 'Никола Тесла'],
      en: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Nikola Tesla'],
    },
    correctIndex: 1, // Einstein
    explanation: {
      uz: 'Albert Eynshteyn 1905-yilda maxsus nisbiylik nazariyasida energiya va massa ekvivalentligini (E = mc²) isbotladi.',
      ru: 'Альберт Эйнштейн сформулировал эквивалентность массы и энергии (E = mc²) в 1905 году.',
      en: 'Albert Einstein formulated the mass-energy equivalence equation E = mc² in his 1905 Special Theory of Relativity.',
    },
  },
];

export const CATEGORIES_CONFIG = [
  {
    id: 'math' as const,
    name: {
      uz: 'Matematika',
      ru: 'Математика',
      en: 'Mathematics',
    },
    description: {
      uz: 'Arifmetika, geometriya, algebra va mantiqiy masalalar',
      ru: 'Арифметика, геометрия, алгебра и логические задачи',
      en: 'Arithmetic, geometry, algebra, and logic puzzles',
    },
    iconName: 'Calculator',
    colorClass: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900',
  },
  {
    id: 'history' as const,
    name: {
      uz: 'Tarix',
      ru: 'История',
      en: 'History',
    },
    description: {
      uz: 'Buyuk allomalar, qadimiy sivilizatsiyalar va muhim voqealar',
      ru: 'Великие мыслители, древние цивилизации и ключевые эпохи',
      en: 'Great thinkers, ancient civilizations, and historic milestones',
    },
    iconName: 'Landmark',
    colorClass: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900',
  },
  {
    id: 'geography' as const,
    name: {
      uz: 'Geografiya',
      ru: 'География',
      en: 'Geography',
    },
    description: {
      uz: 'Qit’alar, davlatlar, poytaxtlar, okeanlar va tog‘ cho‘qqilari',
      ru: 'Континенты, страны, столицы, океаны и горные вершины',
      en: 'Continents, countries, capitals, oceans, and natural wonders',
    },
    iconName: 'Globe',
    colorClass: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900',
  },
  {
    id: 'english' as const,
    name: {
      uz: 'Ingliz tili',
      ru: 'Английский язык',
      en: 'English',
    },
    description: {
      uz: 'Grammatika, so‘z boyligi, iboralar va nutq mahorati',
      ru: 'Грамматика, словарный запас, идиомы и речевые конструкции',
      en: 'Grammar, vocabulary, idioms, and reading comprehension',
    },
    iconName: 'BookOpen',
    colorClass: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900',
  },
  {
    id: 'general' as const,
    name: {
      uz: 'Umumiy bilimlar',
      ru: 'Общие знания',
      en: 'General Knowledge',
    },
    description: {
      uz: 'Tabiat qonunlari, koinot, fan yutuqlari va insoniyat kashfiyotlari',
      ru: 'Законы природы, космос, наука и величайшие открытия',
      en: 'Science, nature, the cosmos, and revolutionary discoveries',
    },
    iconName: 'Sparkles',
    colorClass: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900',
  },
];
