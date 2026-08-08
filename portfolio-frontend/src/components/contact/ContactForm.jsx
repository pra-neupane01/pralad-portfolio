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
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email directly.');
    }
  };

  return (
    <div className="obsidian-card p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-display font-bold text-slate-100 mb-1">
          Send a Message
        </h3>
        <p className="text-xs text-slate-400">
          Have an inquiry, project proposal, or collaboration idea? Send me a quick note!
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex flex-col items-center text-center">
          <CheckCircle className="text-emerald-400 w-10 h-10 mb-3 shadow-emerald-glow" />
          <h4 className="text-slate-100 font-sans font-bold mb-1">Message Received</h4>
          <p className="text-slate-400 text-xs">Thank you for reaching out. I'll get back to you shortly.</p>
          <Button 
            variant="secondary" 
            className="mt-5 text-xs py-2"
            onClick={() => setStatus('idle')}
          >
            Send Another
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-start gap-2.5">
              <AlertCircle className="text-rose-400 w-4 h-4 shrink-0 mt-0.5" />
              <p className="text-rose-300 text-xs">{errorMessage}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Name <span className="text-emerald-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full text-sm"
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Email <span className="text-emerald-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full text-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="subject" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Backend Role Inquiry"
              className="w-full text-sm"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Message <span className="text-emerald-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Pralad, I'd like to discuss..."
              rows={4}
              className="w-full text-sm resize-none"
              required
            />
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full py-3"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full"></span>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send size={15} /> Send Message
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

