export const skillsData = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML5", level: "Advanced", description: "Structuring and presenting web content" },
      { name: "CSS3", level: "Advanced", description: "Styling web applications for responsive designs" },
      { name: "JavaScript", level: "Advanced", description: "Building dynamic and interactive web applications" },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first CSS framework for rapid UI development" },
      { name: "React", level: "Advanced", description: "Building modern web applications with React and its ecosystem" },
      { name: "Next.js", level: "Intermediate", description: "Creating performant and SEO-friendly web applications" },
      { name: "TypeScript", level: "Intermediate", description: "Writing type-safe code for scalable applications" },
      { name: "Vite", level: "Advanced", description: "Lightning-fast build tool and dev server" },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: "Intermediate", description: "Server-side JavaScript runtime environment" },
      { name: "Express.js", level: "Intermediate", description: "Fast, minimalist web framework for Node.js" },
      { name: "REST APIs", level: "Intermediate", description: "Designing and consuming RESTful APIs" },
      { name: "MongoDB", level: "Intermediate", description: "NoSQL database for flexible data storage" },
      { name: "Python", level: "Beginner", description: "Scripting, automation, and data processing" },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git", level: "Advanced", description: "Version control and collaborative development" },
      { name: "GitHub", level: "Advanced", description: "Hosting, CI/CD, and open-source contributions" },
      { name: "Linux", level: "Intermediate", description: "Command-line proficiency and system administration" },
      { name: "Figma", level: "Intermediate", description: "UI/UX design and prototyping" },
      { name: "VS Code", level: "Advanced", description: "Preferred editor with custom extensions and themes" },
    ],
  },
];

export const levelColors = {
  Advanced: "bg-[var(--skill-advanced-bg)] text-[var(--skill-advanced-text)] border-[var(--skill-advanced-border)]",
  Intermediate: "bg-[var(--skill-intermediate-bg)] text-[var(--skill-intermediate-text)] border-[var(--skill-intermediate-border)]",
  Beginner: "bg-[var(--skill-beginner-bg)] text-[var(--skill-beginner-text)] border-[var(--skill-beginner-border)]",
};