import SectionTitle from '@/components/SectionTitle';
import FallingBlocksGame from '@/components/FallingBlocksGame';

export default function Playground() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Playground" subtitle="A minimal challenge" />

        <div className="flex justify-center">
          <FallingBlocksGame />
        </div>
      </div>
    </main>
  );
}
