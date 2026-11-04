import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

export default function ScrapbookHero() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden select-none">
      {/* Paper Fold Crease Overlay (Simulating the authentic diagonal crease from the reference) */}
      <div className="absolute inset-0 paper-crease-overlay z-0 pointer-events-none" />

      {/* Faint Ghosted Cursive Script in Paper Fiber (just like reference) */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='150' viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='40' font-family='serif' font-style='italic' font-size='22' fill='%2329251F'%3Efield notes & thoughts%3C/text%3E%3Ctext x='30' y='80' font-family='serif' font-style='italic' font-size='18' fill='%2329251F'%3Ecuriosity and learning%3C/text%3E%3Ctext x='15' y='120' font-family='serif' font-style='italic' font-size='20' fill='%2329251F'%3Ebuild scalable systems%3C/text%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* ================= TOP METADATA ROW ================= */}
      <div className="relative z-10 flex items-start justify-between w-full pt-2">
        {/* Top-Left: Identity label & Location badge */}
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF8F3] border border-[#29251F]/15 rounded-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#263B2A] animate-pulse" />
            <span className="font-typewriter text-[10px] sm:text-xs tracking-wider text-[#263B2A] font-bold uppercase">
              DEVELOPER • LEARNER • EXPLORER
            </span>
          </div>

          <div className="flex items-center gap-1 text-[#29251F]/70 font-handwriting text-base sm:text-lg pl-1">
            <MapPin size={14} className="text-[#C81016]" />
            <span>Itahari, Nepal</span>
          </div>
        </div>

        {/* Top-Right: Stamped Handle (Matching @REALLYGREATSITE in reference) */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-end"
        >
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 font-typewriter font-bold text-xs sm:text-sm tracking-widest text-[#C81016] uppercase hover:opacity-80 transition-opacity"
          >
            <span>@pra-neupane01</span>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <span className="font-handwriting text-[#29251F]/60 text-sm hidden sm:block">
            github &amp; project journal
          </span>
        </motion.div>
      </div>

      {/* ================= MAIN HERO CANVAS ================= */}
      {/* Center Poster Composition: Giant "Pralad" + Center Cutout + 2 Polaroids */}
      <div className="relative z-10 w-full flex-grow flex items-center justify-center my-6 sm:my-10 min-h-[460px] sm:min-h-[540px] md:min-h-[600px]">
        
        {/* 1. GIANT HANDWRITTEN NAME: "Pralad" (dominant typography spanning the screen) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10"
        >
          <h1 
            className="font-marker text-[#C81016] text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[15vw] leading-[0.82] tracking-tight text-center drop-shadow-[0_4px_8px_rgba(200,16,22,0.15)]"
            style={{
              textShadow: '2px 3px 0px rgba(163, 12, 17, 0.12), -1px -1px 0px rgba(255, 255, 255, 0.4)',
            }}
          >
            Pralad
          </h1>
        </motion.div>

        {/* 2. TORN NOTEBOOK PAPER SCRAP (Behind lower half of Pralad cutout) */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute bottom-4 sm:bottom-8 md:bottom-12 w-[220px] sm:w-[280px] md:w-[340px] h-[140px] sm:h-[170px] md:h-[190px] notebook-scrap notebook-torn-edges z-15 pointer-events-none"
        >
          {/* Subtle red margin rule on left of ruled paper */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-[1.5px] bg-[#C81016]/30" />
          
          {/* Handwritten memo scribbled on the notebook scrap */}
          <div className="pt-6 pl-10 sm:pl-12 pr-4 text-[#29251F]/80 font-handwriting text-base sm:text-lg leading-[24px]">
            <p>building software &amp;</p>
            <p>exploring AI systems...</p>
            <p className="text-[#C81016]/90 font-bold">continuous learner ★</p>
          </div>
        </motion.div>

        {/* 3. CENTER PERSONAL CUTOUT PHOTOGRAPH (Pralad Neupane with clean white sticker outline) */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-25 flex items-end justify-center pointer-events-auto"
        >
          <div className="relative w-[210px] sm:w-[270px] md:w-[330px] lg:w-[370px] filter drop-shadow-[0_18px_32px_rgba(41,37,31,0.28)]">
            <img
              src="/pralad-cutout.png"
              alt="Pralad Neupane"
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* 4. POLAROID 1 (TOP-LEFT): Personal casual snapshot with masking tape */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ rotate: -2, scale: 1.04, zIndex: 35 }}
          className="absolute -top-3 sm:top-2 left-0 sm:left-4 md:left-8 lg:left-12 z-20"
        >
          <div className="polaroid-card p-2 sm:p-2.5 pb-6 sm:pb-8 w-[130px] sm:w-[170px] md:w-[195px] rounded-xs relative">
            {/* Washi Tape Strip 1 (Angled over top edge) */}
            <div className="absolute -top-3 left-6 sm:left-10 w-14 sm:w-18 h-5 sm:h-6 washi-tape-strip rotate-[-4deg] z-30" />
            
            {/* Washi Tape Strip 2 (Tilted on left corner) */}
            <div className="absolute top-10 -left-4 w-12 sm:w-14 h-4 sm:h-5 washi-tape-strip rotate-[55deg] z-30 opacity-75" />

            {/* Photo frame */}
            <div className="w-full aspect-square bg-[#E9DDC8] overflow-hidden border border-[#29251F]/10">
              <img
                src="/pralad-profile.jpeg"
                alt="Pralad Neupane snapshot"
                className="w-full h-full object-cover object-[center_35%] filter contrast-[1.05] brightness-[0.98]"
              />
            </div>

            {/* Polaroid caption */}
            <div className="mt-2 text-center">
              <p className="font-handwriting text-xs sm:text-sm text-[#29251F] font-bold">
                coffee &amp; code ☕
              </p>
              <p className="font-typewriter text-[9px] text-[#29251F]/60">
                Itahari · 2025
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5. POLAROID 2 (LOWER-RIGHT): Hackathon Winner Certificate with masking tape */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          whileHover={{ rotate: 2, scale: 1.04, zIndex: 35 }}
          className="absolute -bottom-2 sm:bottom-4 right-0 sm:right-4 md:right-8 lg:right-12 z-20"
        >
          <div className="polaroid-card p-2 sm:p-2.5 pb-6 sm:pb-8 w-[135px] sm:w-[175px] md:w-[205px] rounded-xs relative">
            {/* Washi Tape Strip 1 (Over top-right corner) */}
            <div className="absolute -top-3.5 right-6 sm:right-8 w-16 sm:w-20 h-5 sm:h-6 washi-tape-strip rotate-[8deg] z-30" />
            
            {/* Washi Tape Strip 2 (Over bottom edge) */}
            <div className="absolute -bottom-2.5 left-6 w-14 h-4 washi-tape-strip rotate-[-3deg] z-30 opacity-70" />

            {/* Certificate snapshot */}
            <div className="w-full aspect-square bg-[#E9DDC8] overflow-hidden border border-[#29251F]/10">
              <img
                src="/awards/Hackathon Winner Certificate.png"
                alt="IdeaX Hackathon Winner 2026 Certificate"
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
              />
            </div>

            {/* Polaroid caption */}
            <div className="mt-2 text-center">
              <p className="font-handwriting text-xs sm:text-sm text-[#C81016] font-bold">
                IdeaX Winner '26 ★
              </p>
              <p className="font-typewriter text-[9px] text-[#29251F]/60">
                Grand Winner Award
              </p>
            </div>
          </div>
        </motion.div>

        {/* 6. HANDWRITTEN ANNOTATION & DOODLE ARROW (Left of cutout) */}
        <div className="hidden lg:block absolute left-36 bottom-24 z-20 max-w-[180px] pointer-events-none">
          <p className="font-handwriting text-[#29251F] text-lg leading-tight rotate-[-4deg]">
            BSc (Hons) Computing student @ London Met
          </p>
          {/* Hand-drawn SVG arrow pointing toward Pralad */}
          <svg className="w-16 h-8 text-[#C81016] mt-1 ml-6 rotate-[-10deg]" viewBox="0 0 70 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M 5,20 Q 35,5 60,18" />
            <path d="M 50,14 L 60,18 L 52,24" />
          </svg>
        </div>

        {/* 7. HANDWRITTEN ANNOTATION & DOODLE ARROW (Right of cutout) */}
        <div className="hidden lg:block absolute right-36 top-16 z-20 max-w-[180px] pointer-events-none">
          <p className="font-handwriting text-[#263B2A] text-lg leading-tight rotate-[3deg] font-bold">
            Python · TensorFlow · Java Spring Boot
          </p>
          <svg className="w-16 h-8 text-[#263B2A] mt-1 mr-4 rotate-[15deg]" viewBox="0 0 70 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M 60,10 Q 30,25 8,14" />
            <path d="M 18,8 L 8,14 L 16,22" />
          </svg>
        </div>

      </div>

      {/* ================= BOTTOM CONTENT & METADATA ROW ================= */}
      <div className="relative z-10 w-full pt-4 border-t border-[#29251F]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Bottom-Left: Stamped Name (Matching KORINA VILLANUEVA in reference) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif font-black text-sm sm:text-base tracking-[0.25em] text-[#C81016] uppercase">
            PRALAD NEUPANE
          </span>
          <p className="font-dmsans text-xs sm:text-sm text-[#29251F]/80 max-w-md mt-0.5">
            Computing student passionate about building meaningful software, exploring technology, and continuously learning new things.
          </p>
        </div>

        {/* Center/Right: Vintage Ink Badges & Links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* GitHub Stamp */}
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F3] border border-[#29251F]/20 rounded-sm shadow-sm hover:border-[#C81016] hover:text-[#C81016] text-[#29251F] text-xs font-typewriter font-semibold transition-all hover:-translate-y-0.5"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>

          {/* LinkedIn Stamp */}
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F3] border border-[#29251F]/20 rounded-sm shadow-sm hover:border-[#C81016] hover:text-[#C81016] text-[#29251F] text-xs font-typewriter font-semibold transition-all hover:-translate-y-0.5"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>

          {/* Email Stamp */}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F3] border border-[#29251F]/20 rounded-sm shadow-sm hover:border-[#C81016] hover:text-[#C81016] text-[#29251F] text-xs font-typewriter font-semibold transition-all hover:-translate-y-0.5"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>

          {/* Down to Projects Button */}
          <a
            href="#projects"
            className="flex items-center gap-1 px-3 py-1.5 bg-[#C81016] text-white rounded-sm shadow-sm text-xs font-typewriter font-bold tracking-wider hover:bg-[#A30C11] transition-all hover:-translate-y-0.5"
          >
            <span>FIELD NOTES</span>
            <ArrowDown size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
