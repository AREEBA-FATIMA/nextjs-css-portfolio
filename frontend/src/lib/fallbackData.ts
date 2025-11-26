import { Profile, HeroSlide, Service, Skill, Project } from './api';

/**
 * Fallback data that matches backend structure exactly
 * Used when API is unavailable or returns empty data
 */

export const FALLBACK_PROFILE: Profile = {
  id: 1,
  name: "Areeba Fatima",
  title: "Full Stack & AI-Driven Web Developer",
  email: "areebafatima2457@example.com",
  phone: "+92 3147837079",
  linkedin_url: "https://www.linkedin.com/in/areeba-fatima-ali/",
  profile_image: "/images/me-5.png",
  about_text_1: "Hi, I'm Areeba Fatima, a passionate Full Stack & AI-Driven Web Developer focused on building intelligent, scalable, and user-centered solutions. I specialize in Django REST Framework (Python) and Next.js/React.js, combining powerful backends with sleek, high-performance frontends. I've crafted modular ERP systems, API-driven architectures, and secure role-based dashboards for real-world enterprise applications.",
  about_text_2: "Currently, I'm working on a School/ERP Management System (Django + Next.js) with modules for HR, Students, Attendance, Exams, and Analytics—honing strengths in data modeling, API design, and efficient state management. I'm also diving deep into Agentic AI—integrating AI reasoning, planning, and automation using the OpenAI SDK—to build AI-native apps that adapt, assist, and learn.",
  vision_text: "I aim to merge AI and Web Development to build platforms that think, adapt, and automate intelligently—leading the shift toward AI-native systems that redefine how software interacts with humans and data.",
  current_focus: "Building AI-native applications with OpenAI SDK and developing scalable ERP systems."
};

export const FALLBACK_HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    heading: "I am",
    sub_heading: "Full Stack & AI-Driven Developer",
    paragraph: "I build intelligent, scalable and user-centered apps using Django REST and Next.js.",
    button_text: "Explore My Work",
    target_section: "work",
    order: 0,
  },
  {
    id: 2,
    heading: "I Build",
    sub_heading: "ERP & API-first Systems",
    paragraph: "Modular ERPs, secure role-based dashboards, and robust API-driven architectures.",
    button_text: "Learn More",
    target_section: "about",
    order: 1,
  },
  {
    id: 3,
    heading: "I Design",
    sub_heading: "AI-Native Workflows",
    paragraph: "Integrating Agentic AI with OpenAI SDK for reasoning, planning and automation.",
    button_text: "My Skills",
    target_section: "skills",
    order: 2,
  },
  {
    id: 4,
    heading: "I Deliver",
    sub_heading: "Insights & Scale",
    paragraph: "Clean data models, strong APIs, and analytics—ready to scale for real users.",
    button_text: "Services",
    target_section: "services",
    order: 3,
  },
];

export const FALLBACK_SERVICES: Service[] = [
    {
      id: 1,
      title: "Interactive Applications",
      description: "Creating responsive and engaging applications using modern web technologies like React.js, Next.js, and Tailwind CSS.",
      icon_name: "FaDesktop",
      icon_library: "fa",
      color_class: "green",
      order: 0,
    },
    {
      id: 2,
      title: "Backend & APIs",
      description: "Developing secure and scalable backend systems with Django, Python, REST APIs, and database integration for real-world applications.",
      icon_name: "FaDatabase",
      icon_library: "fa",
      color_class: "navy",
      order: 1,
    },
    {
      id: 3,
      title: "Full-Stack Solutions",
      description: "End-to-end application solutions like SMS platforms, Lingo systems, and lab management tools with seamless integration.",
      icon_name: "FaProjectDiagram",
      icon_library: "fa",
      color_class: "red",
      order: 2,
    },
    {
      id: 4,
      title: "Database Management",
      description: "Efficient and scalable database design and management with MySQL and PostgreSQL.",
      icon_name: "FaServer",
      icon_library: "fa",
      color_class: "purple",
      order: 3,
    },
    {
      id: 5,
      title: "APIs & Integration",
      description: "Building RESTful APIs and integrating third-party services for smooth communication between different systems.",
      icon_name: "FaNetworkWired",
      icon_library: "fa",
      color_class: "yellow",
      order: 4,
    },
    {
      id: 6,
      title: "Custom Application Solutions",
      description: "Tailored solutions based on real project experience, covering education, lab systems, and interactive platforms.",
      icon_name: "FaLightbulb",
      icon_library: "fa",
      color_class: "blue",
      order: 5,
    },
  ];
  
