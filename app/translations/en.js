import { coreCommitmentsData, distinctionsData } from './data';

const en = {
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
    },
    footer: {
        contactInfo: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        businessHours: 'Business Hours',
        businessHoursText: 'Monday to Friday, 9:00 AM - 6:00 PM EST',
        navigation: {
            column1: [
                { name: 'Home', href: '/' },
                { name: 'Mag', href: '/mag' },
                { name: 'About', href: '/about' },
                { name: 'Contact Us', href: '/contact' }
            ],
            column2: [
                { name: 'Training', href: '/training' },
                { name: 'Consulting', href: '/consulting' },
                { name: 'Study Groups', href: '/study-groups' },
                { name: 'Coaching', href: '/coaching' },
                { name: 'Professional Services', href: '/services' }
            ]
        },
        copyright: '© 2024 StudySmart. All Right Reserved.',
        socialLinks: [
            { name: 'Instagram', href: '#' },
            { name: 'LinkedIn', href: '#' },
            { name: 'Twitter', href: '#' }
        ]
    }
};

export default en; 