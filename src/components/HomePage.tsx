import { Hero } from './Hero';
import { DocumentCard } from './DocumentCard';
import { trendingDocuments, recentDocuments } from '../data/mockDocuments';
import { TrendingUp, Clock, BookOpen, FileText, GraduationCap, FlaskConical } from 'lucide-react';
import { Card } from './ui/card';

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const handleSearch = (query: string) => {
    onNavigate('search', { query });
  };

  const handleViewDocument = (id: string) => {
    onNavigate('document', { id });
  };

  const categories = [
    { name: 'Research Papers', icon: FileText, count: '2.5M+', color: 'text-blue-600' },
    { name: 'Books & Chapters', icon: BookOpen, count: '500K+', color: 'text-purple-600' },
    { name: 'Theses & Dissertations', icon: GraduationCap, count: '350K+', color: 'text-orange-600' },
    { name: 'Technical Reports', icon: FlaskConical, count: '180K+', color: 'text-green-600' },
  ];

  return (
    <div>
      <Hero onSearch={handleSearch} />

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate('browse')}
              >
                <category.icon className={`size-12 ${category.color} mx-auto mb-3`} />
                <h3 className="mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} documents</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Research */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="size-6 text-orange-600" />
            <h2>Trending Research</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trendingDocuments.map((doc) => (
              <DocumentCard key={doc.id} document={doc} onView={handleViewDocument} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Clock className="size-6 text-blue-600" />
            <h2>Recent Publications</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recentDocuments.map((doc) => (
              <DocumentCard key={doc.id} document={doc} onView={handleViewDocument} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-white mb-12">Platform Statistics</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">3.5M+</div>
              <div className="text-blue-100">Total Documents</div>
            </div>
            <div>
              <div className="text-5xl mb-2">500K+</div>
              <div className="text-blue-100">Authors</div>
            </div>
            <div>
              <div className="text-5xl mb-2">15K+</div>
              <div className="text-blue-100">Journals</div>
            </div>
            <div>
              <div className="text-5xl mb-2">100%</div>
              <div className="text-blue-100">Free Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
