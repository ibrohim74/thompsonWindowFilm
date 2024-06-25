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
                    homeContent:{
                        s1_title:{
                            num:'Six',
                            colorText:"features",
                            prod:'product'
                        },
                        home_info:{
                            bronPlyonka:"Virtually invisible urethane film. It protects your car's paint from unsightly damage and maximizes resale value. Some of its features include self-healing, stain resistance, and superior optical clarity.",
                            automotive:"Adds protection and style to your car! Provides protection from the sun, privacy and good looks. Keep your car like new and give it a modern look",
                            texnalogiya:"Protect your car from scratches, dust and UV rays with the new protective film technology. Let your car always look new!\n"
                        },
                        home_s2_info:{
                            s1:{
                                title:"Protection",
                                description:"Protective films protect the car from external influences, including dust, dirt, harmful substances, stones and other objects."
                            },
                            s2:{
                                title:"Aesthetic appearance",
                                description:"Automotive films help to improve the appearance of the car, give it a new, modern and beautiful look. It is possible to change the design of the car through colored films."
                            },
                            s3:{
                                title:"UV protection",
                                description:"Films protect the car's paint finish from ultraviolet (UV) rays, thereby preventing the paint from fading and preserving the car's appearance for a long time."
                            },
                            s4:{
                                title:"Protecting the interior",
                                description:"When applied to windows, automotive films protect the interior from hot air and UV rays, maintain a comfortable temperature in the cabin, and protect interior trim, dashboards, and seats from cracking or fading."
                            },
                            s5:{
                                title:"Savings",
                                description:"Automotive and protective films help car owners reduce repair and painting costs, as films help prevent and eliminate minor damages."
                            },
                            s6:{
                                title:"Confidentiality",
                                description:"The films used for tinted windows reduce the visibility of the contents of the car from the outside, thereby providing privacy and protecting the property inside the car from theft."
                            },
                        }
                    },
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
                    contact:"Contact",
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
                    contact_name:"Your name",
                    contact_tell:"Your phone number",
                    contact_msg:"Message",
                    contact_send:"Send",
                    contact_p:"Leave a message for more information",
                    provide_experience: 'Provide Superior Experience on Both Performance and Quality',
                    give_samples: 'Give me samples',
                }
            },
            uz: {
                translation: {
                    homeContent:{
                        s1_title:{
                            num:"olti",
                            colorText:"xususiyati",
                            prod:'Mahsulotning'
                        },
                        home_info:{
                            bronPlyonka:"Deyarli ko'rinmas uretan plyonkasi avtomobilingiz bo'yog'ini yoqimsiz shikastlanishdan himoya qiladi va qayta sotish qiymatini oshiradi. Uning ba'zi xususiyatlari orasida o'z-o'zini tiklash, dog'larga chidamlilik va yuqori optik tiniqlik mavjud.",
                            automotive:"Mashinangizga himoya va uslub qo'shadi! Quyosh nurlaridan himoya, maxfiylik va chiroyli ko'rinishni ta'minlaydi. Avtomobilingizni yangidek saqlang va unga zamonaviy ko'rinish bering",
                            texnalogiya:"Yangi himoya plyonkasi texnologiyasi bilan avtomobilingizni chizishlar, chang va UV nurlaridan himoya qiling. Avtomobilingiz doimo yangi ko'rinishda bo'lsin!"
                        },
                        home_s2_info:{
                            s1:{
                                title:"Himoya",
                                description:"Himoya plyonkalar avtomobilni tashqi ta'sirlardan, shu jumladan chang, kir, zarar yetkazuvchi moddalar, tosh va boshqa ob'ektlar ta'siridan himoya qiladi."
                            },
                            s2:{
                                title:"Estetik ko'rinish",
                                description:" Avtomobilnaya plyonkalar avtomobilning tashqi ko'rinishini yaxshilashga yordam beradi, unga yangi, zamonaviy va chiroyli ko'rinish beradi. Rangli plyonkalar orqali avtomobilning dizaynini o'zgartirish mumkin."
                            },
                            s3:{
                                title:"UV nuridan himoya",
                                description:"  Plyonkalar avtomobilning bo'yoq qoplamasini ultrabinafsha (UV) nurlaridan himoya qiladi, natijada bo'yoqning rangini yo'qotishidan saqlaydi va avtomobilning tashqi ko'rinishini uzoq muddat saqlaydi."
                            },
                            s4:{
                                title:"Ichki qismni himoya qilish",
                                description:"Avtomobilnaya plyonkalar oynalarga yopishtirilganda, ichki qismni issiq havo va UV nurlaridan himoya qiladi, salonda qulay haroratni saqlaydi va ichki bezaklar, asboblar taxtasi va o'rindiqlarni yorilishdan yoki rangi so'lishdan himoya qiladi"
                            },
                            s5:{
                                title:"Tejamkorlik",
                                description:"Avtomobilnaya va zashitniy plyonkalar avtomobil egalariga ta'mirlash va bo'yash xarajatlarini kamaytirishga yordam beradi, chunki plyonkalar kichik zararlarni oldini olish va bartaraf qilishda yordam beradi."
                            },
                            s6:{
                                title:"Maxfiylik",
                                description:"Qoraytirilgan oynalar uchun ishlatiladigan plyonkalar avtomobil ichidagi narsalarni tashqaridan ko'rinishini kamaytiradi, shu bilan maxfiylikni ta'minlaydi va avtomobil ichidagi mol-mulkni o'g'irlikdan himoya qiladi."
                            },
                        }
                    },
                    navContent:{
                        home: 'Bosh sahifa',
                        protection: 'Himoya plyonka',
                        automotive: 'Avtomobil plyonka',
                        technology: 'Texnologiya',
                        contact: 'Aloqa'
                    },
                    bronPlyonka:{
                        title_bronPlyonka: ' Himoya Plyonka',
                        info:"Qirilishlar, tosh zarralari, eskirish belgilari , oksidlanish, qarish va bo'yoq sirtining sarg'ayishini samarali oldini oladi.  Bo'yoq Himoya Plyonkasi yuqori yorqinlik va aniqlikka ega bo'lib, avtomobil bo'yoqlarining rangini va yaltiroqligini himoya qilishi mumkin."
                    },
                    contact:"Aloqa",
                    tanirovka: {
                        title_tanirovka: 'Avtomobil plyonka',
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
                    view_all: "Hammasini ko'rish",
                    contact_name:"Ismingiz",
                    contact_tell:"Telefon Raqamingiz",
                    contact_msg:"Xabar",
                    contact_send:"Jo'natish",
                    contact_p:"Qo'shimcha ma'lumot uchun xabar qoldiring",
                    provide_experience: 'Yuqori darajadagi sifat va samaradorlik bilan mukammal tajriba taqdim etadi',
                    give_samples: 'Namuna olish',
                }
            },
            ru: {
                translation: {
                    homeContent:{
                        s1_title:{
                            num:'Шесть',
                            colorText:"особенностей",
                            prod:'продукта'
                        },
                        home_info:{
                            bronPlyonka:" Практически невидимая уретановая пленка.Она защищает краску вашего автомобиля от неприглядных повреждений и максимальноувеличивает стоимость перепродажи. Некоторые из ее функций включают в себя самовосстановление, устойчивость к пятнам и превосходную оптическую четкость.",
                            automotive:"Добавляет защиты и стиля вашему автомобилю! Обеспечивает защиту от солнца, конфиденциальность и красивый внешний вид. Сохраните свой автомобиль как новый и придайте ему современный вид",
                            texnalogiya:"Защитите свой автомобиль от царапин, пыли и ультрафиолетовых лучей с помощью новой технологии защитной пленки. Пусть ваш автомобиль всегда выглядит новым!\n"
                        },
                        home_s2_info:{
                            s1:{
                                title:"Защита",
                                description:"Защитные пленки защищают автомобиль от внешних воздействий, включая пыль, грязь, вредные вещества, камни и другие предметы."
                            },
                            s2:{
                                title:"Эстетичный внешний вид",
                                description:"Автомобильные пленки помогают улучшить внешний вид автомобиля, придать ему новый, современный и красивый вид. Изменить дизайн автомобиля можно с помощью цветных пленок."
                            },
                            s3:{
                                title:"защита от ультрафиолета",
                                description:"Пленки защищают лакокрасочное покрытие автомобиля от ультрафиолетовых (УФ) лучей, тем самым предотвращая выгорание краски и сохраняя внешний вид автомобиля на долгое время."
                            },
                            s4:{
                                title:"Защита интерьера",
                                description:"Автомобильные пленки при нанесении на окна защищают салон от горячего воздуха и ультрафиолетовых лучей, поддерживают комфортную температуру в салоне, защищают внутреннюю обшивку, приборные панели и сиденья от растрескивания и выцветания."
                            },
                            s5:{
                                title:"Экономия",
                                description:"Автомобильные и защитные пленки помогают автовладельцам сократить затраты на ремонт и покраску, так как пленки помогают предотвратить и устранить мелкие повреждения."
                            },
                            s6:{
                                title:"Конфиденциальность",
                                description:"Пленки, используемые для тонировки стекол, уменьшают видимость содержимого автомобиля снаружи, тем самым обеспечивая конфиденциальность и защищая имущество внутри автомобиля от кражи."
                            },
                        }
                    },
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
                    contact:"Контакты",
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
                    contact_name:"Ваше имя",
                    contact_tell:"Ваш номер телефона",
                    contact_msg:"сообщение",
                    contact_send:"отправить",
                    contact_p:"Оставьте сообщение для получения дополнительной информации",
                    provide_experience: 'Обеспечивает превосходный опыт как в производительности, так и в качестве',
                    give_samples: 'Получить образцы',
                }
            },
        },
    });

export default i18n;
