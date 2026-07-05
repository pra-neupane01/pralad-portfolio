# Pralad Neupane — Portfolio Website

A production-ready, terminal-inspired professional portfolio for Pralad Neupane, a Java Backend Developer. Built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

[https://praladneupane.com.np](https://praladneupane.com.np) *(Replace with actual URL when deployed)*

## ✨ Features

- **Terminal-Inspired Design**: Custom dark theme (black + `#00FF41` green) tailored for a developer aesthetic.
- **10 Pages**: Comprehensive navigation including Home, About, Skills, Projects, Education, Experience, Services, Contact, Resume, and 404.
- **Responsive & Accessible**: Fully responsive on mobile, tablet, and desktop with a mobile slide-out menu.
- **Dark/Light Mode**: Persisted theme toggle (defaults to dark mode).
- **Smooth Animations**: Page transitions, typing effects, and hover interactions powered by Framer Motion.
- **Contact Form**: Frontend validation built-in (ready for EmailJS/Formspree integration).
- **SEO Optimized**: Pre-configured meta tags, Open Graph, and semantic HTML structure.

## 🛠️ Tech Stack

- **Framework**: [React.js](https://react.dev/) (Vite)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: Configured for [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
src/
├── components/
│   ├── common/         # Navbar, Footer, Buttons, ThemeToggle, etc.
│   ├── contact/        # Contact form component
│   ├── home/           # Hero section, Terminal card
│   ├── projects/       # Project cards
│   └── skills/         # Skill cards
├── data/               # Local JSON-like data for the site content
│   ├── education.js
│   ├── experience.js
│   ├── profile.js
│   ├── projects.js     # Verified from GitHub
│   ├── services.js
│   ├── skills.js
│   └── socials.js
├── layouts/            # MainLayout wrapper for page transitions
├── pages/              # 10 route pages
├── routes/             # AppRoutes mapping
├── utils/              # Constants (site metadata)
├── App.jsx             # App entry
├── index.css           # Terminal theme CSS utilities
└── main.jsx            # React DOM render
```

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pra-neupane01/portfolio-pralad.git
   cd portfolio-pralad/portfolio-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## 📦 Build & Deployment

This project is optimized for deployment on Vercel.

1. **Test the production build locally:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Deploying to Vercel:**
   - Connect your GitHub repository to Vercel.
   - Vercel will automatically detect Vite and use `npm run build`.
   - The included `vercel.json` ensures React Router SPA routing works correctly.

## 📝 Customization Guide

Before pushing to production, update the following:

1. **Resume File**: Place your actual `resume.pdf` inside the `public/` folder (replacing the placeholder).
2. **Email Form**: Integrate the `ContactForm.jsx` with an email service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).
3. **Custom Domain (.com.np)**: Once registered, add the domain to Vercel settings and update the `SITE.url` in `src/utils/constants.js`. Update `og:url` and `canonical` in `index.html`.
4. **Profile Photo**: If you wish to use a photo in the sidebar, update the placeholder in `src/pages/About.jsx`.

---
*Built with ❤️ in Itahari, Nepal.*
