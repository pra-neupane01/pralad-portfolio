import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const profile = {
  displayName: "Pralad Neupane",
  alternateName: "Prakash Neupane",
  brand: "NEUPANE.CODE",
  title: "Java-focused Backend Developer",
  headline: "Java, Spring Boot, REST APIs, databases, clean code, OOP, and scalable backend systems.",
  email: "pra2026neupane@gmail.com",
  location: "Sundarharaicha / Itahari region, Nepal",
  college: "Itahari International College",
  degree: "BSc (Hons) Computing",
  university: "London Metropolitan University",
};

// Place your latest resume at public/resume.pdf.
export const resumePath = "/resume.pdf";

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/pra-neupane01",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pralad-neupane-435874392",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/praNeupane01",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/praka5h_n",
    icon: FaInstagram,
  },
  {
    label: "Email",
    href: "mailto:pra2026neupane@gmail.com",
    icon: MdEmail,
  },
];
