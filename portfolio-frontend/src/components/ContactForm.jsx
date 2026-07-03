import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import ModernCard from './ModernCard';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

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
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error:', error);
      setErrorMsg('Failed to send. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <ModernCard className="max-w-2xl">
      <h3 className="text-2xl font-display font-bold text-text-light mb-8">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-mono text-text-accent mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-mono text-text-accent mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-mono text-text-accent mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Your message..."
            className="w-full resize-none"
          />
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ backgroundColor: '#4fb3a3' }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 bg-accent-primary hover:bg-accent-light text-dark-bg font-semibold rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>Sending...</>
          ) : (
            <>
              <Send size={18} /> Send
            </>
          )}
        </motion.button>

        {/* Status */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 p-4 bg-accent-primary/10 border border-accent-primary rounded-lg text-accent-primary"
          >
            <CheckCircle size={20} />
            <span className="text-sm">Message sent! I'll get back soon.</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500"
          >
            <AlertCircle size={20} />
            <span className="text-sm">{errorMsg}</span>
          </motion.div>
        )}
      </form>
    </ModernCard>
  );
}
