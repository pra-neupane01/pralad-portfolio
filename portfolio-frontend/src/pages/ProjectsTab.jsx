import { useState, useMemo } from 'react';
import PostCard from '../components/feed/PostCard';
import { projectsData } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

export default function ProjectsTab() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useScrollReveal([filtered]);

  return (
    <div>
      {/* Filter chips with touch targets */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '16px',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '24px',
              border: 'none',
              fontWeight: 600,
              fontSize: 'var(--font-size-sm)',
              cursor: 'pointer',
              minHeight: '44px',
              background: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-comment)',
              color: activeCategory === cat ? '#fff' : 'var(--color-text)',
              transition: 'background var(--transition-fast), color var(--transition-fast)',
            }}
            className="btn-press"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project posts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.map((project) => (
          <PostCard
            key={project.id}
            post={{
              id: `project-${project.id}`,
              title: project.title,
              description: project.description,
              techStack: project.techStack,
              category: project.category,
              highlight: project.highlight,
              githubUrl: project.githubUrl,
              date: project.period,
              period: project.period,
            }}
          />
        ))}
      </div>
    </div>
  );
}
