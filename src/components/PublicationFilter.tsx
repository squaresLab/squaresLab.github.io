import { useState, useEffect, useMemo } from 'preact/hooks';

interface PublicationMaterials {
  pdf?: string;
  slidesPdf?: string;
  slidesPptx?: string;
  slidesKey?: string;
  slidesOdp?: string;
  posterPdf?: string;
}

interface Publication {
  key: string;
  type: string;
  title: string;
  authors: string[];
  year: number;
  month?: number;
  venue?: string;
  doi?: string;
  projects: string[];
  code?: string;
  data?: string;
  tool?: string;
  results?: string;
  website?: string;
  video?: string;
  materials: PublicationMaterials;
  formattedCitation: string;
  bibtex: string;
}

interface TopicMeta {
  tag: string;
  name: string;
  count: number;
}

interface Props {
  publications: Publication[];
  topics: TopicMeta[];
  years: number[];
}

interface PubLink {
  label: string;
  href: string;
}

function buildLinks(pub: Publication): PubLink[] {
  const links: PubLink[] = [];
  if (pub.materials.pdf) links.push({ label: 'PDF', href: pub.materials.pdf });
  if (pub.materials.slidesPdf) links.push({ label: 'Slides (PDF)', href: pub.materials.slidesPdf });
  if (pub.materials.slidesPptx) links.push({ label: 'Slides (PPTX)', href: pub.materials.slidesPptx });
  if (pub.materials.slidesKey) links.push({ label: 'Slides (Key)', href: pub.materials.slidesKey });
  if (pub.materials.slidesOdp) links.push({ label: 'Slides (ODP)', href: pub.materials.slidesOdp });
  if (pub.materials.posterPdf) links.push({ label: 'Poster', href: pub.materials.posterPdf });
  if (pub.video) links.push({ label: 'Video', href: pub.video });
  if (pub.code) links.push({ label: 'Code', href: pub.code });
  if (pub.tool) links.push({ label: 'Tool', href: pub.tool });
  if (pub.data) links.push({ label: 'Data', href: pub.data });
  if (pub.results) links.push({ label: 'Results', href: pub.results });
  if (pub.website) links.push({ label: 'Website', href: pub.website });
  if (pub.doi) links.push({ label: 'DOI', href: `https://doi.org/${pub.doi}` });
  return links;
}

function getInitialParams(): { topic: string; year: string; q: string } {
  if (typeof window === 'undefined') return { topic: '', year: '', q: '' };
  const params = new URLSearchParams(window.location.search);
  return {
    topic: params.get('topic') || '',
    year: params.get('year') || '',
    q: params.get('q') || '',
  };
}

function updateURL(topic: string, year: string, q: string) {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams();
  if (topic) params.set('topic', topic);
  if (year) params.set('year', year);
  if (q) params.set('q', q);
  const search = params.toString();
  const url = search ? `${window.location.pathname}?${search}` : window.location.pathname;
  window.history.replaceState(null, '', url);
}

