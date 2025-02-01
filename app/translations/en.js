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
    contactPage: {
        title: 'Connect with StudySmart',
        subtitle: 'Your Partner in Medical Education Excellence',
        description: "At StudySmart, we're committed to supporting your journey through medical education. We welcome your inquiries and look forward to assisting you in achieving your goals.",
        contactInfo: {
            title: 'Contact Information',
            subtitle: 'Our dedicated team is ready to address your questions and provide support:',
            email: 'Email:',
            phone: 'Phone:',
            businessHours: 'Business Hours',
            businessHoursText: 'Monday to Friday, 9:00 AM - 6:00 PM EST'
        },
        location: {
            title: 'Our Location',
            visitText: 'Visit our main office:',
            center: 'StudySmart Educational Center',
            address: '123 Medical Avenue, Suite 456',
            city: 'New York, NY 10001',
            country: 'United States'
        },
        form: {
            title: 'Inquiry Form',
            subtitle: 'We value your input. Please use the form below to send us your message.',
            submitButton: 'Submit Inquiry'
        },
        social: {
            title: 'Connect on Professional Networks',
            subtitle: 'Stay informed about the latest developments in medical education'
        },
        newsletter: {
            title: 'Stay Informed',
            subtitle: 'Subscribe to our newsletter for updates on courses, study strategies, and trends in medical education.',
            placeholder: 'Email Address...',
            button: 'Subscribe'
        },
        cta: {
            text: 'Your success in medical education is our priority. Contact StudySmart today to explore how we can support your professional journey.',
            button: 'Contact StudySmart'
        }
    },
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
    },
    professionalServicesPage: {
        hero: {
            title: "Empower Your Career with StudySmart's Professional Services",
            description: "At StudySmart, we provide comprehensive support for your medical career. Our range of professional services is designed to assist you in every aspect of your professional journey, from project assistance to immigration services and beyond."
        },
        navigation: {
            title: "Navigate the Path to Professional Success",
            subtitle: "Expert Assistance for Every Step of Your Journey"
        },
        services: {
            projectAssistance: {
                title: "Project Assistance",
                description: "Gain the support you need to excel in your projects with our expert guidance and resources."
            },
            immigration: {
                title: "Immigration Services",
                description: "Simplify your transition with our comprehensive immigration support, including visa applications, travel arrangements, and settlement services."
            },
            patent: {
                title: "Patent Registration",
                description: "Secure your innovations with our patent registration and consultation services. We ensure your ideas are protected and recognized."
            },
            resume: {
                title: "Resume Building",
                description: "Enhance your academic and professional profile with our expert resume building services and networking opportunities."
            },
            research: {
                title: "Research Project Investment",
                description: "Get the leadership and funding you need for your research projects with our investment and support services."
            }
        },
        sections: {
            project: {
                title: "Streamline Your Professional Endeavors",
                subtitle: "Comprehensive Project Assistance",
                description: "Whether you're working on a medical research project or a professional initiative, our project assistance services provide the expertise and resources necessary to ensure your success. Our team of experienced professionals is here to guide you through every phase of your project.",
                cta: "Discover Project Assistance"
            },
            immigration: {
                title: "Simplify Your Journey with Expert Immigration Services",
                subtitle: "Comprehensive Support for a Smooth Transition",
                description: "Navigating the complexities of immigration can be challenging. StudySmart offers extensive support to help you through the process, from Green Card applications to visa extensions and more. Our dedicated team ensures you have the assistance you need to make your transition as seamless as possible.",
                cta: "Explore Immigration Services"
            },
            patent: {
                title: "Protect Your Innovations with Patent Registration",
                subtitle: "Secure Your Intellectual Property",
                description: "Ensure your innovations are protected with our patent registration services. StudySmart provides the guidance and support necessary to navigate the patent process, helping you secure your intellectual property and collaborate with industry experts.",
                cta: "Learn About Patent Services"
            },
            resume: {
                title: "Enhance Your Professional Profile",
                subtitle: "Effective Resume Building and Networking",
                description: "Craft a compelling resume that highlights your strengths and achievements with our expert services. Additionally, take advantage of our networking opportunities to connect with professionals and academics in your field, enhancing your career prospects.",
                cta: "Build Your Resume"
            },
            research: {
                title: "Invest in Your Research",
                subtitle: "Leadership and Funding for Your Projects",
                description: "StudySmart supports your research endeavors by providing leadership and investment opportunities. Our services are designed to help you secure funding and guidance for your projects, ensuring they reach their full potential.",
                cta: "Secure Research Investment"
            }
        },
        cta: {
            text: "At StudySmart, we are dedicated to providing the tools and support you need to excel in your professional journey. Explore our professional services to find out how we can assist you in achieving your career goals.",
            button: "Get Started with Professional Services"
        }
    }
};

export default en; 