import { Mail, MapPin } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import ContactForm from '../components/contact/ContactForm';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socials';

export default function Contact() {
  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto">
      <SectionHeader 
        title="Contact" 
        subtitle="Let's build something great together."
      />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="terminal-card p-6 md:p-8">
            <h3 className="text-xl font-display font-semibold text-terminal-text mb-6">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-terminal-surfaceLight text-terminal-green rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-terminal-textMuted mb-1 uppercase tracking-wider">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-terminal-text hover:text-terminal-green transition-colors break-all">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-terminal-surfaceLight text-terminal-green rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-terminal-textMuted mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-terminal-text">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-terminal-border">
              <p className="text-xs font-mono text-terminal-textMuted mb-4 uppercase tracking-wider">Social Profiles</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  if (link.name === 'Email') return null;
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-terminal-surfaceLight border border-terminal-border rounded-lg text-sm text-terminal-textMuted hover:text-terminal-green hover:border-terminal-green/30 transition-all"
                    >
                      <Icon size={16} />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
