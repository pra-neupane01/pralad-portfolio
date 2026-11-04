import ScrapbookNav from '../components/scrapbook/ScrapbookNav';
import ScrapbookHero from '../components/scrapbook/ScrapbookHero';
import ScrapbookProjects from '../components/scrapbook/ScrapbookProjects';
import ScrapbookStory from '../components/scrapbook/ScrapbookStory';
import ScrapbookFooter from '../components/scrapbook/ScrapbookFooter';

export default function Home() {
  return (
    <div className="paper-bg min-h-screen text-[#29251F] font-dmsans relative selection:bg-[#C81016]/20 selection:text-[#C81016]">
      {/* Subtle full-page paper crease & grain overlay */}
      <div className="fixed inset-0 paper-crease-overlay pointer-events-none z-30" />

      {/* Top Scrapbook Navigation */}
      <ScrapbookNav />

      {/* Hero Section — Exact Poster & Collage Recreation */}
      <main>
        <ScrapbookHero />
        <ScrapbookProjects />
        <ScrapbookStory />
      </main>

      {/* Postcard Scrapbook Footer */}
      <ScrapbookFooter />
    </div>
  );
}
