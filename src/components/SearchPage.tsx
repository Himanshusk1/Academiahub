import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { DocumentCard } from './DocumentCard';
import { FilterSidebar } from './FilterSidebar';
import { mockDocuments } from '../data/mockDocuments';
import { Document, SearchFilters } from '../types/document';

interface SearchPageProps {
  onNavigate: (page: string, data?: any) => void;
  initialQuery?: string;
}

export function SearchPage({ onNavigate, initialQuery = '' }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<SearchFilters>({
    query: initialQuery,
    subjects: [],
    documentTypes: [],
    yearRange: { min: 2020, max: 2024 },
    authors: [],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState<Document[]>([]);

  useEffect(() => {
    performSearch();
  }, [filters]);

  const performSearch = () => {
    let filtered = [...mockDocuments];

    // Filter by search query
    if (filters.query) {
      const query = filters.query.toLowerCase();
      filtered = filtered.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query) ||
          doc.abstract.toLowerCase().includes(query) ||
          doc.keywords.some((k) => k.toLowerCase().includes(query)) ||
          doc.authors.some((a) => a.name.toLowerCase().includes(query)) ||
          doc.subject.toLowerCase().includes(query)
      );
    }

    // Filter by subjects
    if (filters.subjects.length > 0) {
      filtered = filtered.filter((doc) => filters.subjects.includes(doc.subject));
    }

    // Filter by document types
    if (filters.documentTypes.length > 0) {
      filtered = filtered.filter((doc) => filters.documentTypes.includes(doc.type));
    }

    // Filter by year range
    filtered = filtered.filter(
      (doc) =>
        doc.publicationYear >= filters.yearRange.min &&
        doc.publicationYear <= filters.yearRange.max
    );

    setResults(filtered);
  };

  const handleSearch = () => {
    setFilters({ ...filters, query: searchQuery });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleViewDocument = (id: string) => {
    onNavigate('document', { id });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search academic resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <Button onClick={handleSearch}>Search</Button>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <SlidersHorizontal className="size-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          {showFilters && (
            <aside className="w-64 flex-shrink-0">
              <FilterSidebar filters={filters} onFiltersChange={setFilters} />
            </aside>
          )}

          {/* Results */}
          <main className="flex-1">
            <div className="mb-6">
              <h2>
                {results.length} {results.length === 1 ? 'Result' : 'Results'}
              </h2>
              {filters.query && (
                <p className="text-gray-600">
                  Showing results for "{filters.query}"
                </p>
              )}
            </div>

            <div className="space-y-6">
              {results.length > 0 ? (
                results.map((doc) => (
                  <DocumentCard key={doc.id} document={doc} onView={handleViewDocument} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">
                    No results found. Try adjusting your search criteria.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
