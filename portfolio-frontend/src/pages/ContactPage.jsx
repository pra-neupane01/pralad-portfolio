import { useState } from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
} from "lucide-react";
import { profile } from "../data/profile.js";
import { isFirebaseReady, saveContactMessage } from "../services/firebase.js";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=87.20%2C26.35%2C87.55%2C26.75&layer=mapnik&marker=26.65%2C87.35`;

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    if (!isFirebaseReady) {
      const subject = encodeURIComponent(form.subject || "Portfolio collaboration");
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({
        type: "info",
        message: "Firebase is not configured locally, so your email app is opening instead.",
      });
      return;
    }

    try {
      await saveContactMessage(form);
      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Message sent. Thank you for reaching out.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Message could not be saved. Please email me directly.",
      });
    }
  };

  return (
    <section className="page-section contact-page">
      <div className="page-heading">
        <p className="eyebrow">Contact</p>
        <h1>Let's collaborate, learn, and build something useful.</h1>
        <p>
          I am interested in networking with developers, teams, founders, and
          mentors around backend development, internships, and product ideas.
        </p>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-title">
            <MessageSquareText size={24} />
            <h2>Send a message</h2>
          </div>

          <label>
            Name
            <input name="name" value={form.name} onChange={updateForm} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={updateForm} required />
          </label>
          <label>
            Subject
            <input name="subject" value={form.subject} onChange={updateForm} required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={updateForm} rows="6" required />
          </label>

          <button className="button solid" type="submit" disabled={status.type === "loading"}>
            <Send size={18} />
            Send message
          </button>
          {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
        </form>

        <aside className="contact-side">
          <div className="contact-card">
            <Mail size={22} />
            <div>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
          <div className="contact-card">
            <MapPin size={22} />
            <div>
              <span>Home location</span>
              <strong>{profile.location}</strong>
            </div>
          </div>

          <div className="network-panel">
            <h2>Networking</h2>
            <p>
              Open to backend projects, Java and Node.js conversations,
              internship learning, and collaboration with teams in Nepal.
            </p>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
                <Github size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={profile.facebook} target="_blank" rel="noreferrer" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" title="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="map-wrap">
            <iframe
              title="Map showing Morang, Nepal"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
