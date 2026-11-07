import { useState } from 'react';
import { Send, MapPin, Mail as MailIcon, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

export default function ContactTab() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailto = `mailto:${profile.email}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="md:grid-cols-2">
      {/* Contact Form */}
      <div className="card" style={{ padding: '20px' }}>
        <h2
          style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 700,
            margin: '0 0 16px',
            color: 'var(--color-text)',
          }}
        >
          Send a Message
        </h2>

        {sent ? (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 16px',
              color: 'var(--color-success)',
              fontWeight: 600,
              fontSize: 'var(--font-size-lg)',
            }}
          >
            ✓ Opening your email client...
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label
                htmlFor="contact-name"
                style={{ display: 'block', fontWeight: 600, fontSize: 'var(--font-size-sm)', marginBottom: '4px', color: 'var(--color-text-secondary)' }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                style={{ display: 'block', fontWeight: 600, fontSize: 'var(--font-size-sm)', marginBottom: '4px', color: 'var(--color-text-secondary)' }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                style={{ display: 'block', fontWeight: 600, fontSize: 'var(--font-size-sm)', marginBottom: '4px', color: 'var(--color-text-secondary)' }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Type your message here..."
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ resize: 'vertical' }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '12px',
                background: 'var(--color-primary)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: 'var(--font-size-base)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background var(--transition-fast)',
                fontFamily: 'var(--font-family)',
              }}
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        )}
      </div>

      {/* Contact Info Card */}
      <div className="card" style={{ padding: '20px' }}>
        <h2
          style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 700,
            margin: '0 0 16px',
            color: 'var(--color-text)',
          }}
        >
          Contact Info
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ContactItem
            icon={MailIcon}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactItem
            icon={MapPin}
            label="Location"
            value={profile.location}
          />
          <ContactItem
            icon={Github}
            label="GitHub"
            value="github.com/pra-neupane01"
            href={profile.social.github}
            external
          />
          <ContactItem
            icon={Linkedin}
            label="LinkedIn"
            value="Pralad Neupane"
            href={profile.social.linkedin}
            external
          />
        </div>

        {/* Map placeholder */}
        <div
          style={{
            marginTop: '20px',
            padding: '40px 16px',
            background: 'var(--color-comment)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          📍 Itahari, Nepal
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href, external }) {
  const content = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--color-primary-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={18} style={{ color: 'var(--color-primary)' }} />
      </div>
      <div>
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
          {label}
        </div>
        <div style={{ fontSize: 'var(--font-size-sm)', color: href ? 'var(--color-primary)' : 'var(--color-text)' }}>
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={{ textDecoration: 'none' }}
      >
        {content}
      </a>
    );
  }

  return content;
}
