import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FolderGit2, Code, FileText, User, Mail, Moon, Sun, X, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { skillCategories } from '../../data/skills';
import { profile } from '../../data/profile';

export default function CommandPalette({ isOpen, onClose, onToggleTheme, isDark }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Aggregate items
  const allItems = [
    // Navigation
    { id: 'nav-home', title: 'Feed / Posts', category: 'Navigation', icon: User, action: () => navigate('/') },
    { id: 'nav-about', title: 'About & Career', category: 'Navigation', icon: User, action: () => navigate('/about') },
    { id: 'nav-projects', title: 'All Projects', category: 'Navigation', icon: FolderGit2, action: () => navigate('/projects') },
    { id: 'nav-photos', title: 'Certificates & Awards Gallery', category: 'Navigation', icon: FileText, action: () => navigate('/photos') },
    { id: 'nav-contact', title: 'Contact Me', category: 'Navigation', icon: Mail, action: () => navigate('/contact') },
    // Actions
    { id: 'act-resume', title: 'Download Resume (PDF)', category: 'Action', icon: FileText, action: () => window.open(profile.resumePath || '/resume.pdf', '_blank') },
    { id: 'act-theme', title: `Toggle Theme (Currently ${isDark ? 'Dark' : 'Light'})`, category: 'Action', icon: isDark ? Sun : Moon, action: onToggleTheme },
    // Projects
    ...projectsData.map((p) => ({
      id: `p-${p.id}`,
      title: `${p.title} (${p.category})`,
      subtitle: p.description.slice(0, 70) + '...',
      category: 'Project',
      icon: FolderGit2,
      action: () => {
        if (p.githubUrl) window.open(p.githubUrl, '_blank');
        else navigate('/projects');
      },
    })),
    // Skills
    ...skillCategories.flatMap((c) =>
      c.skills.map((s) => ({
        id: `s-${s.name}`,
        title: `${s.name} (${c.title})`,
        category: 'Skill',
        icon: Code,
        action: () => navigate('/about'),
      }))
    ),
  ];

  const filteredItems = query.trim()
    ? allItems.filter((item) =>
        `${item.title} ${item.category} ${item.subtitle || ''}`.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10)
    : allItems.slice(0, 8);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '560px',
          maxWidth: 'calc(100vw - 32px)',
          maxHeight: '80dvh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '14px 18px',
            borderBottom: '1px solid var(--color-border)',
            gap: '12px',
          }}
        >
          <Search size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, skills, pages, or actions... (Esc to close)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              fontSize: 'var(--font-size-base)',
              width: '100%',
              borderRadius: 0,
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close command palette"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-tertiary)',
              display: 'flex',
              padding: 4,
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ overflowY: 'auto', padding: '8px' }}>
          {filteredItems.length === 0 ? (
            <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
              No matches found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'var(--color-card-hover)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'background var(--transition-fast)',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'var(--color-primary-light)' : 'var(--color-comment)',
                      color: isSelected ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={16} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div
                        style={{
                          fontSize: 'var(--font-size-xs)',
                          color: 'var(--color-text-tertiary)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'var(--color-comment)',
                      color: 'var(--color-text-tertiary)',
                      letterSpacing: '0.05em',
                      fontWeight: 600,
                    }}
                  >
                    {item.category}
                  </span>
                  <ArrowRight size={14} style={{ opacity: isSelected ? 0.7 : 0, transition: 'opacity 150ms' }} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div
          style={{
            padding: '10px 16px',
            borderTop: '1px solid var(--color-border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-tertiary)',
            background: 'var(--color-comment)',
          }}
        >
          <span>Use <strong>↑</strong> <strong>↓</strong> to navigate, <strong>↵</strong> to select</span>
          <span><strong>Esc</strong> to dismiss</span>
        </div>
      </div>
    </div>
  );
}
