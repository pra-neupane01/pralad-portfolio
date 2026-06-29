import { useMemo, useState } from "react";
import CertificateCard from "../components/CertificateCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { certificationCategories, certifications } from "../data/certifications.js";

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertifications = useMemo(() => {
    if (activeCategory === "All") return certifications;
    return certifications.filter((certificate) => certificate.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="page-container py-16 lg:py-24">
      <SectionTitle
        eyebrow="Certifications"
        title="A professional certificate wall ready for real credentials."
        description="These placeholders are editable in src/data/certifications.js when you add verified certificates."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        {certificationCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-xl border px-4 py-2 text-sm font-black transition ${
              activeCategory === category
                ? "border-cyan bg-cyan text-slate-950"
                : "border-line bg-white/[0.04] text-slate-300 hover:border-cyan/60 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredCertifications.map((certificate, index) => (
          <CertificateCard key={certificate.title} certificate={certificate} index={index} />
        ))}
      </div>

      <p className="mt-10 rounded-2xl border border-line bg-white/[0.04] p-5 text-center font-bold text-slate-300">
        More certifications will be added soon.
      </p>
    </section>
  );
}
