import { mockDocuments } from '../data/mockDocuments';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Eye } from 'lucide-react';

interface RelatedDocumentsProps {
  currentDocumentId: string;
  onNavigate: (page: string, data?: any) => void;
}

export function RelatedDocuments({ currentDocumentId, onNavigate }: RelatedDocumentsProps) {
  const currentDoc = mockDocuments.find((d) => d.id === currentDocumentId);
  
  // Find related documents based on subject and keywords
  const relatedDocs = mockDocuments
    .filter((doc) => doc.id !== currentDocumentId)
    .filter((doc) => {
      if (!currentDoc) return false;
      // Same subject or overlapping keywords
      const hasOverlappingKeywords = doc.keywords.some((k) =>
        currentDoc.keywords.includes(k)
      );
      return doc.subject === currentDoc.subject || hasOverlappingKeywords;
    })
    .slice(0, 5);

  return (
    <Card className="p-6">
      <h3 className="mb-4">Related Documents</h3>
      <div className="space-y-4">
        {relatedDocs.map((doc) => (
          <div
            key={doc.id}
            className="cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
            onClick={() => onNavigate('document', { id: doc.id })}
          >
            <h4 className="text-sm text-blue-600 hover:text-blue-800 mb-2 line-clamp-2">
              {doc.title}
            </h4>
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>{doc.publicationYear}</span>
              <div className="flex items-center gap-1">
                <Eye className="size-3" />
                <span>{doc.views.toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="text-xs">
                {doc.subject}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
