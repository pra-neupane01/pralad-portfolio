import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const profile = {
  displayName: "Pralad Neupane",
  alternateName: "Prakash Neupane",
  brand: "Pralad.dev",
  title: "Backend Developer",
  headline: "Java, Spring Boot, Node.js, Express, PostgreSQL, MySQL and scalable API systems.",
  email: "neupaneprakash9999@gmail.com",
  location: "Morang / Itahari, Nepal",
  college: "Itahari International College",
  internship: "Sitoula Tech Solutions",
};

// Place your resume file inside public/resume.pdf.
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
    href: "mailto:neupaneprakash9999@gmail.com",
    icon: MdEmail,
  },
];
