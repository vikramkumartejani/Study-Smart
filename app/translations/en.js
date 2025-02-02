import { coreCommitmentsData, distinctionsData } from "./data";

const en = {
  navbar: {
    home: "Home",
    mag: "Mag",
    about: "About",
    contact: "Contact Us",
    training: "Training",
    consulting: "Consulting",
    studyGroups: "Study Groups",
    coaching: "Coaching",
    professionalServices: "Professional Services",
    language: "العربية",
  },
  home: {
    hero: {
      title1: "Achieve",
      title2: "Your Medical Dreams",
      title3: "with StudySmart",
      subtitle: "Your Pathway to Success in USMLE and Beyond",
      button: "Get Started Now",
      imageAlt: "Medical Professionals",
    },
    services: {
      header: {
        title: "Our Services",
        subtitle: "Comprehensive support tailored to your success journey",
      },
      training: {
        title: "Training Programs",
        description:
          "Comprehensive training programs designed to help you excel in medical licensing exams and professional development.",
      },
      consulting: {
        title: "Expert Consulting",
        description:
          "Personalized guidance and strategic advice to help you navigate your medical career path effectively.",
      },
      studyGroups: {
        title: "Study Groups",
        description:
          "Collaborative learning environments where you can connect with peers and enhance your understanding through group discussions.",
      },
      coaching: {
        title: "Personal Coaching",
        description:
          "One-on-one mentoring sessions with experienced professionals to help you achieve your specific goals.",
      },
      professional: {
        title: "Professional Development",
        description:
          "Advanced courses and workshops to help you develop crucial skills for your medical career.",
      },
    },
    servicesSlider: {
      training: {
        label: "Training Programs",
        title: "Comprehensive Medical Training",
        sliderDescription:
          "Our training programs are designed to provide you with the knowledge and skills needed to excel in medical licensing exams and professional development. Learn from expert instructors through structured curricula and hands-on practice.",
        button: "Explore Training Programs",
      },
      consulting: {
        label: "Expert Consulting",
        title: "Strategic Career Guidance",
        sliderDescription:
          "Get personalized consulting from experienced medical professionals who understand your goals. We'll help you navigate career decisions, residency applications, and professional development opportunities.",
        button: "Book a Consultation",
      },
      studyGroups: {
        label: "Study Groups",
        title: "Collaborative Learning",
        sliderDescription:
          "Join our focused study groups to learn alongside peers who share your goals. Benefit from structured discussions, shared resources, and mutual support in your medical education journey.",
        button: "Join a Study Group",
      },
      coaching: {
        label: "Personal Coaching",
        title: "One-on-One Mentoring",
        sliderDescription:
          "Receive dedicated attention from experienced medical professionals who will guide your learning journey. Our coaches provide personalized strategies and feedback to help you achieve your goals.",
        button: "Start Coaching",
      },
      professional: {
        label: "Professional Development",
        title: "Career Advancement",
        sliderDescription:
          "Take your medical career to the next level with our professional development programs. Gain advanced skills, certifications, and knowledge needed for career progression.",
        button: "Advance Your Career",
      },
    },
    discover: {
      title: "Discover the StudySmart Difference",
      description:
        "At StudySmart, we are committed to guiding aspiring medical professionals to success. Our expert-led courses, supportive study groups, and personalized coaching services lay the foundation for your achievements. From exam preparation to professional services, we're here to support you at every step.",
      button: "Learn More About Us",
    },
    testimonials: {
      title: "See What Our Students Are Saying",
      items: [
        {
          name: "Amir Rahimi",
          role: "Residency Applicant",
          image: "/assets/testimonial-img-1.png",
          quote:
            "The coaching services were a game-changer for my interview preparation. The personalized feedback and practice sessions boosted my confidence.",
        },
        {
          name: "Sara Ghadiri",
          role: "Medical Student",
          image: "/assets/testimonial-img-1.png",
          quote:
            "StudySmart's USMLE courses were instrumental in my preparation. The comprehensive materials and expert guidance helped me achieve a high score on Step 1.",
        },
        {
          name: "Bahram M.",
          role: "USMLE Candidate",
          image: "/assets/testimonial-img-1.png",
          quote:
            "The peer study groups provided a great platform for collaborative learning. I gained valuable insights and support from fellow students.",
        },
        {
          name: "Amir Rahimi",
          role: "Residency Applicant",
          image: "/assets/testimonial-img-1.png",
          quote:
            "The coaching services were a game-changer for my interview preparation. The personalized feedback and practice sessions boosted my confidence.",
        },
        {
          name: "Sara Ghadiri",
          role: "Medical Student",
          image: "/assets/testimonial-img-1.png",
          quote:
            "StudySmart's USMLE courses were instrumental in my preparation. The comprehensive materials and expert guidance helped me achieve a high score on Step 1.",
        },
        {
          name: "Bahram M.",
          role: "USMLE Candidate",
          image: "/assets/testimonial-img-1.png",
          quote:
            "The peer study groups provided a great platform for collaborative learning. I gained valuable insights and support from fellow students.",
        },
      ],
    },
    blog: {
      title: "Stay Updated with the Latest Insights",
      subtitle:
        "Explore our blog for the latest news, tips, and strategies in the medical field",
      exploreButton: "Explore Now",
      posts: [
        {
          id: 1,
          title: "What is Lorem Ipsum?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s ...",
          image: "/assets/blog-img.png",
          link: "#",
        },
        {
          id: 2,
          title: "Contrary to popular belief",
          content:
            "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ...",
          image: "/assets/blog-img.png",
          link: "#",
        },
        {
          id: 3,
          title: "The standard Lorem Ipsum passage",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ...",
          image: "/assets/blog-img.png",
          link: "#",
        },
      ],
    },
    transform: {
      title:
        "Together, we'll transform your USMLE ambitions into achievements and your dreams into reality. Your future starts here.",
      imageAlt: "Medical Professional",
    },
  },
  training: {
    hero: {
      title: "Unleash Your Potential with StudySmart's Specialized Training",
      description:
        "StudySmart is your gateway to specialized training designed to propel you towards academic excellence and career success. Dive into our tailored courses and workshops crafted to meet the unique challenges of today's educational and professional landscapes.",
      imageAlt: "Professional instructor teaching",
    },
    learningPaths: {
      title: "Explore StudySmart's Diverse Learning Paths",
      subtitle: "Navigate Your Educational Journey with Confidence",
      path1: "Online USMLE Step 1 and Step 2 CK Courses",
      path2: "Comprehensive OET Preparation Course",
      path3: "Intensive Exam Preparation Courses",
      path4: "Research Paper Writing Courses",
      path5: "Data Analysis with SPSS Course",
    },
    courses: {
      listTitle: "Course Titles:",
      footer:
        "Embark on a journey of knowledge and skill refinement with StudySmart, where every course is designed to empower you towards a brighter future.",
      usmle: {
        title: "Master Your USMLE Journey",
        subtitle: "Rigorous Preparation Tailored to Your Success",
        description:
          "Prepare rigorously for USMLE Step 1 and Step 2 CK exams with StudySmart's specialized online courses. Our comprehensive approach integrates advanced study materials, practice exams, and personalized feedback to ensure you excel when it matters most.",
        buttonText: "Start Your Journey",
        list: {
          item1: "Comprehensive USMLE Step 1 Review Course",
          item2: "Advanced USMLE Step 2 CK Preparation",
          item3: "USMLE Practice Exam Series",
          item4: "Personalized Study Plans and Feedback Sessions",
        },
      },
      language: {
        title: "Excel in Language Proficiency with StudySmart",
        subtitle: "Tailored Training for Healthcare Professionals",
        description:
          "Elevate your language proficiency with StudySmart's comprehensive OET preparation course. Designed specifically for healthcare professionals, our program includes realistic simulations and personalized coaching to help you achieve exceptional OET scores.",
        buttonText: "Get Started",
        list: {
          item1: "Introduction to OET: Overview and Test Format",
          item2:
            "Language Proficiency Development for Healthcare Professionals",
          item3: "Effective Communication Strategies for OET",
          item4: "Realistic Scenario Simulations and Mock Tests",
        },
      },
      exam: {
        title: "Achieve Exam Excellence with StudySmart",
        subtitle: "Targeted Support for Professional Success",
        description:
          "Boost your exam performance with StudySmart's intensive preparation courses. Our expert-led sessions provide tailored guidance, customized study plans, and access to comprehensive resources to maximize your readiness and confidence on exam day.",
        buttonText: "Enhance Your Skills",
        list: {
          item1: "Medical Licensing Exam Bootcamp",
          item2: "Professional Certification Exam Crash Course",
          item3: "Strategies for High-Stakes Exam Success",
          item4: "Customized Study Plans and One-on-One Coaching",
        },
      },
      academic: {
        title: "Refine Your Academic Voice with StudySmart",
        subtitle: "Master the Art of Research Paper Writing",
        description:
          "Hone your academic writing skills with StudySmart's specialized courses. From mastering research methodologies to crafting impactful manuscripts, our training equips you with the tools to excel in academia and beyond.",
        buttonText: "Refine Your Writing - Contact Us",
        list: {
          item1: "Research Methodologies and Literature Review",
          item2: "Structuring and Organizing Your Research Paper",
          item3: "Writing Concisely and Effectively in Academic Contexts",
          item4: "Peer Review and Manuscript Submission Strategies",
        },
      },
    },
  },
  consulting: {
    hero: {
      imageAlt: "Person with compass",
      subtitle: "Navigate Your Journey:",
      title: "StudySmart's Compass of Possibilities",
      description:
        "Embark on a voyage of discovery with StudySmart's bespoke consulting services. Our seasoned navigators chart personalized courses through the complex waters of medical education and career advancement.",
    },
    roadmap: {
      title: "Your Personalized Roadmap to Success",
      subtitle: "Illuminating Paths, Revealing Horizons",
      milestone1: {
        title: "Trajectory Mapping:",
        description:
          "Unveil your optimal route from aspirations to achievements.",
      },
      milestone2: {
        title: "Milestone Illumination:",
        description: "Spotlight key waypoints in your educational odyssey.",
      },
    },
    trajectoryMapping: {
      title: "Trajectory Mapping: Charting Your Unique Course",
      subtitle: "Bespoke Blueprints for Boundless Potential",
      description:
        "Our Trajectory Mapping service is your personal atlas to success. Our expert cartographers of careers meticulously plot your journey, considering your unique strengths, aspirations, and the ever-changing landscape of medical education.",
      offeringsTitle: "Key Offerings:",
      offerings: {
        item1: "Personalized path projections",
        item2: "Decision point navigation",
        item3: "Resource constellation identification",
        item4: "Opportunity horizon scanning",
        item5: "Adaptive route recalibration",
      },
      buttonText: "Plot Your Course",
    },
    cards: {
      milestone: {
        subtitle: "Milestone Illumination: ",
        title: "Spotlighting Your Success Markers",
        tags: "Clarity, Insight, Direction",
        description:
          "Illuminate the pivotal moments in your journey with our Milestone Illumination service. We'll cast light on the critical junctures ahead, ensuring you're equipped to make informed decisions at every turn.",
        listTitle: "Beacon Points:",
        imageAlt: "Success milestone illustration",
        list: {
          item1: "Exam landscape surveying",
          item2: "Interview terrain scouting",
          item3: "Research realm exploration",
          item4: "Career crossroads clarification",
          item5: "Continuous progress tracking",
        },
        buttonText: "Illuminate Your Path",
      },
    },
    banner: {
      title: "The StudySmart Consulting Expedition",
      description:
        "At StudySmart, we believe in empowering you to chart your own course. Our consulting services don't just provide answers; they equip you with the compass and map to navigate your unique journey. From the first steps of exam preparation to the summit of your career aspirations, our tailored guidance ensures you're always moving in the right direction.",
    },
    footer: {
      text: "In the vast sea of medical education and career advancement, let StudySmart be your North Star. We don't just show you the destination; we help you savor every step of the journey. Your expedition towards excellence begins here.",
      buttonText: "Embark on Your Odyssey",
    },
  },
  studyGroups: {
    hero: {
      imageAlt: "Students collaborating in a study group",
      subtitle: "Knowledge Synergy:",
      title: "Collaborative and Collective Learning at StudySmart",
      description:
        "Dive into a world of shared knowledge and collective growth with StudySmart's innovative study groups. Our dual-track approach offers tailored experiences for both intensive academic review and groundbreaking research endeavors.",
    },
    twoPaths: {
      title: "Two Paths, One Goal: Elevate Your Learning",
      subtitle: "Choose Your Collaborative Adventure",
      path1: {
        title: "Study Circles",
        description:
          "Immerse yourself in focused academic discussions and shared learning experiences.",
      },
      path2: {
        title: "Research Groups",
        description:
          "Embark on collaborative scientific journeys and contribute to cutting-edge discoveries.",
      },
    },
    courses: {
      listTitle: "Features:",
      studyCircles: {
        title: "Study Circles: The Art of Collective Mastery",
        subtitle: "Unite, Discuss, Conquer",
        description:
          "Our Study Circles transform solitary study sessions into vibrant knowledge exchanges. Engage with peers, dissect complex topics, and reinforce your understanding through dynamic group interactions. Experience the power of shared insights and diverse perspectives.",
        buttonText: "Join a Study Circle",
        list: {
          item1: "Targeted Topic Marathons",
          item2: "Question Banks Deconstruction",
          item3: "Mock Exam Workshops",
          item4: "Concept Mapping Sessions",
          item5: "Peer Teaching Rotations",
        },
      },
      researchGroups: {
        title: "Research Groups: Pioneering Tomorrow's Healthcare",
        subtitle: "Collaborate, Innovate, Discover",
        description:
          "Step into the forefront of medical advancement with our Research Groups. Connect with fellow visionaries, pool your expertise, and contribute to groundbreaking studies. From hypothesis formation to publication, experience the thrill of scientific discovery as a team.",
        buttonText: "Explore Research Opportunities",
        list: {
          item1: "Interdisciplinary Brainstorming",
          item2: "Literature Review Roundtables",
          item3: "Methodology Design Workshops",
          item4: "Data Analysis Clinics",
          item5: "Manuscript Development Labs",
        },
      },
    },
    footer: {
      text: "At StudySmart, we believe that greatness is achieved together. Our study groups are more than just learning platforms – they're incubators for excellence, where your potential is amplified by the collective brilliance of your peers. Step into a world where collaboration catalyzes success and every discussion opens new horizons.",
    },
    advantage: {
      title: "The StudySmart Advantage: Collaboration Redefined",
      subtitle:
        "Experience the power of collective learning with StudySmart's innovative study groups:",
      footer:
        "Join us to transform your academic journey and research aspirations into reality.",
      buttonText: "Elevate Your Learning Now",
      studyCircles: {
        title: "Study Circles",
        cards: {
          item1: "Master complex topics through peer discussions",
          item2: "Accelerate your exam preparation",
          item3: "Benefit from diverse perspectives and shared insights",
        },
      },
      researchGroups: {
        title: "Research Groups:",
        cards: {
          item1: "Contribute to cutting-edge healthcare studies",
          item2:
            "Build your professional network while advancing scientific knowledge",
          item3: "Develop critical research skills in a supportive environment",
        },
      },
    },
  },
  coaching: {
    hero: {
      imageAlt: "Professional instructor teaching",
      subtitle: "Sculpt Your Success:",
      title: "StudySmart's Precision Coaching",
      description:
        "Embark on a bespoke developmental odyssey with StudySmart's finely-tuned coaching programs. Our expert mentors craft individualized strategies to elevate your performance in exams and interviews alike.",
    },
    pillars: {
      title: "Dual Pillars of Excellence",
      subtitle: "Tailor-Made Triumphs Await",
      examAlchemy: {
        title: "Exam Alchemy",
        description:
          "Transform knowledge into stellar scores through personalized preparation strategies.",
      },
      interviewArtistry: {
        title: "Interview Artistry",
        description:
          "Refine your narrative and presence to captivate any admissions panel.",
      },
    },
    courses: {
      listTitle: "Key Elements:",
      examAlchemy: {
        title: "Exam Alchemy: Forging Academic Gold",
        subtitle: "Crystallize Knowledge, Catalyze Success",
        description:
          "Our Exam Alchemy program is your crucible for academic excellence. Our seasoned alchemists of education employ bespoke formulas to transmute raw information into polished expertise, ensuring you shine under the spotlight of examination.",
        buttonText: "Transmute Your Potential",
        list: {
          item1: "Cognitive cartography for optimal recall",
          item2: "Precision drilling on pivotal concepts",
          item3: "Temporal mastery for peak performance",
          item4: "Simulated crucibles of assessment",
          item5: "Iterative refinement through analytics",
        },
      },
      interviewArtistry: {
        title: "Interview Artistry: Craft Your Compelling Narrative",
        subtitle: "Poise, Precision, Persuasion",
        description:
          "Become the protagonist of your own success story with our Interview Artistry program. We'll equip you with the brushstrokes to paint a vivid portrait of your capabilities, ensuring your canvas of potential resonates with every interviewer.",
        buttonText: "Author Your Success",
        list: {
          item1: "Narrative architecture workshops",
          item2: "Eloquence enhancement laboratories",
          item3: "Scenario immersion chambers",
          item4: "Non-verbal fluency calibration",
          item5: "Post-interview resonance tactics",
        },
      },
    },
    banner: {
      title: "The StudySmart Coaching Metamorphosis",
      description:
        "At StudySmart, we believe in catalyzing your innate brilliance. Our coaching services are not mere preparations, but transformative experiences. Whether you're poised to conquer a pivotal exam or step into your ideal role, our bespoke approach ensures you emerge not just prepared, but evolved.",
    },
    footer: {
      text: "In the crucible of StudySmart coaching, challenges crystallize into triumphs, and aspirations materialize into reality. Step into our atelier of excellence, where your potential is sculpted into mastery. Your metamorphosis commences now.",
      buttonText: "Initiate Your Evolution",
    },
  },
  contactPage: {
    title: "Connect with StudySmart",
    subtitle: "Your Partner in Medical Education Excellence",
    description:
      "At StudySmart, we're committed to supporting your journey through medical education. We welcome your inquiries and look forward to assisting you in achieving your goals.",
    contactInfo: {
      title: "Contact Information",
      subtitle:
        "Our dedicated team is ready to address your questions and provide support:",
      email: "Email:",
      phone: "Phone:",
      businessHours: "Business Hours",
      businessHoursText: "Monday to Friday, 9:00 AM - 6:00 PM EST",
    },
    location: {
      title: "Our Location",
      visitText: "Visit our main office:",
      center: "StudySmart Educational Center",
      address: "123 Medical Avenue, Suite 456",
      city: "New York, NY 10001",
      country: "United States",
    },
    form: {
      title: "Inquiry Form",
      subtitle:
        "We value your input. Please use the form below to send us your message.",
      submitButton: "Submit Inquiry",
    },
    social: {
      title: "Connect on Professional Networks",
      subtitle:
        "Stay informed about the latest developments in medical education",
    },
    newsletter: {
      title: "Stay Informed",
      subtitle:
        "Subscribe to our newsletter for updates on courses, study strategies, and trends in medical education.",
      placeholder: "Email Address...",
      button: "Subscribe",
    },
    cta: {
      text: "Your success in medical education is our priority. Contact StudySmart today to explore how we can support your professional journey.",
      button: "Contact StudySmart",
    },
  },
  language: "العربية",
  openMenu: "Open main menu",
  closeMenu: "Close main menu",
  aboutTitle: "About StudySmart",
  aboutDesc: "Your Trusted Partner in Medical Education",
  aboutContent:
    "StudySmart is a leading educational platform dedicated to helping medical students and professionals achieve their dreams. With years of experience in medical education, we provide comprehensive support and guidance.",
  trainingTitle: "Our Training Programs",
  trainingDesc: "Comprehensive Medical Training Solutions",
  trainingContent1: "USMLE Step 1 Preparation",
  trainingContent2: "Clinical Skills Development",
  trainingContent3: "Medical Licensing Exam Prep",
  trainingFeatures: "Our training programs feature:",
  trainingList: [
    "Expert instructors with proven track records",
    "Personalized learning paths",
    "Practice tests and assessments",
    "Interactive study materials",
  ],
  consultingTitle: "Medical Education Consulting",
  consultingDesc: "Expert Guidance for Your Medical Career",
  consultingServices: "Our consulting services include:",
  consultingList: [
    "Career pathway planning",
    "Residency application support",
    "Interview preparation",
    "CV and personal statement review",
  ],
  whoWeAreTitle: "Who We Are",
  whoWeAreSubtitle: "Empowering Medical Professionals: The StudySmart Way",
  whoWeAreContent:
    "StudySmart stands as a beacon of innovation in medical education. We've created a unique ecosystem where aspiring and established healthcare professionals can thrive. Our approach goes beyond traditional education, offering a comprehensive platform that nurtures both academic prowess and professional acumen.",
  visionaryTitle: "Our Visionary Perspective",
  visionaryContent:
    "We envision a future where medical education transcends boundaries, both geographical and intellectual. StudySmart aims to be the cornerstone of this evolution, providing a global stage where medical knowledge is not just disseminated, but cultivated through collaboration and innovation.",
  coreCommitmentsTitle: "Our Core Commitments",
  coreCommitmentsSubtitle: "We are dedicated to:",
  coreCommitments: coreCommitmentsData.map((item) => ({
    type: item.type,
    icon: item.icon,
    description: item.descriptionEn,
  })),
  distinctionTitle: "The StudySmart Distinction",
  distinctions: distinctionsData.map((item) => ({
    type: item.type,
    image: item.image,
    title: item.titleEn,
    description: item.descriptionEn,
  })),
  commitmentTitle: "Our Commitment to Excellence",
  commitmentContent:
    "At StudySmart, we uphold the highest standards of educational integrity. Our team of distinguished educators and medical professionals ensures that our offerings are not only current but prescient of future trends in healthcare. We continuously refine our methodologies, embracing emerging technologies and pedagogical innovations.",
  joinCommunityTitle: "Join the StudySmart Community",
  joinCommunityContent:
    "Whether you're at the threshold of your medical journey or seeking to elevate your established career, StudySmart offers the tools, knowledge, and community to propel you forward. Be part of a movement that's redefining medical education and shaping the future of healthcare.",
  elevateCareerButton: "Elevate Your Medical Career with StudySmart",
  whoWeAreImageAlt: "Medical professionals in blue scrubs standing together",
  globeIconAlt: "Stylized globe icon representing global medical education",
  coreCommitmentAlts: {
    tech: "Technology and education icon",
    learning: "Continuous learning icon",
    practice: "Medical practice icon",
    career: "Career development icon",
    innovation: "Medical innovation icon",
  },
  distinctionImageAlts: {
    precision: "Medical professional using precision learning tools",
    development: "Group of medical students in development session",
    collaboration: "Healthcare professionals collaborating",
    global: "Global medical education representation",
  },
  professionalServicesPage: {
    hero: {
      title: "Empower Your Career with StudySmart's Professional Services",
      description:
        "At StudySmart, we provide comprehensive support for your medical career. Our range of professional services is designed to assist you in every aspect of your professional journey, from project assistance to immigration services and beyond.",
    },
    navigation: {
      title: "Navigate the Path to Professional Success",
      subtitle: "Expert Assistance for Every Step of Your Journey",
    },
    services: {
      projectAssistance: {
        title: "Project Assistance",
        description:
          "Gain the support you need to excel in your projects with our expert guidance and resources.",
      },
      immigration: {
        title: "Immigration Services",
        description:
          "Simplify your transition with our comprehensive immigration support, including visa applications, travel arrangements, and settlement services.",
      },
      patent: {
        title: "Patent Registration",
        description:
          "Secure your innovations with our patent registration and consultation services. We ensure your ideas are protected and recognized.",
      },
      resume: {
        title: "Resume Building",
        description:
          "Enhance your academic and professional profile with our expert resume building services and networking opportunities.",
      },
      research: {
        title: "Research Project Investment",
        description:
          "Get the leadership and funding you need for your research projects with our investment and support services.",
      },
    },
    sections: {
      project: {
        title: "Streamline Your Professional Endeavors",
        subtitle: "Comprehensive Project Assistance",
        description:
          "Whether you're working on a medical research project or a professional initiative, our project assistance services provide the expertise and resources necessary to ensure your success. Our team of experienced professionals is here to guide you through every phase of your project.",
        cta: "Discover Project Assistance",
      },
      immigration: {
        title: "Simplify Your Journey with Expert Immigration Services",
        subtitle: "Comprehensive Support for a Smooth Transition",
        description:
          "Navigating the complexities of immigration can be challenging. StudySmart offers extensive support to help you through the process, from Green Card applications to visa extensions and more. Our dedicated team ensures you have the assistance you need to make your transition as seamless as possible.",
        cta: "Explore Immigration Services",
      },
      patent: {
        title: "Protect Your Innovations with Patent Registration",
        subtitle: "Secure Your Intellectual Property",
        description:
          "Ensure your innovations are protected with our patent registration services. StudySmart provides the guidance and support necessary to navigate the patent process, helping you secure your intellectual property and collaborate with industry experts.",
        cta: "Learn About Patent Services",
      },
      resume: {
        title: "Enhance Your Professional Profile",
        subtitle: "Effective Resume Building and Networking",
        description:
          "Craft a compelling resume that highlights your strengths and achievements with our expert services. Additionally, take advantage of our networking opportunities to connect with professionals and academics in your field, enhancing your career prospects.",
        cta: "Build Your Resume",
      },
      research: {
        title: "Invest in Your Research",
        subtitle: "Leadership and Funding for Your Projects",
        description:
          "StudySmart supports your research endeavors by providing leadership and investment opportunities. Our services are designed to help you secure funding and guidance for your projects, ensuring they reach their full potential.",
        cta: "Secure Research Investment",
      },
    },
    cta: {
      text: "At StudySmart, we are dedicated to providing the tools and support you need to excel in your professional journey. Explore our professional services to find out how we can assist you in achieving your career goals.",
      button: "Get Started with Professional Services",
    },
  },
  magPage: {
    hero: {
      date: "02 MAY 2024",
      title: "Life is a flower of which love is the honey",
      description:
        "when while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.",
      readMore: "Read More",
      seeAll: "See All",
    },
    sections: {
      recentArticles: {
        title: "Recent Articles",
        articles: [
          {
            title: "Start your first week of a new job like a boss",
            date: "02 MAY 2024",
          },
          {
            title: "Pioneering a new twist on a co-working modeles",
            date: "02 MAY 2024",
          },
          {
            title: "The white-label software model in fintech",
            date: "02 MAY 2024",
          },
          {
            title: "Investment in your life, health and wealth",
            date: "02 MAY 2024",
          },
          {
            title: "Control about the blind texts it almost unorthographics",
            date: "02 MAY 2024",
          },
          {
            title:
              "There are many variations of passages of available not the majority have suffered",
            date: "02 MAY 2024",
          },
          {
            title:
              "Feel the charm of existence in this spot, which was created for the bliss of souls like mine",
            date: "02 MAY 2024",
          },
          {
            title: "Life is a flower of which love is the honey",
            date: "02 MAY 2024",
          },
          {
            title: "Reach the utmost mindfulness and body wellness",
            date: "02 MAY 2024",
          },
          {
            title: "Plan your training with personal trainer online and easy",
            date: "02 MAY 2024",
          },
        ],
      },
      quickLinks: {
        title: "Quick Links",
        articles: [
          {
            title: "Control about the blind texts it almost unorthographics",
            description:
              "There are many variations of passages of available not the majority have suffered alteration",
            date: "02 MAY 2024",
          },
          {
            title: "There are many variations of passages available",
            description:
              "Alteration in some form, by injected humour sheets containing Ipsum passages and more",
            date: "02 MAY 2024",
          },
          {
            title: "Feel the charm of existence in this spot",
            description:
              "There are many variations of passages of available not the majority have suffered alteration",
            date: "02 MAY 2024",
          },
        ],
      },
      trendingTopics: {
        title: "Trending Topics",
        topics: [
          {
            title: "It takes what it takes to end something",
            description:
              "Alteration in some form, by injected humour sheets containing Ipsum passages and more",
          },
          {
            title: "The best street style looks from Paris fashion week 2024",
            description:
              "There are many variations of passages of available not the majority have suffered alteration",
          },
          {
            title: "9 Most awesome Blue lake with snow mountain",
            description:
              "when while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface",
          },
          {
            title: "How to have a happy, mindful holiday season",
            description:
              "There are many variations of passages of available not the majority have suffered alteration",
          },
        ],
      },
    },
  },
  footer: {
    contactInfo: "Contact Information",
    email: "Email",
    phone: "Phone",
    businessHours: "Business Hours",
    businessHoursText: "Mon-Fri: 9:00 AM - 6:00 PM EST",
    navigation: {
      column1: "Quick Links",
      column2: "Our Services",
    },
    copyright: "© 2024 StudySmart. All rights reserved.",
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
};

export default en;
