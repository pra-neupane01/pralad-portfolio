import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    // Simulate API call for now
    // TODO: Integrate with Formspree, EmailJS, or custom backend
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <div className="terminal-card p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-xl font-display font-semibold text-terminal-text dark:text-terminal-text mb-2">
          Send a Message
        </h3>
        <p className="text-sm text-terminal-textMuted dark:text-terminal-textMuted">
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-6 bg-terminal-green/10 border border-terminal-green/30 rounded-lg flex flex-col items-center text-center">
          <CheckCircle className="text-terminal-green w-12 h-12 mb-3" />
          <h4 className="text-terminal-green font-mono font-semibold mb-2">Message Sent Successfully!</h4>
          <p className="text-terminal-textMuted text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <Button 
            variant="outline" 
            className="mt-6"
            onClick={() => setStatus('idle')}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {status === 'error' && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-red-500/90 text-sm">{errorMessage}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-mono text-terminal-textMuted dark:text-terminal-textMuted">
                NAME <span className="text-terminal-green">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-mono text-terminal-textMuted dark:text-terminal-textMuted">
                EMAIL <span className="text-terminal-green">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-mono text-terminal-textMuted dark:text-terminal-textMuted">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              className="w-full"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-mono text-terminal-textMuted dark:text-terminal-textMuted">
              MESSAGE <span className="text-terminal-green">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hello, I'd like to talk about..."
              rows={5}
              className="w-full resize-none"
              required
            />
          </div>

          <Button 
            type="submit" 
            variant="solid" 
            className="w-full"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin w-4 h-4 border-2 border-terminal-bg border-t-transparent rounded-full"></span>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send size={16} /> Send Message
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
