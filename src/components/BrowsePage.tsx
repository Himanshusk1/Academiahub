import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { DocumentCard } from './DocumentCard';
import { mockDocuments } from '../data/mockDocuments';
import { Subject, DocumentType } from '../types/document';
import {
  BookOpen,
  FileText,
  GraduationCap,
  FlaskConical,
  Newspaper,
  BookMarked,
  FileCode,
  ScrollText,
} from 'lucide-react';

interface BrowsePageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function BrowsePage({ onNavigate }: BrowsePageProps) {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedType, setSelectedType] = useState<DocumentType | null>(null);

  const subjects: { name: Subject; count: number }[] = [
    { name: 'Computer Science', count: 850 },
    { name: 'Engineering', count: 720 },
    { name: 'Medicine', count: 980 },
    { name: 'Physics', count: 560 },
    { name: 'Chemistry', count: 450 },
    { name: 'Biology', count: 620 },
    { name: 'Mathematics', count: 410 },
    { name: 'Management', count: 340 },
    { name: 'Social Sciences', count: 290 },
    { name: 'Literature', count: 180 },
  ];

  const documentTypes: { type: DocumentType; label: string; icon: any; count: string }[] = [
    { type: 'research-paper', label: 'Research Papers', icon: FileText, count: '2.5M' },
    { type: 'journal-article', label: 'Journal Articles', icon: Newspaper, count: '1.8M' },
    { type: 'book', label: 'Books', icon: BookOpen, count: '400K' },
    { type: 'book-chapter', label: 'Book Chapters', icon: BookMarked, count: '350K' },
    { type: 'thesis', label: 'Theses', icon: GraduationCap, count: '250K' },
    { type: 'dissertation', label: 'Dissertations', icon: ScrollText, count: '180K' },
    { type: 'review-paper', label: 'Review Papers', icon: FileCode, count: '150K' },
    { type: 'technical-document', label: 'Technical Documents', icon: FlaskConical, count: '120K' },
  ];

  const handleViewDocument = (id: string) => {
    onNavigate('document', { id });
  };

  const filteredDocuments = mockDocuments.filter((doc) => {
    if (selectedSubject && doc.subject !== selectedSubject) return false;
    if (selectedType && doc.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-2">Browse Academic Resources</h1>
          <p className="text-blue-100">
            Explore our collection by subject area or document type
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Document Types */}
        <section className="mb-12">
          <h2 className="mb-6">Browse by Document Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {documentTypes.map((item) => (
              <Card
                key={item.type}
                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                  selectedType === item.type ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => setSelectedType(selectedType === item.type ? null : item.type)}
              >
                <item.icon className="size-10 text-blue-600 mb-3" />
                <h3 className="mb-2">{item.label}</h3>
                <p className="text-gray-600">{item.count}+ documents</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Subjects */}
        <section className="mb-12">
          <h2 className="mb-6">Browse by Subject Area</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {subjects.map((subject) => (
              <Card
                key={subject.name}
                className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                  selectedSubject === subject.name ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() =>
                  setSelectedSubject(selectedSubject === subject.name ? null : subject.name)
                }
              >
                <h4 className="mb-2">{subject.name}</h4>
                <p className="text-sm text-gray-600">{subject.count}K+ docs</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Results */}
        {(selectedSubject || selectedType) && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2>
                {filteredDocuments.length} {filteredDocuments.length === 1 ? 'Document' : 'Documents'}
              </h2>
              <div className="flex gap-2">
                {selectedSubject && (
                  <Badge className="bg-blue-100 text-blue-800">
                    {selectedSubject}
                    <button
                      onClick={() => setSelectedSubject(null)}
                      className="ml-2 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedType && (
                  <Badge className="bg-green-100 text-green-800">
                    {selectedType.replace('-', ' ')}
                    <button
                      onClick={() => setSelectedType(null)}
                      className="ml-2 hover:text-green-900"
                    >
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDocuments.map((doc) => (
                <DocumentCard key={doc.id} document={doc} onView={handleViewDocument} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
