import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const profile = {
  name: "Pralad Neupane",
  headline: "Backend Developer | Node.js, Express, Java",
  intro:
    "I build scalable APIs and backend systems with a practical eye for real users, clean data flow, and maintainable code.",
  location: "Morang, Nepal",
  college: "Itahari International College",
  internship: "Sitoula Tech Solutions",
  email: "praneupane01@gmail.com",
  phone: "",
  resume: "/resume-pralad-neupane.txt",
  github: "https://github.com/pra-neupane01",
  linkedin: "https://www.linkedin.com/in/pralad-neupane-435874392",
  facebook: "https://www.facebook.com/praNeupane01",
  instagram: "https://www.instagram.com/praka5h_n",
  mapQuery: "Morang, Nepal",
};

export const highlights = [
  {
    label: "Backend-first builder",
    value: "APIs, auth, databases, and system logic that can scale",
    icon: ServerCog,
  },
  {
    label: "Currently interning",
    value: "Sitoula Tech Solutions",
    icon: BriefcaseBusiness,
  },
  {
    label: "Student",
    value: "Itahari International College",
    icon: GraduationCap,
  },
  {
    label: "Open to networking",
    value: "Collaboration, internships, mentorship, and project ideas",
    icon: Network,
  },
];

export const focusLines = [
  "Building REST APIs that are clean, practical, and ready to grow.",
  "Turning project ideas into usable systems with real workflows.",
  "Learning fast through internship work, college projects, and public code.",
];

export const skillGroups = [
  {
    title: "Backend",
    skills: ["Java", "Node.js", "Express", "Spring Boot", "REST APIs"],
    strength: 88,
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "Firebase", "Schema Design", "Query Logic"],
    strength: 78,
  },
  {
    title: "Product UI",
    skills: ["React", "Responsive UI", "Forms", "Portfolio Systems"],
    strength: 72,
  },
  {
    title: "Workflow",
    skills: ["Git", "GitHub", "Debugging", "Deployment Basics"],
    strength: 82,
  },
];

export const projects = [
  {
    id: "sajiloyatra",
    name: "SajiloYatra",
    repoName: "SajiloYatra",
    category: "Java",
    featured: true,
    type: "Travel bus booking management system",
    description:
      "A bus travel booking and management platform for routes, passenger bookings, operators, and travel administration.",
    stack: ["Java", "Backend APIs", "Booking Workflows"],
    impact: "Designed for route discovery, booking flow, and travel operations.",
    repo: "https://github.com/pra-neupane01/SajiloYatra",
    accent: "lime",
  },
  {
    id: "arthaflow",
    name: "ArthaFlow",
    repoName: "ArthaFlow",
    category: "Java",
    featured: true,
    type: "Advanced Java project",
    description:
      "A Java-based project focused on structured application logic, data movement, and reliable backend workflows.",
    stack: ["Java", "OOP", "Application Logic"],
    impact: "A stronger Java practice project for object modeling and workflow design.",
    repo: "https://github.com/pra-neupane01/ArthaFlow",
    accent: "cyan",
  },
  {
    id: "restaurant-app",
    name: "Restaurant-App",
    repoName: "Restaurant-App",
    category: "Node.js",
    featured: true,
    type: "Restaurant food ordering backend",
    description:
      "Node.js and Express API with PostgreSQL to manage menus, customer data, orders, and restaurant operations.",
    stack: ["Node.js", "Express", "PostgreSQL"],
    impact: "Connects menu browsing, order creation, and restaurant data management.",
    repo: "https://github.com/pra-neupane01/Restaurant-App",
    accent: "coral",
  },
  {
    id: "portfolio",
    name: "pralad-portfolio",
    repoName: "pralad-portfolio",
    category: "React",
    featured: false,
    type: "Personal portfolio",
    description:
      "A portfolio website built to showcase projects, certifications, contact details, and collaboration interests.",
    stack: ["React", "Firebase", "Responsive UI"],
    impact: "A living profile with project data, contact flow, and resume access.",
    repo: "https://github.com/pra-neupane01/pralad-portfolio",
    accent: "violet",
  },
];

export const certifications = [
  {
    title: "Backend Development Practice",
    issuer: "Project-based learning",
    status: "Add certificate link",
    detail:
      "Space reserved for certificates related to APIs, server-side development, databases, Java, and Node.js.",
    icon: Code2,
  },
  {
    title: "Database & API Fundamentals",
    issuer: "Academic / online certification",
    status: "Add credential",
    detail:
      "Use this card for PostgreSQL, Firebase, REST API, or database management certificates.",
    icon: Database,
  },
  {
    title: "Professional Growth",
    issuer: "Internship and workshops",
    status: "In progress",
    detail:
      "Highlight internship learnings, workshops, hackathons, or professional development certificates.",
    icon: Award,
  },
];

export const timeline = [
  {
    label: "Now",
    title: "Internship at Sitoula Tech Solutions",
    detail: "Working close to real software practices while sharpening backend development habits.",
  },
  {
    label: "College",
    title: "Itahari International College",
    detail: "Studying computing fundamentals and turning coursework into portfolio-ready work.",
  },
  {
    label: "Direction",
    title: "Backend opportunities in Nepal",
    detail: "Looking for teams where I can contribute to APIs, databases, and production systems.",
  },
];

export const services = [
  {
    title: "API Development",
    detail: "REST endpoints, controllers, validation, and data flow that is clear to maintain.",
    icon: Route,
  },
  {
    title: "Database-backed Apps",
    detail: "Practical schema thinking for orders, bookings, users, and business records.",
    icon: Database,
  },
  {
    title: "Reliable Collaboration",
    detail: "GitHub-first project habits, readable code, and clear communication.",
    icon: ShieldCheck,
  },
  {
    title: "Learning Momentum",
    detail: "Fast iteration across Java, Node.js, Firebase, and React interfaces.",
    icon: Sparkles,
  },
];

export const stats = [
  { label: "Followers", value: "15", icon: UsersRound },
  { label: "Focus", value: "Backend", icon: ServerCog },
  { label: "Location", value: "Nepal", icon: MapPin },
  { label: "Open", value: "Work", icon: Mail },
];
