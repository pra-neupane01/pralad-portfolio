import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';

export default function ScrapbookFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full pt-16 pb-12 px-4 sm:px-8 max-w-7xl mx-auto border-t-2 border-dashed border-[#29251F]/15">
      {/* Postcard Container */}
      <div className="bg-[#FAF8F3] border border-[#29251F]/15 rounded-sm p-6 sm:p-10 shadow-paper relative">
        {/* Washi tape over top center */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 washi-tape-strip rotate-[1deg] z-20 pointer-events-none" />

        <div className="grid md:grid-cols-12 gap-8 items-center pb-8 border-b border-[#29251F]/10">
          {/* Left: Vintage Postal Mark & Monogram (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              {/* Circular postmark stamp */}
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#C81016] flex flex-col items-center justify-center rotate-[-8deg] p-1 select-none">
                <span className="font-typewriter text-[8px] font-bold text-[#C81016] leading-none uppercase">
                  NEPAL
                </span>
                <span className="font-serif font-black text-xs text-[#C81016] leading-tight">
                  ITAHARI
                </span>
                <span className="font-typewriter text-[7px] text-[#C81016] leading-none">
                  2026
                </span>
              </div>

              <div>
                <h4 className="font-serif font-black text-xl text-[#29251F]">
                  Pralad Neupane
                </h4>
                <p className="font-handwriting text-sm sm:text-base text-[#29251F]/70">
                  Developer, Learner &amp; Explorer.
                </p>
              </div>
            </div>

            <p className="font-dmsans text-xs sm:text-sm text-[#29251F]/70 max-w-md">
              Always open to discussing AI/ML projects, backend architecture, open-source ideas, or interesting technical collaborations.
            </p>
          </div>

          {/* Right: Quick Links & Postal Stamp (6 cols) */}
          <div className="md:col-span-6 flex flex-col sm:flex-row sm:items-center justify-between md:justify-end gap-6">
            {/* Quick Links */}
            <div className="flex flex-col space-y-1.5 font-dmsans text-xs tracking-wider uppercase font-semibold text-[#29251F]/75">
              <NavLink to="/" className="hover:text-[#C81016] transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="hover:text-[#C81016] transition-colors">
                About
              </NavLink>
              <NavLink to="/projects" className="hover:text-[#C81016] transition-colors">
                Projects
              </NavLink>
              <NavLink to="/journey" className="hover:text-[#C81016] transition-colors">
                Journey &amp; Awards
              </NavLink>
              <NavLink to="/contact" className="hover:text-[#C81016] transition-colors">
                Contact
              </NavLink>
            </div>

            {/* Faux Postage Stamp */}
            <div className="w-24 h-28 bg-[#F4EBDD] border-2 border-dashed border-[#C81016] rounded-xs p-2 flex flex-col justify-between items-center text-center rotate-[4deg] shadow-sm select-none">
              <span className="font-typewriter text-[8px] text-[#C81016] uppercase tracking-widest font-bold">
                POSTAGE
              </span>
              <div className="w-10 h-10 rounded-full bg-[#C81016]/10 flex items-center justify-center font-serif font-black text-[#C81016] text-sm">
                PN
              </div>
              <span className="font-typewriter text-[8px] text-[#29251F]/70 uppercase">
                Airmail
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-typewriter text-[#29251F]/70">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C81016] transition-colors flex items-center gap-1"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C81016] transition-colors flex items-center gap-1"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#C81016] transition-colors flex items-center gap-1"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-handwriting text-sm text-[#29251F]/70">
              handcrafted scrapbook edition
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-1.5 bg-[#F4EBDD] border border-[#29251F]/20 rounded-xs hover:border-[#C81016] hover:text-[#C81016] text-[#29251F] transition-colors"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
