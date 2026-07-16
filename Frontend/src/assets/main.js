import tswreisLogo from './Tswreis.jpg'
import jntuLogo from './Jntuh.jpg'
import medical from './Medical.jpg'
import library from './Library.jpg'
import youtube from './Youtube.jpg'
import aiplay from './AIatore.png'
import air from './Air.jpeg';
import one from './1st.png'
import two from './2nd.png'
import three from './3rd.png'
import four from './4th.png'
import five from './5th.png'

export const skills = [
  "HTML5", 
  "CSS", 
  "JAVASCRIPT", 
  "BOOTSTRAP", 
  "PYTHON", 
  "REACT", 
  "NODE.JS", 
  "C-Program", 
  "Figma UI", 
  "Ms-Excel", 
  "Ms-Word", 
  "Express", 
  "SQL", 
  "MongooDB"
];

export const education =[
  {
    "image": jntuLogo,
    "class": "BE/B-Tech",
    "name": "JNTUH (UCEW) Engineering",
    "year": "(2023-2027)"
  },
  {
    "image":tswreisLogo, 
    "class":"Intermediate", 
    "name":"TSWREIS COE BOYS KARIMNAGAR", 
    "year":"(2021-2023)"
  },
  {
    "image":tswreisLogo, 
    "class":"5th to 10th", 
    "name":"TSWREIS COE BOYS KARIMNAGAR", 
    "year":"(2015-2021)"
  }
]

export const projects = [
  {
    image: one,
    title: "AnalytIQ - AI Powered Data Analysis Platform",
    description:
      "Developed as part of Google's AI Intensive Program on Kaggle, AnalytIQ is an AI-powered data intelligence platform that enables users to upload datasets, visualize insights, and interact with AI for data analysis. It leverages Google Gemini and the Agent Development Kit (ADK) to generate intelligent summaries and actionable insights through a modern full-stack architecture.",
    tools: [
      "React.js",
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "Gemini AI",
      "Google ADK"
    ],
    website: "https://data-insights-agent-2.onrender.com", 
    github: "https://github.com/SrihariWebDeveloper/data-insights-agent"
  },
  {
  image: two,
  title: "ShopWave - Full Stack E-Commerce Platform",
  description:
    "Developed a complete MERN-based e-commerce platform featuring secure user authentication, product catalog, shopping cart, order management, and an admin dashboard. Built responsive interfaces and integrated RESTful APIs to deliver a seamless online shopping experience.",
  tools: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Bootstrap"
  ],
  website: "https://shopwave-frontend-usv0.onrender.com",
  github: "https://github.com/SrihariWebDeveloper/ShopWave"
},

{
  image: three,
  title: "Full Stack - Secure Authentication System",
  description:
    "Built a secure authentication system supporting user registration, login, password encryption, JWT-based authentication, protected routes, and role-based authorization. Designed reusable authentication middleware and integrated REST APIs for secure access control.",
  tools: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "REST API"
  ],
  website: "https://secure-user-authentication-system-client.onrender.com",
  github: "https://github.com/SrihariWebDeveloper/Secure_User_Authentication_System"
},

{
  image: four,
  title: "Learning Management System (LMS)",
  description:
    "Developed a modern Learning Management System that enables instructors to manage courses and students to access learning resources through a secure interface. Integrated Clerk Authentication for user management, authentication, and protected routes while providing a responsive learning experience.",
  tools: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Clerk Authentication",
    "REST API"
  ],
  website: "https://lms-vfqo.onrender.com",
  github: "https://github.com/SrihariWebDeveloper/LMS"
}, 
  {
    image: five,
    title: "Freelance Portfolio Website",
    description:
      "Designed and developed a modern portfolio website for a freelance video editor to showcase services, projects, testimonials, and contact information. The website features a responsive design, smooth user experience, and a professional interface tailored to attract potential clients.",
    tools: [
      "React.js",
      "Vite",
      "Tailwind CSS"
    ],
    website: "https://sidharth-portfolio-h5f3.onrender.com",
    github: "https://github.com/SrihariWebDeveloper/frelanace_portfolio"
  },
  {
    image: aiplay,
    title: "AI Task Processing Platform",
    description:
      "Designed a scalable task processing platform that executes AI-powered jobs asynchronously using Redis queues. The system efficiently manages background tasks, improves performance, and ensures reliable execution of AI workflows by separating task processing from user requests.",
    tools: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redis",
      "MongoDB",
      "Queue Management"
    ],
    website: "",
    github: "https://github.com/SrihariWebDeveloper/task"
  },

  {
    image: air,
    title: "Smart Weather Alert System using IoT & AI/ML",
    description:
      "Built an intelligent weather monitoring system that collects real-time environmental data from IoT sensors via ThingSpeak Cloud. Machine Learning models analyze weather patterns to predict conditions and generate timely alerts, helping users respond proactively to changing weather.",
    tools: [
      "Python",
      "Flask",
      "ThingSpeak",
      "ESP32",
      "Machine Learning",
      "MongoDB"
    ],
    website: "",
    github: "https://github.com/SrihariWebDeveloper/Smart-Weather-Alert-System---IoT-and-AI-and-SMS"
  },

  {
    image: library,
    title: "Multi-Tenant SaaS Notes Application",
    description:
      "Developed a secure multi-tenant SaaS notes platform where multiple organizations operate independently within a single application. Each tenant has isolated data, secure authentication, role-based access control, and complete note management capabilities.",
    tools: [
      "React.js",
      "Flask",
      "MongoDB",
      "JWT",
      "REST API"
    ],
    website: "",
    github: "https://github.com/SrihariWebDeveloper/Full_Stack_Saas_Notes_Application"
  },
];
