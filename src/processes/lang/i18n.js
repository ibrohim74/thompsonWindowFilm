import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    navContent:{
                        home:'Home',
                        protection:"Protection Film",
                        automotive:"Automotive Film",
                        technology:"Technology",
                        contact:"Contact"
                    },
                    bronPlyonka:{
                        title_bronPlyonka: ' PROTECTION FILM',
                        info:"Effectively prevent scratches, rock chips, wear and tear traces, oxidation, aging, and yellowing of the paint surface. The  Paint Protection Film is ultra-bright with high definition, which can protect the color and gloss of automotive paint."
                    },

                    tanirovka: {
                        title_tanirovka: 'Automotive Film',
                    },
                    technolgy: {
                        title: "Technology",
                        one: "It is the product in early stage, and only has hiding function and hardly any thermal insulation and ultraviolet ray insulation functions. The color shall be fully faded after one-year use, the cost is low, and there are such hazardous substances as formaldehyde and benzene in adhesive layer.",
                        one_title: "First Generation - 1 Ply Dyed Film",
                        two: "There is no metal coating, dyeing is given on adhesive layer directly, the service life is two years, effects of thermal insulation and ultraviolet ray insulation are limited, definition is not high, and there are plenty of such hazardous substances as formaldehyde and benzene in adhesive layer.",
                        two_title: "Second Generation - 2 Ply Chip-Dyed Film",
                        three: "It adopts vacuum thermal evaporation principle and adds metal coating to the base material of film. Moreover, the metal is aluminum as ordinary, and the color is lasting and stable. It can be used for about 5 years, the definition is relative high, and thermal insulation is moderate.",
                        three_title: "Third Generation - Vacuum Aluminum Plating Film",
                        four: "It adopts coating or magnetron sputtering technology to spray nano ceramic particles on base material of film uniformly, and it has reached thermal insulation effect by absorbing heat. The product shall never show colorfastness, quality guarantee period is over 7 years as ordinary, and it has no interference to wireless signal.",
                        four_title: "Fourth Generation - Nano Ceramic Film",
                        five: "It adopts electromagnetic induction principle and sprays such precious metal alloy materials as gold, silver, titanium and nickel to high-quality base material uniformly, the definition is better than the vacuum aluminum plating film, thermal insulation is above the average, and it shall show no colorfastness for over 7 years’ use.",
                        five_title: "Fifth Generation - Magnetron Sputtering Metal Film",
                        six: "It adopts electromagnetic induction principle and sprays such precious metal alloy materials as gold, silver, titanium and nickel to high-quality base material for several layers uniformly, the definition is better than the vacuum aluminum plating film, it shall never show colorfastness, and it represents the highest level of thermal insulation film. It possesses features of high definition, high thermal insulation, low light reflection, scratch tolerance and good anti- bursting performance. Those with the most metal sputtering layers are representatives of S70 and SS70 series of KDX, and 11 metal layers shall be sprayed in one time.",
                        six_title: "Sixth Generation - Multi-layer Magnetron Sputtering Metal Film",
                    },
                    more: 'get more information',
                    view_all: "view all",
                    provide_experience: 'Provide Superior Experience on Both Performance and Quality',
                    give_samples: 'Give me samples',
                }
            },
            uz: {
                translation: {
                    navContent:{
                        home: 'Bosh sahifa',
                        protection: 'Himoya plyonkasi',
                        automotive: 'Avtomobil plyonkasi',
                        technology: 'Texnologiya',
                        contact: 'Aloqa'
                    },
                    bronPlyonka:{
                        title_bronPlyonka: ' Himoya Plyonkasi',
                        info:"Qirilishlar, tosh zarralari, eskirish belgilari , oksidlanish, qarish va bo'yoq sirtining sarg'ayishini samarali oldini oladi.  Bo'yoq Himoya Plyonkasi yuqori yorqinlik va aniqlikka ega bo'lib, avtomobil bo'yoqlarining rangini va yaltiroqligini himoya qilishi mumkin."
                    },
                    tanirovka: {
                        title_tanirovka: 'Avtomobil plyonkasi',
                    },
                    technolgy: {
                        title: "Texnologiya",
                        one: "Bu dastlabki mahsulot bo'lib, faqat yashirish funksiyasiga ega va issiqlik va ultrabinafsha nurlardan izolyatsiya qilish funksiyalari deyarli yo'q. Rang bir yillik foydalanishdan so'ng to'liq o'chadi, narxi past, va yopishtiruvchi qatlamda formaldegid va benzol kabi zararli moddalar mavjud.",
                        one_title:"Birinchi avlod - 1 qatlamli bo'yalgan plyonka",
                        two: "Metall qoplamasiz, bo'yoq to'g'ridan-to'g'ri yopishtiruvchi qavatga beriladi, xizmat muddati ikki yil, issiqlik va ultrabinafsha nurlardan izolyatsiya qilish ta'siri cheklangan, aniqlik past, va yopishtiruvchi qavatda formaldegid va benzol kabi ko'plab zararli moddalar mavjud.",
                        two_title:"Ikkinchi avlod - 2 qatlamli chip-bo'yalgan plyonka",
                        three: "Vakuum termal bug'lanish printsipini qo'llaydi va plyonka asosiy materialiga metall qoplama qo'shiladi. Bundan tashqari, metall odatda alyuminiy bo'lib, rangi barqaror va uzoq muddatli. U taxminan 5 yil davomida ishlatilishi mumkin, aniqligi nisbatan yuqori, va issiqlik izolyatsiyasi o'rtacha.",
                        three_title:"Uchinchi avlod - vakuumli alyuminiy qoplama plyonkasi",
                        four: "Nano keramika zarralarini bir tekisda plyonka asosiy materialiga purkash uchun qoplama yoki magnetron sputtering texnologiyasini qo'llaydi va issiqlikni yutish orqali issiqlik izolyatsiyasi effektiga erishadi. Mahsulot hech qachon rangini yo'qotmaydi, sifat kafolati odatda 7 yildan ortiq, va u simsiz signalga hech qanday xalaqit bermaydi.",
                        four_title:"To'rtinchi avlod - nano keramika plyonka",
                        five: "Elektromagnit induksiya printsipini qo'llaydi va oltin, kumush, titan va nikel kabi qimmatbaho metall qotishma materiallarini yuqori sifatli asosiy materialga bir tekisda purkaydi, aniqligi vakuumli alyuminiy qoplama plyonkasidan yaxshiroq, issiqlik izolyatsiyasi o'rtachadan yuqori, va 7 yildan ortiq foydalanishda rangini yo'qotmaydi.",
                        five_title:"Beshinchi avlod - magnetron sputtering metall plyonka",
                        six: "Elektromagnit induksiya printsipini qo'llaydi va oltin, kumush, titan va nikel kabi qimmatbaho metall qotishma materiallarini yuqori sifatli asosiy materialga bir necha qatlamlarda bir tekisda purkaydi. Aniqligi vakuumli alyuminiy qoplama plyonkasidan yaxshiroq, hech qachon rangini yo'qotmaydi va eng yuqori darajadagi issiqlik izolyatsiyasi plyonkasini ifodalaydi. Yuqori aniqlik, yuqori issiqlik izolyatsiyasi, past nur aks ettirish, chizish qarshiligi va yaxshi portlashga qarshi xususiyatlarga ega. Eng ko'p metall purkash qatlamlariga ega bo'lgan plyonkalar KDX S70 va SS70 seriyalari vakillaridir, va bir marta purkashda 11 metall qatlamlar qo'llaniladi.",
                        six_title:"Oltinchi avlod - ko'p qatlamli magnetron sputtering metall plyonka",
                    },
                    more: "ko'proq ma'lumot olish",
                    view_all: "hammasini ko'rish",
                    provide_experience: 'Yuqori darajadagi sifat va samaradorlik bilan mukammal tajriba taqdim etadi',
                    give_samples: 'Namunalardan olish',
                }
            },
            ru: {
                translation: {
                    navContent:{
                        home: 'Главная',
                        protection: 'Защитная пленка',
                        automotive: 'Автомобильная пленка',
                        technology: 'Технология',
                        contact: 'Контакты'

                    },
                    bronPlyonka:{
                        title_bronPlyonka: ' Защитная пленка  ',
                        info:"Эффективно предотвращает появление царапин, сколов от камней, следов износа, окисления, старения и пожелтения поверхности краски. Защитная пленка для краски  обладает высокой яркостью и четкостью, что позволяет защищать цвет и глянец автомобильной краски."
                    },
                    tanirovka: {
                        title_tanirovka: 'Автомобильная пленка',
                    },
                    technolgy: {
                        title: "Технологии",
                        one: "Это продукт на ранней стадии, который только скрывает и почти не имеет функций теплоизоляции и защиты от ультрафиолетовых лучей. Цвет полностью выцветает через год использования, стоимость низкая, а в клеевом слое содержатся такие вредные вещества, как формальдегид и бензол.",
                        one_title:"Первое поколение - однослойная крашеная пленка",
                        two: "Без металлического покрытия, окрашивание осуществляется непосредственно на клеевой слой, срок службы - два года, эффекты теплоизоляции и защиты от ультрафиолетовых лучей ограничены, четкость невысокая, а в клеевом слое содержится много таких вредных веществ, как формальдегид и бензол.",
                        two_title:"Второе поколение - двухслойная крашеная пленка",
                        three: "Используется принцип вакуумного термического испарения и добавляется металлическое покрытие на основной материал пленки. Обычно используется алюминий, цвет устойчив и стабилен. Срок службы около 5 лет, четкость относительно высокая, теплоизоляция умеренная.",
                        three_title:"Третье поколение - вакуумная алюминиевая пленка",
                        four: "Используется технология покрытия или магнетронного напыления для равномерного нанесения нанокерамических частиц на основной материал пленки, достигается эффект теплоизоляции за счет поглощения тепла. Продукт никогда не теряет цвет, гарантийный срок составляет более 7 лет, и он не мешает беспроводному сигналу.",
                        four_title:"Четвертое поколение - нанокерамическая пленка",
                        five: "Используется принцип электромагнитной индукции и равномерно распыляются такие драгоценные металлы, как золото, серебро, титан и никель, на высококачественный основной материал. Четкость выше, чем у вакуумной алюминиевой пленки, теплоизоляция выше среднего уровня, и он не теряет цвет в течение более 7 лет использования.",
                        five_title:"Пятое поколение - магнетронная напыленная металлическая пленка",
                        six: "Используется принцип электромагнитной индукции и равномерно распыляются такие драгоценные металлы, как золото, серебро, титан и никель, на высококачественный основной материал в несколько слоев. Четкость выше, чем у вакуумной алюминиевой пленки, никогда не теряет цвет и представляет собой наивысший уровень теплоизоляционных пленок. Обладает характеристиками высокой четкости, высокой теплоизоляции, низкого отражения света, устойчивости к царапинам и хорошей противоударной способностью. Пленки с наибольшим количеством слоев напыления металла представлены сериями KDX S70 и SS70, где в один раз напыляется 11 слоев металла.",
                        six_title:"Шестое поколение - многослойная магнетронная напыленная металлическая пленка",
                    },
                    more: "получить больше информации",
                    view_all: "посмотреть все",
                    provide_experience: 'Обеспечивает превосходный опыт как в производительности, так и в качестве',
                    give_samples: 'Получить образцы',
                }
            },
        },
    });

export default i18n;
