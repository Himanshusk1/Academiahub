import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white mb-4">
            Access Millions of Academic Resources
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Explore research papers, journals, books, theses, and more. No login required.
          </p>

          <div className="flex gap-2 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by title, author, keywords, or subject..."
                className="pl-10 h-12 text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['Computer Science', 'Medicine', 'Engineering', 'Physics', 'Chemistry'].map((subject) => (
              <Button
                key={subject}
                variant="outline"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                onClick={() => onSearch(subject)}
              >
                {subject}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
