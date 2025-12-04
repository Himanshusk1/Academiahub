import { Document } from '../types/document';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Eye, Quote, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';

interface DocumentCardProps {
  document: Document;
  onView: (id: string) => void;
}

export function DocumentCard({ document, onView }: DocumentCardProps) {
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'research-paper': 'bg-blue-100 text-blue-800',
      'journal-article': 'bg-green-100 text-green-800',
      'book': 'bg-purple-100 text-purple-800',
      'book-chapter': 'bg-pink-100 text-pink-800',
      'thesis': 'bg-orange-100 text-orange-800',
      'dissertation': 'bg-red-100 text-red-800',
      'review-paper': 'bg-teal-100 text-teal-800',
      'technical-document': 'bg-gray-100 text-gray-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <h3 className="text-blue-600 hover:text-blue-800 cursor-pointer mb-2" onClick={() => onView(document.id)}>
            {document.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <Users className="size-4" />
            <span>{document.authors.map(a => a.name).join(', ')}</span>
          </div>
        </div>
        <Badge className={getTypeColor(document.type)}>
          {document.type.replace('-', ' ')}
        </Badge>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-3">
        {document.abstract}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {document.keywords.slice(0, 4).map((keyword) => (
          <Badge key={keyword} variant="outline" className="text-xs">
            {keyword}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="size-4" />
            <span>{document.publicationYear}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="size-4" />
            <span>{document.views.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Quote className="size-4" />
            <span>{document.citations}</span>
          </div>
        </div>
        <Button variant="link" onClick={() => onView(document.id)}>
          View Details →
        </Button>
      </div>

      {document.journal && (
        <div className="mt-3 pt-3 border-t text-sm text-gray-600">
          <span className="italic">{document.journal}</span>
          {document.volume && <span>, Vol. {document.volume}</span>}
          {document.pages && <span>, pp. {document.pages}</span>}
        </div>
      )}
    </Card>
  );
}
