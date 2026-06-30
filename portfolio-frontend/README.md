# Pralad Neupane — Portfolio Website

A modern, animated glassmorphism-themed personal portfolio showcasing backend expertise and full-stack projects.

**Live:** [pralad-portfolio.vercel.app](https://pralad-portfolio.vercel.app)

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS + Framer Motion
- **Hosting:** Vercel
- **Contact:** EmailJS (serverless)
- **Map:** React Leaflet + OpenStreetMap

## Local Development

### Prerequisites

- Node.js 20.x LTS
- npm 10.x
- Git

### Setup

1. **Clone repo:**

   ```bash
   git clone https://github.com/pra-neupane01/pralad-portfolio.git
   cd pralad-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env.local`** (copy from `.env.example` and fill in values):

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run dev server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173)

5. **Build for production:**

   ```bash
   npm run build
   npm run preview
   ```

## EmailJS Setup

1. Go to https://www.emailjs.com
2. Sign up (free tier)
3. Create a Service (Gmail recommended)
4. Create Email Template with placeholders: `{{name}}`, `{{email}}`, `{{message}}`
5. Copy Service ID, Template ID, and Public Key → `.env.local`

## Deployment

Automatically deployed to Vercel on every push to `main` branch.

### Manual Deploy

```bash
npm run build
vercel
```

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/          # Route pages
├── data/           # Profile, projects, skills data
├── utils/          # Helpers and constants
├── hooks/          # Custom React hooks
└── index.css       # Global styles
```

## Features

- Glassmorphism design with animated gradient background
- Fully responsive (mobile-first)
- Falling Blocks mini-game on Playground page
- Contact form with EmailJS
- Location map with React Leaflet
- Smooth scroll animations (Framer Motion)
- Resume download
- Social links (GitHub, LinkedIn, etc.)

## Assets to Add

Place these files in `public/`:

- `profile-pic.jpg` — your profile photo
- `resume.pdf` — downloadable resume
- `favicon.ico` — site favicon
- `og-image.png` — Open Graph social share image

## License

MIT © Pralad Neupane
