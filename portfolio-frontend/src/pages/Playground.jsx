import GameBox from "../components/GameBox.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Playground() {
  return (
    <section className="page-container py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Playground"
            title="A small interactive corner inside the portfolio."
            description="The portfolio is not only a static profile. This page includes a compact falling-block survival game built directly in React."
          />
          <div className="mt-8 rounded-3xl border border-line bg-slate-950/55 p-5">
            <p className="mono text-xs font-black uppercase tracking-[0.2em] text-cyan">
              controls
            </p>
            <p className="mt-3 leading-7 text-slate-300">
              Use left/right arrow keys or A/D on desktop. On mobile, hold the left or right buttons.
              The score increases while you survive, and the blocks become faster over time.
            </p>
          </div>
        </div>

        <GameBox />
      </div>
    </section>
  );
}
