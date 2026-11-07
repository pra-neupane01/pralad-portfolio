import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailto = `mailto:praladneupane01@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
      setIsOpen(false);
    }, 2000);
  };

  return (
    <>
      <button
        className="chat-bubble-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close messenger' : 'Open messenger'}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '320px',
            maxWidth: 'calc(100vw - 40px)',
            background: 'var(--color-card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            zIndex: 60,
            overflow: 'hidden',
          }}
          role="dialog"
          aria-label="Contact form"
        >
          {/* Header */}
          <div
            style={{
              background: 'var(--color-primary)',
              color: '#fff',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <img
              src="/pralad-profile.jpeg"
              alt=""
              width={32}
              height={32}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
              loading="lazy"
            />
            <div>
              <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>Pralad Neupane</div>
              <div style={{ fontSize: 'var(--font-size-xs)', opacity: 0.85 }}>Usually replies within a day</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ padding: '14px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '24px 0', color: 'var(--color-success)', fontWeight: 600 }}>
                ✓ Opening email client...
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  aria-label="Your name"
                  style={{ marginBottom: '8px' }}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-label="Your email"
                  style={{ marginBottom: '8px' }}
                />
                <textarea
                  placeholder="Type a message..."
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-label="Your message"
                  style={{ marginBottom: '10px', resize: 'vertical' }}
                />
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'var(--color-primary)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: 'var(--font-size-sm)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'background var(--transition-fast)',
                  }}
                >
                  <Send size={16} /> Send Message
                </button>
              </>
            )}
          </form>
        </div>
      )}
    </>
  );
}
