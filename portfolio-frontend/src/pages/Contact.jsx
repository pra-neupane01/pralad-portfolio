import { Mail, MapPin } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import ContactForm from '../components/contact/ContactForm';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socials';

export default function Contact() {
  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto space-y-10">
      <SectionHeader 
        title="Contact Me" 
        subtitle="Get in touch for engineering roles, technical inquiries, or project discussions."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Info Sidebar — 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          <div className="obsidian-card p-6 md:p-8 space-y-6">
            <h3 className="text-xl font-display font-bold text-slate-100">
              Direct Contact
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-sm font-sans font-semibold text-slate-200 hover:text-emerald-400 transition-colors break-all">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-sm font-sans font-semibold text-slate-200">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Professional Links</p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => {
                  if (link.name === 'Email') return null;
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-[#060911] border border-white/[0.08] rounded-xl text-xs font-medium text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                    >
                      <Icon size={14} />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form — 3 cols */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

