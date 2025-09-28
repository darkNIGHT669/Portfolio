export const myProjects = [
  {
    id: 1,
    title: "E-commerce Web Application",
    description:
      "A full-stack e-commerce website allowing users to browse products, add to cart, and complete purchases securely.",
    subDescription: [
      "Built with MERN stack (MongoDB, Express.js, React.js, Node.js) for a scalable web application.",
      "Implemented user authentication, cart management, and order tracking.",
      "Designed a responsive UI using Tailwind CSS for seamless desktop and mobile experience.",
      "Integrated payment gateway APIs for secure online transactions.",
    ],
    href: "https://your-live-link.com/ecommerce",
    image: "assets/projects/eCommerce.png", // Updated link
    tags: [
      { id: 1, name: "React", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { id: 2, name: "Node.js", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { id: 3, name: "MongoDB", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      { id: 4, name: "TailwindCSS", path: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    ],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and professional experience.",
    subDescription: [
      "Built using React and Tailwind CSS with modern, responsive design.",
      "Implemented smooth scrolling, animated sections, and project modals.",
      "Integrated Tech Stack and Projects sections dynamically from JSON.",
      "Hosted on Vercel for fast deployment and live access.",
    ],
    href: "https://your-portfolio-link.com",
    image: "assets/projects/Portfolio.png", // Updated link
    tags: [
      { id: 1, name: "React", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { id: 2, name: "TailwindCSS", path: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { id: 3, name: "Vercel", path: "https://assets.vercel.com/image/upload/v1675890655/front/nextjs/nextjs-logo-light.svg" },
    ],
  },
  {
    id: 3,
    title: "Automated Testing Suite",
    description:
      "An automated testing framework for web applications to streamline QA processes.",
    subDescription: [
      "Built using Selenium for browser automation and Jest for frontend testing.",
      "Implemented reusable test scripts and test case management.",
      "Generated detailed test reports for bug tracking and analysis.",
      "Integrated CI/CD pipelines for automated testing on deployment.",
    ],
    href: "https://github.com/harshdahiya/automated-testing-suite",
    image: "assets/projects/automated.webp", // Updated link
    tags: [
      { id: 1, name: "Selenium", path: "https://www.vectorlogo.zone/logos/selenium/selenium-icon.svg" },
      { id: 2, name: "Jest", path: "https://raw.githubusercontent.com/jest-community/brand/master/logo/jest-logo-light.svg" },
      { id: 3, name: "Node.js", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "A real-time chat application allowing users to communicate seamlessly with friends and groups.",
    subDescription: [
      "Built using React for frontend and Node.js + Express + Socket.io for backend real-time communication.",
      "Implemented user authentication, chat rooms, and private messaging.",
      "Styled UI with Tailwind CSS for modern and responsive design.",
      "Used MongoDB for storing messages and user data persistently.",
    ],
    href: "https://github.com/harshdahiya/chat-app",
    image: "assets/projects/Taskmanager.jpg", // Chat app image
    tags: [
      { id: 1, name: "React", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { id: 2, name: "Node.js", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { id: 3, name: "Socket.io", path: "https://cdn.worldvectorlogo.com/logos/socket-io.svg" },
      { id: 4, name: "MongoDB", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      { id: 5, name: "TailwindCSS", path: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    ],
  },
  {
    id: 5,
    title: "Task Manager Web App",
    description:
      "A personal project to manage tasks, deadlines, and priorities efficiently.",
    subDescription: [
      "Built with React for frontend and Node.js + Express for backend API.",
      "Implemented CRUD operations and user authentication.",
      "Styled UI with Tailwind CSS for modern and responsive design.",
      "Used MongoDB for storing user tasks and data persistently.",
    ],
    href: "https://github.com/harshdahiya/task-manager",
    image: "assets/projects/Caht.webp", // Updated link
    tags: [
      { id: 1, name: "React", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { id: 2, name: "Node.js", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { id: 3, name: "MongoDB", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      { id: 4, name: "TailwindCSS", path: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    ],
  },
];


export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/harsh-498-dahiya",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "instagram.com/harsh_dahiya_1",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  { 
    title: "Backend Developer Intern",
    job: "Oryx International Logistics",
    date: "Jan 2024 – Jun 2024",
    contents: [
      "Developed and maintained backend services for logistics management using Node.js, Express, and MongoDB.",
      "Optimized API performance, reducing response time by 30%, improving real-time shipment tracking.",
      "Designed and implemented secure RESTful APIs consumed by web and mobile applications.",
      "Collaborated with cross-functional teams to integrate payment gateways, order management, and notification services.",
      "Documented backend architecture and APIs for easy maintenance and onboarding new developers.",
    ],
  },
  {
    title: "Software QA Intern ",
    job: "OPK e-Services",
    date: "Aug 2024 – Dec 2024",
    contents: [
      "Designed, implemented, and maintained automated testing suites using Selenium and Jest for web applications.",
      "Increased overall test coverage by 40%, reducing critical production bugs.",
      "Conducted functional, regression, integration, and performance testing to ensure software reliability.",
      "Collaborated with developers and product managers to prioritize bug fixes and feature improvements.",
      "Improved QA process efficiency by introducing reusable test scripts and CI/CD integration.",
    ],
  },
  {
    title: "Embedded Systems Intern ",
    job: " Bharat Electronics Limited (BEL)",
    date: "Jun 2023 – Aug 2023",
    contents: [
      "Developed firmware modules for embedded devices using C/C++, contributing to prototype development.",
      "Assisted in hardware-software integration, debugging, and performance optimization of embedded systems.",
      "Performed unit testing and system validation to ensure products met quality and safety standards.",
      "Documented system specifications and troubleshooting procedures for engineering teams.",
    ],
  },
  {
    title: "Web Developer Intern",
    job: "Ivory Communication",
    date: "Jun 2022 – Aug 2022",
    contents: [
      "Developed responsive web applications using React, JavaScript, and Tailwind CSS.",
      "Implemented dynamic UI components and reusable frontend modules, reducing development time by 20%.",
      "Integrated REST APIs for content management, user interaction, and analytics dashboards.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Freelance / Self-Employed",
    date: "Software & Web Development",
    contents: [
      "Developing custom web applications and backend systems for clients using MERN stack, React, Node.js, and MongoDB.",
      "Providing QA, testing, and debugging services for small to medium-scale projects.",
      "Implementing portfolio websites, e-commerce platforms, and automated testing solutions.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
