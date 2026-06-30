import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import GlassCard from './GlassCard';
import { sendContactEmail } from '@/utils/emailService';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await sendContactEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setErrorMsg('Failed to send message. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <GlassCard className="max-w-2xl">
      <h3 className="text-2xl font-bold font-display glow-text mb-6">Get in Touch</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder="Your message here..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 bg-accent hover:bg-accent-dark disabled:opacity-50 text-bg-primary font-bold rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
        >
          {status === 'loading' ? (
            <>Sending...</>
          ) : (
            <>
              <Send size={18} /> Send Message
            </>
          )}
        </motion.button>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
          >
            <CheckCircle size={20} />
            <span>Message sent successfully! I&apos;ll get back to you soon.</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
          >
            <AlertCircle size={20} />
            <span>{errorMsg}</span>
          </motion.div>
        )}
      </form>
    </GlassCard>
  );
}
