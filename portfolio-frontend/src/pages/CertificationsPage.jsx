import { useMemo, useState } from "react";
import { Award, BadgeCheck, Clock3, ExternalLink, GraduationCap } from "lucide-react";
import { certifications, profile } from "../data/profile.js";

export default function CertificationsPage() {
  const [activeStatus, setActiveStatus] = useState("All");

  const statuses = useMemo(() => {
    return ["All", ...new Set(certifications.map((cert) => cert.status))];
  }, []);

  const visibleCertifications = useMemo(() => {
    return certifications.filter((cert) => activeStatus === "All" || cert.status === activeStatus);
  }, [activeStatus]);

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Certification studio</p>
        <h1>Learning proof, organized for verified credentials.</h1>
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
          <div className="cert-feature-stats">
            <span>
              <BadgeCheck size={18} />
              Credential slots
            </span>
            <strong>{certifications.length}</strong>
          </div>
        </div>

        <div className="cert-list">
          <div className="cert-filters" aria-label="Certification filters">
            <Clock3 size={18} />
            {statuses.map((status) => (
              <button
                key={status}
                className={activeStatus === status ? "active" : ""}
                type="button"
                onClick={() => setActiveStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>

          {visibleCertifications.map((cert) => {
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
