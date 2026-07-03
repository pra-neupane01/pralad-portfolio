import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import FloatingCard from './FloatingCard';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'pra2026neupane@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setErrorMsg('Transmission failed. Please try again or email directly.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const inputBase =
    'w-full px-4 py-3 bg-space-dark/60 rounded-lg text-text-light placeholder-text-muted/50 focus:outline-none transition-all duration-300 font-mono text-sm';

  return (
    <FloatingCard glow="cyan" className="border border-neon-cyan/30">
      <h3 className="text-2xl font-bold font-display neon-text mb-2">Let's Talk</h3>
      <p className="text-text-muted text-sm font-body mb-6">Send a message into the cosmos…</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-mono text-neon-cyan mb-2 uppercase tracking-wider">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${inputBase} border border-neon-cyan/20 focus:border-neon-cyan focus:shadow-neon-cyan`}
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-mono text-neon-pink mb-2 uppercase tracking-wider">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`${inputBase} border border-neon-pink/20 focus:border-neon-pink`}
            placeholder="john@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-mono text-neon-purple mb-2 uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className={`${inputBase} border border-neon-purple/20 focus:border-neon-purple resize-none`}
            placeholder="Your message…"
          />
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'loading'}
          id="contact-submit"
          className="w-full py-3 rounded-lg font-bold font-mono flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
          style={{
            background: 'linear-gradient(90deg, #00f5ff, #ff006e)',
            color: '#0a0e27',
            boxShadow: '0 0 20px rgba(0,245,255,0.3)',
          }}
        >
          {status === 'loading' ? (
            <>
              <Loader size={18} className="animate-spin" /> Transmitting…
            </>
          ) : (
            <>
              <Send size={18} /> Launch Message
            </>
          )}
        </motion.button>

        {/* Status messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 rounded-lg border border-neon-green/50 bg-neon-green/10 text-neon-green"
          >
            <CheckCircle size={18} />
            <span className="font-mono text-sm">Message received! I'll get back to you soon.</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 rounded-lg border border-neon-pink/50 bg-neon-pink/10 text-neon-pink"
          >
            <AlertCircle size={18} />
            <span className="font-mono text-sm">{errorMsg}</span>
          </motion.div>
        )}
      </form>
    </FloatingCard>
  );
}
