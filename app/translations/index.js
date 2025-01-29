const coreCommitmentsData = [
    {
        type: 'tech',
        icon: '/assets/our-core-commitments-one.svg',
        descriptionEn: 'Revolutionizing USMLE preparation through cutting-edge educational technologies',
        descriptionAr: 'تحويل تحضير USMLE عبر تكنولوجيا التعليم التقنية'
    },
    {
        type: 'learning',
        icon: '/assets/our-core-commitments-one.svg',
        descriptionEn: 'Fostering a culture of continuous learning and professional development',
        descriptionAr: 'تشجيع الثقافة المستمرة للتطوير المهني والتطوير'
    },
    {
        type: 'practice',
        icon: '/assets/our-core-commitments-one.svg',
        descriptionEn: 'Creating synergies between academic excellence and real-world medical practice',
        descriptionAr: 'إنشاء سيرجينيات بين الإكاديمية الممتازة والممارسة الطبية الحقيقية'
    },
    {
        type: 'career',
        icon: '/assets/our-core-commitments-one.svg',
        descriptionEn: 'Empowering healthcare professionals to navigate their careers with confidence and competence',
        descriptionAr: 'تمكين المهنيين الطبيين للتنقل في طريقتهم المهنية بثقة وكفاءة'
    },
    {
        type: 'innovation',
        icon: '/assets/our-core-commitments-one.svg',
        descriptionEn: 'Pioneering new frontiers in medical education to meet the challenges of tomorrow\'s healthcare landscape',
        descriptionAr: 'إبتكار المهبل الجديد في تعليم الطب لمواجهة مهام الطب الصحي الغدير'
    }
];

const distinctionsData = [
    {
        type: 'precision',
        image: '/assets/precision-learning.jpg',
        titleEn: 'Precision Learning',
        titleAr: 'تعلم الدقة',
        descriptionEn: 'Tailored educational approaches that adapt to your learning style',
        descriptionAr: 'أساليب تعليمية تخصصة يمكن أن تتناسب مع نمط تعلمك'
    },
    {
        type: 'development',
        image: '/assets/precision-learning.jpg',
        titleEn: 'Comprehensive Development',
        titleAr: 'التطوير الشامل',
        descriptionEn: 'Holistic programs fostering both academic and professional growth',
        descriptionAr: 'برامج تطوير شاملة تشجع النمو الأكاديمي والمهني'
    },
    {
        type: 'collaboration',
        image: '/assets/precision-learning.jpg',
        titleEn: 'Innovative Collaboration',
        titleAr: 'التعاون الابتكاري',
        descriptionEn: 'Dynamic learning environments through cutting-edge platforms',
        descriptionAr: 'أوصاف تعليمية حية عبر الأنظمة التقنية المبتكرة'
    },
    {
        type: 'global',
        image: '/assets/precision-learning.jpg',
        titleEn: 'Global Perspective',
        titleAr: 'الرؤية العالمية',
        descriptionEn: 'International medical education standards into our curriculum',
        descriptionAr: 'معايير التعليم الطبي الدولية في منهجنا'
    }
];

export { coreCommitmentsData, distinctionsData };

export const translations = {
    en: {
        home: 'Home',
        training: 'Training',
        consulting: 'Consulting',
        studyGroups: 'Study Groups',
        coaching: 'Coaching',
        professionalServices: 'Professional Services',
        mag: 'Mag',
        about: 'About',
        contact: 'Contact Us',
        language: 'العربية',
        openMenu: 'Open main menu',
        closeMenu: 'Close main menu',
        aboutTitle: 'About StudySmart',
        aboutDesc: 'Your Trusted Partner in Medical Education',
        aboutContent: 'StudySmart is a leading educational platform dedicated to helping medical students and professionals achieve their dreams. With years of experience in medical education, we provide comprehensive support and guidance.',
        trainingTitle: 'Our Training Programs',
        trainingDesc: 'Comprehensive Medical Training Solutions',
        trainingContent1: 'USMLE Step 1 Preparation',
        trainingContent2: 'Clinical Skills Development',
        trainingContent3: 'Medical Licensing Exam Prep',
        trainingFeatures: 'Our training programs feature:',
        trainingList: [
            'Expert instructors with proven track records',
            'Personalized learning paths',
            'Practice tests and assessments',
            'Interactive study materials'
        ],
        consultingTitle: 'Medical Education Consulting',
        consultingDesc: 'Expert Guidance for Your Medical Career',
        consultingServices: 'Our consulting services include:',
        consultingList: [
            'Career pathway planning',
            'Residency application support',
            'Interview preparation',
            'CV and personal statement review'
        ],
        whoWeAreTitle: 'Who We Are',
        whoWeAreSubtitle: 'Empowering Medical Professionals: The StudySmart Way',
        whoWeAreContent: 'StudySmart stands as a beacon of innovation in medical education. We\'ve created a unique ecosystem where aspiring and established healthcare professionals can thrive. Our approach goes beyond traditional education, offering a comprehensive platform that nurtures both academic prowess and professional acumen.',
        visionaryTitle: 'Our Visionary Perspective',
        visionaryContent: 'We envision a future where medical education transcends boundaries, both geographical and intellectual. StudySmart aims to be the cornerstone of this evolution, providing a global stage where medical knowledge is not just disseminated, but cultivated through collaboration and innovation.',
        coreCommitmentsTitle: 'Our Core Commitments',
        coreCommitmentsSubtitle: 'We are dedicated to:',
        coreCommitments: coreCommitmentsData.map(item => ({
            type: item.type,
            icon: item.icon,
            description: item.descriptionEn
        })),
        distinctionTitle: 'The StudySmart Distinction',
        distinctions: distinctionsData.map(item => ({
            type: item.type,
            image: item.image,
            title: item.titleEn,
            description: item.descriptionEn
        })),
        commitmentTitle: 'Our Commitment to Excellence',
        commitmentContent: 'At StudySmart, we uphold the highest standards of educational integrity. Our team of distinguished educators and medical professionals ensures that our offerings are not only current but prescient of future trends in healthcare. We continuously refine our methodologies, embracing emerging technologies and pedagogical innovations.',
        joinCommunityTitle: 'Join the StudySmart Community',
        joinCommunityContent: 'Whether you\'re at the threshold of your medical journey or seeking to elevate your established career, StudySmart offers the tools, knowledge, and community to propel you forward. Be part of a movement that\'s redefining medical education and shaping the future of healthcare.',
        elevateCareerButton: 'Elevate Your Medical Career with StudySmart',
        whoWeAreImageAlt: 'Medical professionals in blue scrubs standing together',
        globeIconAlt: 'Stylized globe icon representing global medical education',
        coreCommitmentAlts: {
            tech: 'Technology and education icon',
            learning: 'Continuous learning icon',
            practice: 'Medical practice icon',
            career: 'Career development icon',
            innovation: 'Medical innovation icon'
        },
        distinctionImageAlts: {
            precision: 'Medical professional using precision learning tools',
            development: 'Group of medical students in development session',
            collaboration: 'Healthcare professionals collaborating',
            global: 'Global medical education representation'
        }
    },
    ar: {
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
        }
    }
}; 