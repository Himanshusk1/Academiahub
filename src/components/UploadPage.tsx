import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Upload, FileText, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Subject, DocumentType } from '../types/document';

export function UploadPage() {
  const [uploaded, setUploaded] = useState(false);
  const [extractedKeywords, setExtractedKeywords] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    abstract: '',
    subject: '' as Subject | '',
    documentType: '' as DocumentType | '',
    publicationYear: new Date().getFullYear().toString(),
    journal: '',
    keywords: '',
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simulate metadata extraction
      setTimeout(() => {
        setFormData({
          ...formData,
          title: 'Machine Learning Applications in Healthcare Systems',
          abstract:
            'This paper explores the application of machine learning algorithms in modern healthcare systems, focusing on diagnostic accuracy and patient outcome prediction.',
        });
        setExtractedKeywords(['Machine Learning', 'Healthcare', 'Diagnostics', 'AI']);
      }, 1000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploaded(true);
    setTimeout(() => {
      setUploaded(false);
      setFormData({
        title: '',
        authors: '',
        abstract: '',
        subject: '',
        documentType: '',
        publicationYear: new Date().getFullYear().toString(),
        journal: '',
        keywords: '',
      });
      setExtractedKeywords([]);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-2">Upload Academic Document</h1>
          <p className="text-blue-100">
            Share your research with the academic community
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {uploaded ? (
            <Card className="p-12 text-center">
              <CheckCircle className="size-16 text-green-600 mx-auto mb-4" />
              <h2 className="mb-2">Document Uploaded Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Your document has been submitted and will be processed shortly. It will be
                available in the library after review.
              </p>
              <Button onClick={() => setUploaded(false)}>Upload Another Document</Button>
            </Card>
          ) : (
            <form onSubmit={handleSubmit}>
              <Card className="p-8 mb-6">
                <h2 className="mb-6">Document Information</h2>

                {/* File Upload */}
                <div className="mb-6">
                  <Label htmlFor="file">Upload PDF File *</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      id="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label htmlFor="file" className="cursor-pointer">
                      <Upload className="size-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PDF files only (Max 50MB)</p>
                    </label>
                  </div>
                </div>

                {/* Auto-extracted keywords */}
                {extractedKeywords.length > 0 && (
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 mb-2">
                      ✨ Auto-extracted keywords and metadata from your document:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {extractedKeywords.map((keyword) => (
                        <Badge key={keyword} className="bg-blue-100 text-blue-800">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Title */}
                <div className="mb-6">
                  <Label htmlFor="title">Document Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter the full title of your document"
                    required
                  />
                </div>

                {/* Authors */}
                <div className="mb-6">
                  <Label htmlFor="authors">Authors *</Label>
                  <Input
                    id="authors"
                    value={formData.authors}
                    onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
                    placeholder="John Doe, Jane Smith (separate with commas)"
                    required
                  />
                </div>

                {/* Document Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="documentType">Document Type *</Label>
                    <Select
                      value={formData.documentType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, documentType: value as DocumentType })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="research-paper">Research Paper</SelectItem>
                        <SelectItem value="journal-article">Journal Article</SelectItem>
                        <SelectItem value="book">Book</SelectItem>
                        <SelectItem value="book-chapter">Book Chapter</SelectItem>
                        <SelectItem value="thesis">Thesis</SelectItem>
                        <SelectItem value="dissertation">Dissertation</SelectItem>
                        <SelectItem value="review-paper">Review Paper</SelectItem>
                        <SelectItem value="technical-document">Technical Document</SelectItem>
                        <SelectItem value="synopsis">Synopsis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject Area *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value as Subject })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Computer Science">Computer Science</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Medicine">Medicine</SelectItem>
                        <SelectItem value="Physics">Physics</SelectItem>
                        <SelectItem value="Chemistry">Chemistry</SelectItem>
                        <SelectItem value="Biology">Biology</SelectItem>
                        <SelectItem value="Mathematics">Mathematics</SelectItem>
                        <SelectItem value="Management">Management</SelectItem>
                        <SelectItem value="Social Sciences">Social Sciences</SelectItem>
                        <SelectItem value="Literature">Literature</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <Label htmlFor="abstract">Abstract *</Label>
                  <Textarea
                    id="abstract"
                    value={formData.abstract}
                    onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    placeholder="Enter the abstract or summary of your document"
                    rows={6}
                    required
                  />
                </div>

                {/* Keywords */}
                <div className="mb-6">
                  <Label htmlFor="keywords">Keywords *</Label>
                  <Input
                    id="keywords"
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    placeholder="machine learning, healthcare, AI (separate with commas)"
                    required
                  />
                </div>

                {/* Publication Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="year">Publication Year *</Label>
                    <Input
                      id="year"
                      type="number"
                      value={formData.publicationYear}
                      onChange={(e) =>
                        setFormData({ ...formData, publicationYear: e.target.value })
                      }
                      min="1900"
                      max={new Date().getFullYear()}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="journal">Journal/Conference (Optional)</Label>
                    <Input
                      id="journal"
                      value={formData.journal}
                      onChange={(e) => setFormData({ ...formData, journal: e.target.value })}
                      placeholder="e.g., Nature Medicine"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 gap-2">
                    <FileText className="size-4" />
                    Submit Document
                  </Button>
                  <Button type="button" variant="outline" onClick={() => window.location.reload()}>
                    Cancel
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="mb-3">Upload Guidelines</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Ensure your document is in PDF format and does not exceed 50MB</li>
                  <li>• All fields marked with * are required</li>
                  <li>• Provide accurate metadata for better discoverability</li>
                  <li>• Your document will be reviewed before appearing in the library</li>
                  <li>• By uploading, you confirm you have rights to share this content</li>
                </ul>
              </Card>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
