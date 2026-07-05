// Skills data — grouped by category with honest proficiency labels
// Proficiency levels: "Core Focus", "Comfortable", "Learning", "Project Experience"

export const skillCategories = [
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Java', level: 'Core Focus' },
      { name: 'Spring Boot', level: 'Core Focus' },
      { name: 'REST API', level: 'Core Focus' },
      { name: 'Spring Security', level: 'Learning' },
      { name: 'JWT Authentication', level: 'Learning' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Comfortable' },
      { name: 'MySQL', level: 'Comfortable' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 'Project Experience' },
      { name: 'JavaScript', level: 'Comfortable' },
      { name: 'HTML', level: 'Comfortable' },
      { name: 'CSS', level: 'Comfortable' },
      { name: 'Tailwind CSS', level: 'Project Experience' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 'Comfortable' },
      { name: 'GitHub', level: 'Comfortable' },
      { name: 'Vercel', level: 'Project Experience' },
    ],
  },
  {
    id: 'other',
    title: 'Other',
    icon: 'Code',
    skills: [
      { name: 'Python', level: 'Learning' },
    ],
  },
];
