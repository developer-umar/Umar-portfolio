import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Certificates',
    hash: '#certificates',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/naturescure.png',
    title: `Nature's Cure - A Virtual Herbal Garden`,
    description: `
      Nature’s Cure is responsive show casing 25+ medicinal plants across six AYUSH systems, with dynamic search, category filtering and intuitive navigation.Integrated 3D plant models using google-model-viewer, allowing 100% interactive viewing with rotation, zoom and info overlays.Integrated AI assistant 'Herba' with Gemini API for natural language plant query handling.`,
    technologies: [
      'AI Chatbot',
      'Shadcn UI',
      'React.js',
      'Tailwind CSS',
      'OpenRouter API',
      'nodemailer',
      'Google Model Viewer',
      'Git LFS',
      'MongoDB',
      'Express.js',
      'Node.js',
      'MERN Stack',
    ],
    links: {
      preview: 'https://naturescurezone.onrender.com/',
      github: 'hhttps://github.com/Saral224x2/naturescure',
    },
  },

  {
    image: '/images/jsw.png',
    title: 'JSW Paints',
    description:
      'Contributed to the JSW Paints website by suggesting and implementing an interactive color palette feature, where hovering over shades dynamically changes the wall color for real-time visualization, enhancing user engagement and interactivity.',
    technologies: [
      'JavaScript',
      'React.js',
      'Node.js',
      'Shadcn UI',
      'Tailwind CSS',
      'AWS',
      'AWS EC2',
    ],
    links: {
      preview: 'https://www.jswpaints.in/shade',
      github: 'https://github.com/developer-umar?tab=repositories',
    },
  },
  {
    image: '/images/findure.jpg',
    title: 'Business Directory App',
    description:
      'Designed and developed the complete backend architecture for a local base service discovery app called Findure using MERN and react native for fully responsive with UI with seamless API integration, and a 40% increase in overall app performance.',
    technologies: [
      'React Native',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'Node Mailer',
      'Express.js',
    ],
    links: {
      preview: 'https://github.com/developer-umar/findureBackend',
      github: 'https://github.com/developer-umar/findureBackend',
    },
  },
  {
    image: '/images/erp.png',
    title: 'Enterprise Resource Planning System',
    description:
      'Engineered a full-scale ERP Management System with 4 user roles (Admin, Students, Teachers, Counselors), enabling role-based access, secure login (JWT), and dynamic dashboards using react And tailwind; deployed with 99.9% uptime and scalable backend on Render.',
    technologies: [
      'JavaScript',
      'React.js',
      'node.js',
      'Tailwind CSS',
      'gsap',
      'framer-motion',
      'JWT',
      'RESTful API',
      'Git',
      'GitHub',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    links: {
      preview: 'https://erp-frontend-eight-flax.vercel.app/',
      github: 'https://github.com/developer-umar?tab=repositories',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'MERN Stack Developer | Intern',
    company: 'Riveyra Infotech Pvt. Ltd., Kanpur.',
    description:
      'I enhanced a government data module with pagination and lazy-loading for 10,000+ records, reducing load times by 70%. I architected the backend for Findure, a local service discovery app, using MERN and React Native, boosting performance by 40% with seamless API integration. I deployed a robust Node.js backend on Render with MongoDB Atlas, achieving 99.9% uptime and API responses under 200ms. Additionally, I built a scalable ERP system with role-based access for four user roles, featuring JWT-secured login and dynamic React-Tailwind dashboards, deployed with 99.9% uptime.',

    period: '45 Days',
    technologies: [
      'React.js',
      'React Native',
      'Express.js',
      'mongoDB',
      'Node.js',
      'JavaScript',
      'Tailwind CSS',
      'cloudinary',
      'api Integration',
      'rest API',
      'Git',
      'GitHub',
      'render',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
