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
    }
};

export default ar; 