export default function PublicationFilter({ publications, topics, years }: Props) {
  const initial = getInitialParams();
  const [activeTopic, setActiveTopic] = useState(initial.topic);
  const [activeYear, setActiveYear] = useState(initial.year);
  const [searchQuery, setSearchQuery] = useState(initial.q);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedBibtex, setExpandedBibtex] = useState<Set<string>>(new Set());

  useEffect(() => {
    updateURL(activeTopic, activeYear, searchQuery);
  }, [activeTopic, activeYear, searchQuery]);

  const filtered = useMemo(() => {
    let result = publications;

    if (activeTopic) {
      result = result.filter((p) => p.projects.includes(activeTopic));
    }

    if (activeYear) {
      const y = parseInt(activeYear, 10);
      result = result.filter((p) => p.year === y);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.some((a) => a.toLowerCase().includes(q)) ||
          (p.venue && p.venue.toLowerCase().includes(q))
      );
    }

    return result;
  }, [publications, activeTopic, activeYear, searchQuery]);

  const groupedByYear = useMemo(() => {
    const map = new Map<number, Publication[]>();
    for (const pub of filtered) {
      const existing = map.get(pub.year);
      if (existing) {
        existing.push(pub);
      } else {
        map.set(pub.year, [pub]);
      }
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const hasFilters = activeTopic || activeYear || searchQuery;

  function clearAll() {
    setActiveTopic('');
    setActiveYear('');
    setSearchQuery('');
  }

  function toggleBibtex(key: string) {
    setExpandedBibtex((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  const topicName = activeTopic ? topics.find((t) => t.tag === activeTopic)?.name || activeTopic : '';

  const sidebar = (
    <div class="space-y-5">
      {/* Search */}
      <div>
        <label class="block text-xs font-bold uppercase tracking-wide text-gray-secondary mb-1">
          Search
        </label>
        <input
          type="text"
          value={searchQuery}
          onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
          placeholder="Title, author, venue..."
          class="w-full border border-gray-subtle rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-red-cmu"
        />
      </div>

      {/* Topics */}
      <div>
        <label class="block text-xs font-bold uppercase tracking-wide text-gray-secondary mb-1">
          Topics
        </label>
        <ul class="space-y-0.5">
          {topics.map((t) => (
            <li key={t.tag}>
              <button
                type="button"
                onClick={() => setActiveTopic(activeTopic === t.tag ? '' : t.tag)}
                class={`text-sm w-full text-left px-1 py-0.5 rounded cursor-pointer ${
                  activeTopic === t.tag
                    ? 'bg-red-cmu text-white font-semibold'
                    : 'hover:bg-gray-hero'
                }`}
              >
                {t.name} <span class="text-xs opacity-70">({t.count})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Years */}
      <div>
        <label class="block text-xs font-bold uppercase tracking-wide text-gray-secondary mb-1">
          Year
        </label>
        <ul class="space-y-0.5 max-h-48 overflow-y-auto">
          {years.map((y) => (
            <li key={y}>
              <button
                type="button"
                onClick={() => setActiveYear(activeYear === String(y) ? '' : String(y))}
                class={`text-sm w-full text-left px-1 py-0.5 rounded cursor-pointer ${
                  activeYear === String(y)
                    ? 'bg-red-cmu text-white font-semibold'
                    : 'hover:bg-gray-hero'
                }`}
              >
                {y}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div class="max-w-content mx-auto px-8 py-8">
      {/* Active filters */}
      {hasFilters && (
        <div class="flex flex-wrap items-center gap-2 mb-4">
          {activeTopic && (
            <span class="inline-flex items-center gap-1 bg-red-cmu text-white text-xs px-2 py-0.5 rounded-full">
              {topicName}
              <button type="button" onClick={() => setActiveTopic('')} class="ml-0.5 font-bold cursor-pointer">&times;</button>
            </span>
          )}
          {activeYear && (
            <span class="inline-flex items-center gap-1 bg-red-cmu text-white text-xs px-2 py-0.5 rounded-full">
              {activeYear}
              <button type="button" onClick={() => setActiveYear('')} class="ml-0.5 font-bold cursor-pointer">&times;</button>
            </span>
          )}
          {searchQuery && (
            <span class="inline-flex items-center gap-1 bg-red-cmu text-white text-xs px-2 py-0.5 rounded-full">
              &ldquo;{searchQuery}&rdquo;
              <button type="button" onClick={() => setSearchQuery('')} class="ml-0.5 font-bold cursor-pointer">&times;</button>
            </span>
          )}
          <button type="button" onClick={clearAll} class="text-xs text-red-cmu hover:underline cursor-pointer">
            Clear all
          </button>
        </div>
      )}

      {/* Showing counter */}
      <p class="text-sm text-gray-secondary mb-4">
        Showing {filtered.length} of {publications.length}
      </p>

      {/* Mobile filter toggle */}
      <div class="md:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          class="border border-gray-subtle rounded px-3 py-1.5 text-sm font-semibold cursor-pointer"
        >
          {mobileOpen ? 'Hide Filters' : 'Filters'}
        </button>
        {mobileOpen && (
          <div class="mt-3 p-4 border border-gray-subtle rounded bg-gray-hero">
            {sidebar}
          </div>
        )}
      </div>

      {/* Desktop layout */}
      <div class="flex gap-8">
        {/* Sidebar (desktop) */}
        <aside class="hidden md:block w-[200px] shrink-0 sticky top-4 self-start">
          {sidebar}
        </aside>

        {/* Results */}
        <div class="flex-1 min-w-0">
          {groupedByYear.map(([year, pubs]) => (
            <div key={year} class="mb-8">
              <h2 class="text-xl font-bold text-red-cmu border-b border-gray-subtle pb-1 mb-4">
                {year}
              </h2>
              {pubs.map((pub) => {
                const links = buildLinks(pub);
                const bibtexVisible = expandedBibtex.has(pub.key);
                return (
                  <div key={pub.key} class="mb-3">
                    <div class="text-sm font-bold">{pub.title}</div>
                    <div class="text-xs text-gray-secondary">
                      {pub.authors.join(', ')}
                      {pub.venue ? `. ${pub.venue}, ${pub.year}.` : `. ${pub.year}.`}
                    </div>
                    {(links.length > 0 || pub.bibtex) && (
                      <div class="text-xs mt-0.5">
                        {links.map((link, i) => (
                          <span key={link.href}>
                            {i > 0 && <span class="mx-1">&middot;</span>}
                            <a
                              href={link.href}
                              class="text-red-cmu hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label}
                            </a>
                          </span>
                        ))}
                        {pub.bibtex && (
                          <span>
                            {links.length > 0 && <span class="mx-1">&middot;</span>}
                            <button
                              type="button"
                              class="text-red-cmu hover:underline cursor-pointer"
                              onClick={() => toggleBibtex(pub.key)}
                            >
                              BibTeX
                            </button>
                          </span>
                        )}
                      </div>
                    )}
                    {bibtexVisible && pub.bibtex && (
                      <pre class="mt-2 p-3 bg-gray-hero text-xs overflow-x-auto rounded">
                        {pub.bibtex}
                      </pre>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
          {filtered.length === 0 && (
            <p class="text-gray-secondary text-sm">No publications match the current filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
