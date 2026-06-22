export const projects = [
  {
    id: 1,
    title: "Portfolio 2.0",
    description: "A modern, animated portfolio website built with Next.js 14, Framer Motion, and Tailwind CSS. Features dark/light mode, smooth page transitions, and a clean design system.",
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop",
    liveUrl: "https://ishan0121.github.io/portfolio2.0",
    githubUrl: "https://github.com/Ishan0121/portfolio2.0",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    featured: true,
    category: "Web Apps",
    status: "Maintained",
    features: [
      "Custom framer-motion animations",
      "Dynamic theming and glassmorphism",
      "Lenis smooth scrolling integration",
      "Responsive layout for all devices"
    ],
    metrics: [
      "100/100 Lighthouse Score",
      "Custom Design System",
      "15+ Interactive Components"
    ],
    challenges: "Implementing a highly performant sticky stack and smooth horizontal scrolling without compromising rendering performance or accessibility.",
    lessons: "Mastered Framer Motion's useScroll and useTransform hooks, and learned how to build a scalable and modular component architecture using Tailwind CSS."
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart management, user authentication, and Stripe payment integration. Built with Next.js and MongoDB.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/Ishan0121/ecommerce",
    tags: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
    featured: true,
    category: "Web Apps",
    status: "Completed",
    features: [
      "Secure user authentication (JWT/OAuth)",
      "Shopping cart state management",
      "Stripe payment gateway integration",
      "Admin dashboard for product management"
    ],
    metrics: [
      "Secure Checkout",
      "Dynamic Routing",
      "Optimized Image Delivery"
    ],
    challenges: "Handling complex cart state synchronization between local storage and the database across multiple browser tabs.",
    lessons: "Deepened understanding of Stripe webhooks and robust server-side validation using Next.js API routes."
  },
  {
    id: 3,
    title: "Real-time Chat App",
    description: "A WebSocket-powered real-time messaging application with rooms, typing indicators, and persistent message history using MongoDB.",
    imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    liveUrl: "https://example.com/chat",
    githubUrl: "https://github.com/Ishan0121/chat-app",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    featured: false,
    category: "Web Apps",
    status: "Completed",
    features: [
      "Real-time bidirectional communication",
      "Private and group chat rooms",
      "Typing indicators and read receipts",
      "Message history persistence"
    ],
    metrics: [
      "Sub-50ms Message Latency",
      "Scalable Room Architecture",
      "NoSQL Database Design"
    ],
    challenges: "Managing socket connections efficiently to prevent memory leaks and handling reconnections gracefully when network drops.",
    lessons: "Gained significant experience in event-driven architecture and scaling WebSockets."
  },
  {
    id: 4,
    title: "Task Manager App",
    description: "A productivity-focused task management tool with drag-and-drop boards, priority tagging, due dates, and team collaboration features.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    liveUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/Ishan0121/task-manager",
    tags: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    featured: false,
    category: "Tools",
    status: "Maintained",
    features: [
      "Kanban-style drag and drop interface",
      "Team workspace and collaboration",
      "Task prioritization and filtering",
      "Due date notifications"
    ],
    metrics: [
      "Full CRUD Operations",
      "Optimistic UI Updates",
      "Custom Auth Flow"
    ],
    challenges: "Implementing a smooth and performant drag-and-drop experience that instantly syncs with the backend using optimistic updates.",
    lessons: "Learned advanced state management techniques and how to build complex interactive UIs."
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive charts, and 7-day predictions using the OpenWeather API.",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=800&h=500&fit=crop",
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/Ishan0121/weather-dashboard",
    tags: ["React", "Chart.js", "OpenWeather API", "CSS"],
    featured: false,
    category: "Experiments",
    status: "Archived",
    features: [
      "Geolocation-based weather tracking",
      "Interactive temperature/precipitation charts",
      "7-day detailed forecasting",
      "Dynamic background based on weather"
    ],
    metrics: [
      "RESTful API Integration",
      "Data Visualization",
      "Responsive Layout"
    ],
    challenges: "Parsing and formatting massive JSON payloads from the weather API to feed cleanly into Chart.js.",
    lessons: "Improved skills in asynchronous programming and data visualization libraries."
  },
  {
    id: 6,
    title: "Dev Blog",
    description: "A markdown-powered developer blog with syntax highlighting, tag filtering, dark mode, and SEO optimization. Built with Next.js App Router.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    liveUrl: "https://example.com/blog",
    githubUrl: "https://github.com/Ishan0121/dev-blog",
    tags: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
    featured: false,
    category: "Web Apps",
    status: "Completed",
    features: [
      "Statically generated MDX parsing",
      "Code snippet syntax highlighting",
      "Dynamic tag-based routing",
      "SEO and metadata optimization"
    ],
    metrics: [
      "100/100 SEO Score",
      "Static Site Generation (SSG)",
      "Zero Database Overhead"
    ],
    challenges: "Configuring MDX plugins to correctly render complex markdown components and syntax highlighting themes.",
    lessons: "Mastered Next.js App Router caching, SSG, and file-system-based data fetching."
  }
];