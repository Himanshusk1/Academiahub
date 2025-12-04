import { SearchFilters, Subject, DocumentType } from '../types/document';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Slider } from './ui/slider';

interface FilterSidebarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const subjects: Subject[] = [
    'Computer Science',
    'Engineering',
    'Medicine',
    'Physics',
    'Chemistry',
    'Biology',
    'Mathematics',
    'Management',
    'Social Sciences',
    'Literature',
  ];

  const documentTypes: { value: DocumentType; label: string }[] = [
    { value: 'research-paper', label: 'Research Paper' },
    { value: 'journal-article', label: 'Journal Article' },
    { value: 'book', label: 'Book' },
    { value: 'book-chapter', label: 'Book Chapter' },
    { value: 'thesis', label: 'Thesis' },
    { value: 'dissertation', label: 'Dissertation' },
    { value: 'review-paper', label: 'Review Paper' },
    { value: 'technical-document', label: 'Technical Document' },
  ];

  const toggleSubject = (subject: Subject) => {
    const newSubjects = filters.subjects.includes(subject)
      ? filters.subjects.filter((s) => s !== subject)
      : [...filters.subjects, subject];
    onFiltersChange({ ...filters, subjects: newSubjects });
  };

  const toggleDocumentType = (type: DocumentType) => {
    const newTypes = filters.documentTypes.includes(type)
      ? filters.documentTypes.filter((t) => t !== type)
      : [...filters.documentTypes, type];
    onFiltersChange({ ...filters, documentTypes: newTypes });
  };

  const handleYearChange = (values: number[]) => {
    onFiltersChange({
      ...filters,
      yearRange: { min: values[0], max: values[1] },
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="mb-4">Subject Areas</h3>
        <div className="space-y-3">
          {subjects.map((subject) => (
            <div key={subject} className="flex items-center gap-2">
              <Checkbox
                id={`subject-${subject}`}
                checked={filters.subjects.includes(subject)}
                onCheckedChange={() => toggleSubject(subject)}
              />
              <Label
                htmlFor={`subject-${subject}`}
                className="text-sm cursor-pointer"
              >
                {subject}
              </Label>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="mb-4">Document Type</h3>
        <div className="space-y-3">
          {documentTypes.map((type) => (
            <div key={type.value} className="flex items-center gap-2">
              <Checkbox
                id={`type-${type.value}`}
                checked={filters.documentTypes.includes(type.value)}
                onCheckedChange={() => toggleDocumentType(type.value)}
              />
              <Label
                htmlFor={`type-${type.value}`}
                className="text-sm cursor-pointer"
              >
                {type.label}
              </Label>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="mb-4">Publication Year</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{filters.yearRange.min}</span>
            <span>{filters.yearRange.max}</span>
          </div>
          <Slider
            min={2000}
            max={2024}
            step={1}
            value={[filters.yearRange.min, filters.yearRange.max]}
            onValueChange={handleYearChange}
          />
        </div>
      </Card>
    </div>
  );
}
