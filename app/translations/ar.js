import { coreCommitmentsData, distinctionsData } from './data';

const ar = {
    home: 'الرئيسية',
    training: 'التدريب',
    consulting: 'الاستشارات',
    studyGroups: 'مجموعات الدراسة',
    coaching: 'التدريب',
    professionalServices: 'الخدمات المهنية',
    mag: 'المجلة',
    about: 'من نحن',
    contact: 'اتصل بنا',
    contactPage: {
        title: 'تواصل مع ستدي سمارت',
        subtitle: 'شريكك في التميز في التعليم الطبي',
        description: 'في ستدي سمارت، نحن ملتزمون بدعم رحلتك في التعليم الطبي. نرحب باستفساراتك ونتطلع إلى مساعدتك في تحقيق أهدافك.',
        contactInfo: {
            title: 'معلومات الاتصال',
            subtitle: 'فريقنا المتخصص جاهز للرد على أسئلتك وتقديم الدعم:',
            email: 'Email:',
            phone: 'Phone:',
            businessHours: 'ساعات العمل',
            businessHoursText: 'من الاثنين إلى الجمعة، 9:00 صباحاً - 6:00 مساءً بتوقيت شرق الولايات المتحدة'
        },
        location: {
            title: 'موقعنا',
            visitText: 'قم بزيارة مكتبنا الرئيسي:',
            center: 'مركز ستدي سمارت التعليمي',
            address: '123 شارع الطب، جناح 456',
            city: 'نيويورك، نيويورك 10001',
            country: 'الولايات المتحدة الأمريكية'
        },
        form: {
            title: 'نموذج الاستفسار',
            subtitle: 'نقدر مساهمتك. يرجى استخدام النموذج أدناه لإرسال رسالتك.',
            submitButton: 'إرسال الاستفسار'
        },
        social: {
            title: 'تواصل على الشبكات المهنية',
            subtitle: 'ابق على اطلاع بآخر التطورات في التعليم الطبي'
        },
        newsletter: {
            title: 'ابق على اطلاع',
            subtitle: 'اشترك في نشرتنا الإخبارية للحصول على تحديثات حول الدورات واستراتيجيات الدراسة والاتجاهات في التعليم الطبي.',
            placeholder: 'البريد الإلكتروني...',
            button: 'اشتراك'
        },
        cta: {
            text: 'نجاحك في التعليم الطبي هو أولويتنا. اتصل بـ ستدي سمارت اليوم لاستكشاف كيف يمكننا دعم رحلتك المهنية.',
            button: 'اتصل بـ ستدي سمارت'
        }
    },
    language: 'English',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    aboutTitle: 'عن ستدي سمارت',
    aboutDesc: 'شريكك الموثوق في التعليم الطبي',
    aboutContent: 'ستدي سمارت هي منصة تعليمية رائدة مخصصة لمساعدة طلاب الطب والمهنيين في تحقيق أحلامهم. مع سنوات من الخبرة في التعليم الطبي، نقدم الدعم والتوجيه الشامل.',
    trainingTitle: 'برامجنا التدريبية',
    trainingDesc: 'حلول تدريب طبي شاملة',
    trainingContent1: 'التحضير لامتحان USMLE Step 1',
    trainingContent2: 'تطوير المهارات السريرية',
    trainingContent3: 'التحضير لامتحان الترخيص الطبي',
    trainingFeatures: 'تتميز برامجنا التدريبية بـ:',
    trainingList: [
        'مدربون خبراء بسجل حافل بالنجاحات',
        'مسارات تعلم مخصصة',
        'اختبارات وتقييمات تدريبية',
        'مواد دراسية تفاعلية'
    ],
    consultingTitle: 'استشارات التعليم الطبي',
    consultingDesc: 'توجيه خبير لمسيرتك المهنية الطبية',
    consultingServices: 'تشمل خدماتنا الاستشارية:',
    consultingList: [
        'تخطيط المسار المهني',
        'دعم طلب الإقامة',
        'التحضير للمقابلات',
        'مراجعة السيرة الذاتية وخطاب التعريف'
    ],
    whoWeAreTitle: 'من نحن',
    whoWeAreSubtitle: 'تمكين المهنيين الطبيين: طريقة ستدي سمارت',
    whoWeAreContent: 'ستدي سمارت تمثل علم الإضاءة في تعليم الطب. لقد أنشأنا جموعة إيكوسيستم خاص به حيث يمكن للمتدربين والمهنيين الطبيين الذين يتمتعون بالموهبة الطبية أن ينمووا. طريقتنا تتجاوز التعليم التقليدي، وتقدم منصة شاملة يمكن لها أن تنمو إمتاع الطبيعة الأكاديمية والمهنية.',
    visionaryTitle: 'رؤيتنا المهندسة',
    visionaryContent: 'نحن نراهن على مستقبل حياة التعليم الطبي تتجاوز الحدود، سواء جغرافية أو علمية. تهدف ستدي سمارت إلى أن تكون الأساس الذي ترتكز عليه تطور ذلك التطور، وتقدم منصة عالمية حيث يتم توزيع المعرفة الطبية إلاّ على التوزيع، ولكن على التربية من خلال التعاون والابتكار.',
    coreCommitmentsTitle: 'التزاماتنا الأساسية',
    coreCommitmentsSubtitle: 'نحن ملتزمون بـ:',
    coreCommitments: coreCommitmentsData.map(item => ({
        type: item.type,
        icon: item.icon,
        description: item.descriptionAr
    })),
    distinctionTitle: 'التميز الطبي لستدي سمارت',
    distinctions: distinctionsData.map(item => ({
        type: item.type,
        image: item.image,
        title: item.titleAr,
        description: item.descriptionAr
    })),
    commitmentTitle: 'التزامنا بالتميز',
    commitmentContent: 'في ستدي سمارت، نحن نحمي أعلى معايير الإكاديمية التعليمية. فريقنا المتميز من المعلمين والمهنيين الطبيين يضمن أن عروضنا ليست حالية فقط، بل أيضًا متنبئة بالاتجاهات المستقبلية في الصحة العامة. نحن نحمل دائمًا تحسين طرائقنا، ونتبنى التكنولوجيات الجديدة والابتكارات التعليمية.',
    joinCommunityTitle: 'إنضم إلى مجتمع ستدي سمارت',
    joinCommunityContent: 'سواء كنت على عتبة مسيرتك الطبية أو تبحث عن رفع مهنيتك المتأسسة، توفر ستدي سمارت المعرفة والتوجيه والمجتمع لتقديمك الطريقة للأمام. كون جزءًا من حركة تعرفي تعليم الطب وتشكيل مستقبل الصحة العامة.',
    elevateCareerButton: 'رفع مهنيتك الطبية بستدي سمارت',
    whoWeAreImageAlt: 'متخصصون طبيون في زي أزرق يقفون معًا',
    globeIconAlt: 'أيقونة كرة أرضية تمثل التعليم الطبي العالمي',
    coreCommitmentAlts: {
        tech: 'أيقونة التكنولوجيا والتعليم',
        learning: 'أيقونة التعلم المستمر',
        practice: 'أيقونة الممارسة الطبية',
        career: 'أيقونة تطوير المهنة',
        innovation: 'أيقونة الابتكار الطبي'
    },
    distinctionImageAlts: {
        precision: 'متخصص طبي يستخدم أدوات التعلم الدقيق',
        development: 'مجموعة من طلاب الطب في جلسة تطوير',
        collaboration: 'متخصصون في الرعاية الصحية يتعاونون',
        global: 'تمثيل التعليم الطبي العالمي'
    },
    footer: {
        contactInfo: 'معلومات الاتصال',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        businessHours: 'ساعات العمل',
        businessHoursText: 'من الاثنين إلى الجمعة، 9:00 صباحاً - 6:00 مساءً بتوقيت شرق الولايات المتحدة',
        navigation: {
            column1: [
                { name: 'الرئيسية', href: '/' },
                { name: 'المجلة', href: '/mag' },
                { name: 'من نحن', href: '/about' },
                { name: 'اتصل بنا', href: '/contact' }
            ],
            column2: [
                { name: 'التدريب', href: '/training' },
                { name: 'الاستشارات', href: '/consulting' },
                { name: 'مجموعات الدراسة', href: '/study-groups' },
                { name: 'التدريب', href: '/coaching' },
                { name: 'الخدمات المهنية', href: '/services' }
            ]
        },
        copyright: '© 2024 ستدي سمارت. جميع الحقوق محفوظة.',
        socialLinks: [
            { name: 'انستغرام', href: '#' },
            { name: 'لينكد إن', href: '#' },
            { name: 'تويتر', href: '#' }
        ]
    },
    professionalServicesPage: {
        hero: {
            title: "عزز مسيرتك المهنية مع الخدمات المهنية من ستدي سمارت",
            description: "في ستدي سمارت، نقدم دعماً شاملاً لمسيرتك الطبية. تم تصميم مجموعة خدماتنا المهنية لمساعدتك في كل جانب من جوانب رحلتك المهنية، من المساعدة في المشاريع إلى خدمات الهجرة وما بعدها."
        },
        navigation: {
            title: "اكتشف مسار النجاح المهني",
            subtitle: "خبرة متخصصة لكل خطوة في رحلتك"
        },
        sections: {
            project: {
                title: "تنظيم مساعيك المهنية",
                subtitle: "مساعدة شاملة للمشاريع",
                description: "سواء كنت تعمل على مشروع بحث طبي أو مبادرة مهنية، فإن خدمات المساعدة في المشاريع لدينا توفر الخبرة والموارد اللازمة لضمان نجاحك. فريقنا من المتخصصين ذوي الخبرة هنا لإرشادك خلال كل مرحلة من مراحل مشروعك.",
                cta: "اكتشف المساعدة في المشاريع"
            },
            immigration: {
                title: "بسّط رحلتك مع خدمات الهجرة المتخصصة",
                subtitle: "دعم شامل لانتقال سلس",
                description: "يمكن أن يكون التنقل في تعقيدات الهجرة أمراً صعباً. يقدم ستدي سمارت دعماً شاملاً لمساعدتك خلال العملية، من طلبات البطاقة الخضراء إلى ترتيبات السفر وخدمات الاستقرار. يضمن فريقنا حصولك على المساعدة التي تحتاجها لجعل انتقالك سلساً قدر الإمكان.",
                cta: "استكشف خدمات الهجرة"
            },
            patent: {
                title: "حماية ابتكاراتك من خلال تسجيل براءات الاختراع",
                subtitle: "تأمين ملكيتك الفكرية",
                description: "تأكد من حماية ابتكاراتك من خلال خدمات تسجيل براءات الاختراع لدينا. يوفر ستدي سمارت التوجيه والدعم اللازمين للتنقل في عملية براءات الاختراع، مما يساعدك على تأمين ملكيتك الفكرية والتعاون مع خبراء الصناعة.",
                cta: "تعرف على خدمات براءات الاختراع"
            },
            resume: {
                title: "تعزيز ملفك المهني",
                subtitle: "بناء سيرة ذاتية فعالة والتواصل المهني",
                description: "قم بإنشاء سيرة ذاتية مقنعة تبرز نقاط قوتك وإنجازاتك مع خدماتنا المتخصصة. بالإضافة إلى ذلك، استفد من فرص التواصل لدينا للتواصل مع المتخصصين والأكاديميين في مجالك، مما يعزز آفاقك المهنية.",
                cta: "ابدأ ببناء سيرتك الذاتية"
            },
            research: {
                title: "استثمر في بحثك",
                subtitle: "القيادة والتمويل لمشاريعك",
                description: "يدعم ستدي سمارت مساعيك البحثية من خلال توفير فرص القيادة والاستثمار. خدماتنا مصممة لمساعدتك في تأمين التمويل والتوجيه لمشاريعك، مما يضمن وصولها إلى كامل إمكاناتها.",
                cta: "احصل على استثمار البحث"
            }
        },
        services: {
            projectAssistance: {
                title: "المساعدة في المشاريع",
                description: "احصل على الدعم الذي تحتاجه للتفوق في مشاريعك مع توجيهاتنا وموارد الخبراء."
            },
            immigration: {
                title: "خدمات الهجرة",
                description: "بسّط انتقالك مع دعمنا الشامل للهجرة، بما في ذلك طلبات التأشيرات وترتيبات السفر وخدمات الاستقرار."
            },
            patent: {
                title: "تسجيل براءات الاختراع",
                description: "احمِ ابتكاراتك مع خدمات تسجيل براءات الاختراع والاستشارات لدينا. نضمن حماية أفكارك والاعتراف بها."
            },
            resume: {
                title: "بناء السيرة الذاتية",
                description: "عزز ملفك الأكاديمي والمهني مع خدمات بناء السيرة الذاتية الخبيرة وفرص التواصل."
            },
            research: {
                title: "الاستثمار في المشاريع البحثية",
                description: "احصل على القيادة والتمويل اللازمين لمشاريعك البحثية مع خدمات الاستثمار والدعم لدينا."
            }
        },
        cta: {
            text: "في ستدي سمارت، نحن ملتزمون بتقديم الأدوات والدعم اللازمين للتفوق في رحلتك المهنية. اكتشف خدماتنا المهنية لمعرفة كيف يمكننا مساعدتك في تحقيق أهدافك المهنية.",
            button: "ابدأ مع الخدمات المهنية"
        }
    },
    magPage: {
        hero: {
            date: '02 مايو 2024',
            title: 'الحياة زهرة والحب عسلها',
            description: 'عندما يمتلئ الوادي الجميل بالبخار من حولي، وتضرب شمس الظهيرة السطح العلوي من أوراق أشجاري الكثيفة.',
            readMore: 'اقرأ المزيد',
            seeAll: 'عرض الكل'
        },
        sections: {
            recentArticles: {
                title: 'المقالات الأخيرة',
                articles: [
                    {
                        title: 'ابدأ أسبوعك الأول في وظيفتك الجديدة كقائد',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'ريادة تطور جديد في نماذج العمل المشترك',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'نموذج البرمجيات البيضاء في التكنولوجيا المالية',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'الاستثمار في حياتك وصحتك وثروتك',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'التحكم في النصوص العمياء تقريباً',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'هناك العديد من الاختلافات في المقاطع المتاحة',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'اشعر بسحر الوجود في هذا المكان الذي خُلق لسعادة الأرواح مثل روحي',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'الحياة زهرة والحب عسلها',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'الوصول إلى أقصى درجات اليقظة والعافية الجسدية',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'خطط تدريبك مع مدرب شخصي عبر الإنترنت وبسهولة',
                        date: '02 مايو 2024'
                    }
                ]
            },
            quickLinks: {
                title: 'روابط سريعة',
                articles: [
                    {
                        title: 'التحكم في النصوص العمياء تقريباً',
                        description: 'هناك العديد من الاختلافات في المقاطع المتاحة ولكن الأغلبية لم تتعرض للتغيير',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'هناك العديد من الاختلافات في المقاطع المتاحة',
                        description: 'التغيير في شكل ما، من خلال الفكاهة المضافة. أوراق تحتوي على مقاطع وأكثر',
                        date: '02 مايو 2024'
                    },
                    {
                        title: 'اشعر بسحر الوجود في هذا المكان',
                        description: 'هناك العديد من الاختلافات في المقاطع المتاحة ولكن الأغلبية لم تتعرض للتغيير',
                        date: '02 مايو 2024'
                    }
                ]
            },
            trendingTopics: {
                title: 'المواضيع الرائجة',
                topics: [
                    {
                        title: 'يتطلب ما يتطلب لإنهاء شيء ما',
                        description: 'التغيير في شكل ما، من خلال صفحات الفكاهة المضافة التي تحتوي على مقاطع وأكثر'
                    },
                    {
                        title: 'أفضل إطلالات الشارع من أسبوع الموضة في باريس 2024',
                        description: 'هناك العديد من الاختلافات في المقاطع المتاحة ولكن الأغلبية لم تتعرض للتغيير'
                    },
                    {
                        title: '9 بحيرات زرقاء رائعة مع جبل ثلجي',
                        description: 'عندما يمتلئ الوادي الجميل بالبخار من حولي، وتضرب شمس الظهيرة السطح العلوي'
                    },
                    {
                        title: 'كيف تحظى بموسم عطلات سعيد وهادئ',
                        description: 'هناك العديد من الاختلافات في المقاطع المتاحة ولكن الأغلبية لم تتعرض للتغيير'
                    }
                ]
            },
            featuredArticle: {
                title: 'الحياة زهرة والحب عسلها',
                description: 'اكتشف كيف يمكن للحب أن يجلب معنى وجمالاً لحياتك، مع نظرة متعمقة في الجوانب المهمة للحب.',
                date: '30 MAR 2024'
            }
        }
    }
};

export default ar; 