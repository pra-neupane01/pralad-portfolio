import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { certifications, profile } from "../data/profile.js";

export default function CertificationsPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Certifications</p>
        <h1>Proof of learning, practice, and professional growth.</h1>
        <p>
          This page is ready for verified certificate links, internship
          achievements, workshops, and academic credentials as you collect them.
        </p>
      </div>

      <div className="cert-layout">
        <div className="cert-feature">
          <GraduationCap size={34} />
          <h2>{profile.college}</h2>
          <p>
            Current academic home for software development fundamentals,
            project work, and technical growth.
          </p>
        </div>

        <div className="cert-list">
          {certifications.map((cert) => {
            const Icon = cert.icon || Award;
            return (
              <article className="cert-card" key={cert.title}>
                <Icon size={24} />
                <div>
                  <span>{cert.issuer}</span>
                  <h3>{cert.title}</h3>
                  <p>{cert.detail}</p>
                  <button className="text-link" type="button">
                    <ExternalLink size={16} />
                    {cert.status}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
