import { useMemo, useState } from 'react';
import PostCard from '../components/feed/PostCard';
import { projectsData } from '../data/projects';
import { awardsData } from '../data/awards';
import { certificationsData } from '../data/certifications';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PostsFeed() {
  const [searchFilter] = useState(() => {
    const hash = window.location.hash;
    const match = hash.match(/search=([^&]+)/);
    return match ? decodeURIComponent(match[1]).toLowerCase() : '';
  });

  // Merge content into feed sorted by date, including realistic Java backend code snippet post
  const allPosts = useMemo(() => {
    const posts = [];

    // Realistic Spring Boot REST Controller Code Snippet Post
    posts.push({
      id: 'snippet-spring-security',
      type: 'code-snippet',
      title: '⚡ Clean Spring Boot REST Controller & Global Exception Handling',
      description:
        'A quick peek into my standard backend structure in Spring Boot: feature-oriented packaging, immutable DTO records, clean RESTful mapping with validation, and centralized exception handling with ProblemDetail.',
      techStack: ['Java 21', 'Spring Boot 3', 'REST API', 'Jakarta Validation'],
      category: 'Backend Architecture',
      highlight: 'Backend Code',
      date: '2026',
      period: '2026',
      codeFileName: 'BookingController.java',
      codeSnippet: `@RestController
@RequestMapping("/api/v1/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public ResponseEntity<BookingResponse> createBooking(
            @Valid @RequestBody BookingRequest request,
            @AuthenticationPrincipal UserPrincipal user) {
        
        BookingResponse response = bookingService.reserveSeats(request, user.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookingResponse> getBooking(@PathVariable UUID id) {
        return ResponseEntity.ok(bookingService.findById(id));
    }
}`,
      sortDate: new Date(2026, 4, 1),
    });

    // Projects as posts
    projectsData.forEach((p) => {
      posts.push({
        id: `project-${p.id}`,
        type: 'project',
        title: p.title,
        description: p.description,
        techStack: p.techStack,
        category: p.category,
        highlight: p.highlight,
        githubUrl: p.githubUrl,
        period: p.period,
        date: p.period,
        featured: p.featured,
        sortDate: parsePeriod(p.period),
      });
    });

    // Awards as posts
    awardsData.forEach((a) => {
      posts.push({
        id: `award-${a.id}`,
        type: 'award',
        title: `🏆 ${a.title}`,
        description: a.description,
        tags: a.tags,
        image: a.image,
        category: a.category,
        highlight: a.category,
        date: a.date,
        sortDate: new Date(a.date),
      });
    });

    // Certifications as posts
    certificationsData.forEach((c) => {
      posts.push({
        id: `cert-${c.id}`,
        type: 'certification',
        title: `📜 ${c.title}`,
        description: c.description,
        tags: c.skills,
        image: c.image,
        category: 'Certification',
        highlight: c.category,
        date: c.date,
        issuer: c.issuer,
        sortDate: new Date(c.date),
      });
    });

    posts.sort((a, b) => b.sortDate - a.sortDate);
    return posts;
  }, []);

  const filteredPosts = useMemo(() => {
    if (!searchFilter) return allPosts;
    return allPosts.filter((p) => {
      const searchable = `${p.title} ${p.description} ${(p.techStack || p.tags || []).join(' ')} ${p.category}`.toLowerCase();
      return searchable.includes(searchFilter);
    });
  }, [allPosts, searchFilter]);

  // Attach IntersectionObserver scroll reveal
  useScrollReveal([filteredPosts]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Create post prompt card */}
      <div className="card reveal-init" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src="/pralad-profile.jpeg"
          alt="Pralad Neupane"
          width={40}
          height={40}
          style={{ borderRadius: '50%', objectFit: 'cover', aspectRatio: '1/1' }}
          loading="lazy"
        />
        <div
          style={{
            flex: 1,
            padding: '10px 18px',
            background: 'var(--color-comment)',
            borderRadius: '24px',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
          }}
        >
          Building scalable backend systems & learning AI...
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="card" style={{ padding: '40px 16px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
          No posts match your search.
        </div>
      ) : (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}

function parsePeriod(period) {
  if (!period) return new Date(2024, 0, 1);
  const match = period.match(/(\d{4})/);
  if (match) {
    const year = parseInt(match[1]);
    const monthMatch = period.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);
    if (monthMatch) {
      const months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
      return new Date(year, months[monthMatch[1].toLowerCase()] || 0, 1);
    }
    return new Date(year, 6, 1);
  }
  return new Date(2024, 0, 1);
}
