export type DocumentType = 
  | 'research-paper'
  | 'journal-article'
  | 'book'
  | 'book-chapter'
  | 'thesis'
  | 'dissertation'
  | 'project-report'
  | 'review-paper'
  | 'technical-document'
  | 'synopsis';

export type Subject = 
  | 'Computer Science'
  | 'Engineering'
  | 'Medicine'
  | 'Physics'
  | 'Chemistry'
  | 'Biology'
  | 'Mathematics'
  | 'Management'
  | 'Social Sciences'
  | 'Literature';

export interface Author {
  name: string;
  affiliation?: string;
}

export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  authors: Author[];
  abstract: string;
  keywords: string[];
  subject: Subject;
  publicationYear: number;
  journal?: string;
  volume?: string;
  pages?: string;
  doi?: string;
  pdfUrl?: string;
  views: number;
  citations: number;
}

export interface SearchFilters {
  query: string;
  subjects: Subject[];
  documentTypes: DocumentType[];
  yearRange: { min: number; max: number };
  authors: string[];
}
