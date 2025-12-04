import { useState } from 'react';
import { mockDocuments } from '../data/mockDocuments';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Download, Share2, BookmarkPlus, Eye, Quote, Calendar, Building } from 'lucide-react';
import { CitationGenerator } from './CitationGenerator';
import { RelatedDocuments } from './RelatedDocuments';

interface DocumentViewerProps {
  documentId: string;
  onNavigate: (page: string, data?: any) => void;
}

export function DocumentViewer({ documentId, onNavigate }: DocumentViewerProps) {
  const document = mockDocuments.find((d) => d.id === documentId);
  const [activeTab, setActiveTab] = useState('overview');

  if (!document) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2>Document not found</h2>
        <Button onClick={() => onNavigate('home')} className="mt-4">
          Return Home
        </Button>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start justify-between mb-4">
            <Badge className={getTypeColor(document.type)}>
              {document.type.replace('-', ' ')}
            </Badge>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <BookmarkPlus className="size-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="size-4" />
                Share
              </Button>
              <Button variant="default" size="sm" className="gap-2">
                <Download className="size-4" />
                Download PDF
              </Button>
            </div>
          </div>

          <h1 className="mb-4">{document.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>{document.publicationYear}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="size-4" />
              <span>{document.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center gap-2">
              <Quote className="size-4" />
              <span>{document.citations} citations</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-gray-600">Authors: </span>
              {document.authors.map((author, idx) => (
                <span key={idx}>
                  {author.name}
                  {author.affiliation && (
                    <span className="text-gray-500 text-sm ml-1">
                      ({author.affiliation})
                    </span>
                  )}
                  {idx < document.authors.length - 1 && ', '}
                </span>
              ))}
            </div>

            {document.journal && (
              <div>
                <span className="text-gray-600">Published in: </span>
                <span className="italic">{document.journal}</span>
                {document.volume && <span>, Vol. {document.volume}</span>}
                {document.pages && <span>, pp. {document.pages}</span>}
              </div>
            )}

            {document.doi && (
              <div>
                <span className="text-gray-600">DOI: </span>
                <a href={`https://doi.org/${document.doi}`} className="text-blue-600 hover:underline">
                  {document.doi}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Content Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="abstract">Abstract</TabsTrigger>
                  <TabsTrigger value="pdf">PDF Viewer</TabsTrigger>
                  <TabsTrigger value="citations">Citations</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h3 className="mb-3">Abstract</h3>
                    <p className="text-gray-700 leading-relaxed">{document.abstract}</p>
                  </div>

                  <div>
                    <h3 className="mb-3">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {document.keywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3">Subject Area</h3>
                    <Badge className="bg-blue-100 text-blue-800">{document.subject}</Badge>
                  </div>
                </TabsContent>

                <TabsContent value="abstract">
                  <div className="prose max-w-none">
                    <h3>Abstract</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {document.abstract}
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="pdf">
                  <div className="bg-gray-100 rounded-lg p-12 text-center">
                    <div className="max-w-md mx-auto">
                      <Building className="size-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="mb-2">PDF Viewer</h3>
                      <p className="text-gray-600 mb-6">
                        In a production environment, this would display an embedded PDF viewer
                        allowing you to read the full document online.
                      </p>
                      <Button className="gap-2">
                        <Download className="size-4" />
                        Download Full PDF
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="citations">
                  <CitationGenerator document={document} />
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">Document Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Views</span>
                  <span>{document.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Citations</span>
                  <span>{document.citations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year</span>
                  <span>{document.publicationYear}</span>
                </div>
              </div>
            </Card>

            <RelatedDocuments currentDocumentId={documentId} onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </div>
  );
}
