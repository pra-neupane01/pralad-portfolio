import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  ServerCog,
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
  image: "/pralad-profile.jpeg",
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
    value: "APIs, auth, databases, and system logic",
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
    value: "Collaboration, internships, and project ideas",
    icon: Network,
  },
];

export const skills = [
  "Java",
  "Node.js",
  "Express",
  "Spring Boot",
  "PostgreSQL",
  "Firebase",
  "REST APIs",
  "React",
  "Git",
  "System Design Basics",
];

export const projects = [
  {
    name: "SajiloYatra",
    type: "Travel bus booking management system",
    description:
      "A bus travel booking and management platform for routes, passenger bookings, operators, and travel administration.",
    stack: ["Java", "Backend APIs", "Booking Workflows"],
    repo: "https://github.com/pra-neupane01/SajiloYatra",
    accent: "green",
  },
  {
    name: "ArthaFlow",
    type: "Advanced Java project",
    description:
      "A Java-based project focused on structured application logic, data movement, and reliable backend workflows.",
    stack: ["Java", "OOP", "Application Logic"],
    repo: "https://github.com/pra-neupane01/ArthaFlow",
    accent: "blue",
  },
  {
    name: "Restaurant-App",
    type: "Restaurant food ordering backend",
    description:
      "Node.js and Express API with PostgreSQL to manage menus, customer data, orders, and restaurant operations.",
    stack: ["Node.js", "Express", "PostgreSQL"],
    repo: "https://github.com/pra-neupane01/Restaurant-App",
    accent: "orange",
  },
  {
    name: "pralad-portfolio",
    type: "Personal portfolio",
    description:
      "A portfolio website built to showcase projects, certifications, contact details, and collaboration interests.",
    stack: ["React", "Firebase", "Responsive UI"],
    repo: "https://github.com/pra-neupane01/pralad-portfolio",
    accent: "purple",
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

export const stats = [
  { label: "Followers", value: "15", icon: UsersRound },
  { label: "Focus", value: "Backend", icon: ServerCog },
  { label: "Location", value: "Nepal", icon: MapPin },
  { label: "Open", value: "Work", icon: Mail },
];
