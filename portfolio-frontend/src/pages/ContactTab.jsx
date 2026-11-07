import { useState } from 'react';
import { Send, MapPin, Mail as MailIcon, Github, Linkedin, MessageSquare } from 'lucide-react';
import { profile } from '../data/profile';
import { useToast } from '../context/ToastContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactTab() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailto = `mailto:${profile.email}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.open(mailto, '_blank');
    setSent(true);
    showToast('Opening email client...');
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  useScrollReveal([]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="md:grid-cols-2">
      {/* Contact Form Card */}
      <div className="card reveal-init" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <MessageSquare size={22} style={{ color: 'var(--color-primary)' }} />
          <h2
            style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 700,
              margin: 0,
              color: 'var(--color-text)',
            }}
          >
            Send a Direct Message
          </h2>
        </div>

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
            ✓ Opening your default email client...
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label
                htmlFor="contact-name"
                style={{ display: 'block', fontWeight: 600, fontSize: 'var(--font-size-sm)', marginBottom: '6px', color: 'var(--color-text-secondary)' }}
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="e.g. John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ minHeight: '44px' }}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                style={{ display: 'block', fontWeight: 600, fontSize: 'var(--font-size-sm)', marginBottom: '6px', color: 'var(--color-text-secondary)' }}
              >
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ minHeight: '44px' }}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                style={{ display: 'block', fontWeight: 600, fontSize: 'var(--font-size-sm)', marginBottom: '6px', color: 'var(--color-text-secondary)' }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Write your thoughts or project inquiries here..."
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
                minHeight: '44px',
              }}
              className="btn-press"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        )}
      </div>

      {/* Contact Info & Location Card */}
      <div className="card reveal-init" style={{ padding: '24px' }}>
        <h2
          style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 700,
            margin: '0 0 18px',
            color: 'var(--color-text)',
          }}
        >
          Contact Details
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
            value="linkedin.com/in/pralad-neupane"
            href={profile.social.linkedin}
            external
          />
        </div>

        {/* Location Banner */}
        <div
          style={{
            marginTop: '24px',
            padding: '24px 16px',
            background: 'var(--color-comment)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--font-size-sm)',
            border: '1px solid var(--color-border-light)',
          }}
        >
          <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>📍</div>
          <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>Itahari, Nepal</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: '4px' }}>
            Open to remote backend roles and collaborative software engineering projects.
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href, external }) {
  const content = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <div
        style={{
          width: '42px',
          height: '42px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--color-primary-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={19} style={{ color: 'var(--color-primary)' }} />
      </div>
      <div>
        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
          {label}
        </div>
        <div style={{ fontSize: 'var(--font-size-sm)', color: href ? 'var(--color-primary)' : 'var(--color-text)', marginTop: '2px' }}>
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
        className="btn-press"
      >
        {content}
      </a>
    );
  }

  return content;
}