export const MY_SKILLS_EXTENDED: Skill[] = [
    { id: 1, name: "HTML", percentage: 100, percentage_display: "100%", color_class: "green", order: 0 },
    { id: 2, name: "CSS", percentage: 100, percentage_display: "100%", color_class: "blue", order: 1 },
    { id: 3, name: "Tailwind CSS", percentage: 90, percentage_display: "90%", color_class: "navy", order: 2 },
    { id: 4, name: "Django", percentage: 90, percentage_display: "90%", color_class: "green", order: 3 },
    { id: 5, name: "REST APIs", percentage: 90, percentage_display: "90%", color_class: "purple", order: 4 },
    { id: 6, name: "TypeScript", percentage: 80, percentage_display: "80%", color_class: "purple", order: 5 },
    { id: 7, name: "Next.js", percentage: 85, percentage_display: "85%", color_class: "red", order: 6 },
    { id: 8, name: "React.js", percentage: 85, percentage_display: "85%", color_class: "blue", order: 7 },
    { id: 9, name: "Python", percentage: 85, percentage_display: "85%", color_class: "yellow", order: 8 },
    { id: 10, name: "JavaScript", percentage: 70, percentage_display: "70%", color_class: "yellow", order: 9 },
    { id: 11, name: "OpenAI Agents SDK", percentage: 85, percentage_display: "85%", color_class: "violet", order: 10 },
    { id: 12, name: "PHP", percentage: 80, percentage_display: "80%", color_class: "violet", order: 11 },
    { id: 13, name: "CodeIgniter", percentage: 80, percentage_display: "80%", color_class: "pink", order: 12 },
    { id: 14, name: "MySQL", percentage: 85, percentage_display: "85%", color_class: "cyan", order: 13 },
    { id: 15, name: "PostgreSQL", percentage: 85, percentage_display: "85%", color_class: "teal", order: 14 },
    { id: 16, name: "Git", percentage: 90, percentage_display: "90%", color_class: "orange", order: 15 },
    { id: 17, name: "Docker", percentage: 75, percentage_display: "75%", color_class: "gray", order: 16 },
    { id: 18, name: "Figma", percentage: 80, percentage_display: "80%", color_class: "cyan", order: 17 }
  ];

// Export as FALLBACK_SKILLS for backward compatibility
export const FALLBACK_SKILLS = MY_SKILLS_EXTENDED;
  
export const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "A modern portfolio website built with Next.js and Django REST API",
    live_demo_url: "https://nextjs-portfolio-areeba-fatimas-projects.vercel.app/",
    github_url: "https://github.com/AREEBA-FATIMA/nextjs-portfolio",
    image_url: "/images/work-1.png",
    project_type: "Website",
    order: 0,
  },
  {
    id: 2,
    title: "Credify Project",
    description: "A financial management application with modern UI/UX",
    live_demo_url: "https://credify-project.vercel.app/",
    github_url: "https://github.com/AREEBA-FATIMA/Credify",
    image_url: "/images/work-2.png",
    project_type: "Website",
    order: 1,
  },
  {
    id: 3,
    title: "CoachIQ Project",
    description: "An intelligent coaching platform with AI integration",
    live_demo_url: "https://areeba-fatima.github.io/Coach-IQ/",
    github_url: "https://github.com/AREEBA-FATIMA/Coach-IQ",
    image_url: "/images/work-3.png",
    project_type: "Website",
    order: 2,
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "A responsive portfolio showcasing my work and skills",
    live_demo_url: "https://areeba-fatima.github.io/Personal-Portfolio/",
    github_url: "https://github.com/AREEBA-FATIMA/Personal-Portfolio",
    image_url: "/images/work-4.png",
    project_type: "Website",
    order: 3,
  },
  {
    id: 5,
    title: "Groco Project",
    description: "An e-commerce grocery shopping platform",
    live_demo_url: "https://areeba-fatima.github.io/grocery-shop/",
    github_url: "https://github.com/AREEBA-FATIMA/grocery-shop",
    image_url: "/images/work-5.png",
    project_type: "Website",
    order: 4,
  },
  {
    id: 6,
    title: "Inwood Project",
    description: "A modern furniture e-commerce website",
    live_demo_url: "https://inwood-project.vercel.app/",
    github_url: "https://github.com/AREEBA-FATIMA/inwood-project",
    image_url: "/images/work-6.png",
    project_type: "Website",
    order: 5,
  },
];

