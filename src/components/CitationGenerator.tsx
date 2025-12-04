import { useState } from 'react';
import { Document } from '../types/document';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Copy, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface CitationGeneratorProps {
  document: Document;
}

export function CitationGenerator({ document }: CitationGeneratorProps) {
  const [copied, setCopied] = useState(false);

  const generateAPA = () => {
    const authors = document.authors.map((a) => {
      const nameParts = a.name.split(' ');
      const lastName = nameParts[nameParts.length - 1];
      const initials = nameParts
        .slice(0, -1)
        .map((n) => n[0] + '.')
        .join(' ');
      return `${lastName}, ${initials}`;
    }).join(', ');

    return `${authors} (${document.publicationYear}). ${document.title}. ${
      document.journal ? `${document.journal}, ${document.volume}` : ''
    }${document.pages ? `, ${document.pages}` : ''}${
      document.doi ? `. https://doi.org/${document.doi}` : ''
    }`;
  };

  const generateMLA = () => {
    const firstAuthor = document.authors[0].name.split(' ');
    const lastName = firstAuthor[firstAuthor.length - 1];
    const firstName = firstAuthor.slice(0, -1).join(' ');
    const authorString =
      document.authors.length > 1
        ? `${lastName}, ${firstName}, et al.`
        : `${lastName}, ${firstName}.`;

    return `${authorString} "${document.title}." ${
      document.journal ? `${document.journal}` : ''
    }${document.volume ? `, vol. ${document.volume}` : ''}${
      document.publicationYear ? `, ${document.publicationYear}` : ''
    }${document.pages ? `, pp. ${document.pages}` : ''}.`;
  };

  const generateChicago = () => {
    const authors = document.authors
      .map((a, idx) => {
        if (idx === 0) {
          const nameParts = a.name.split(' ');
          const lastName = nameParts[nameParts.length - 1];
          const firstName = nameParts.slice(0, -1).join(' ');
          return `${lastName}, ${firstName}`;
        }
        return a.name;
      })
      .join(', ');

    return `${authors}. "${document.title}." ${
      document.journal ? `${document.journal}` : ''
    }${document.volume ? ` ${document.volume}` : ''}${
      document.publicationYear ? ` (${document.publicationYear})` : ''
    }${document.pages ? `: ${document.pages}` : ''}.`;
  };

  const generateIEEE = () => {
    const authors = document.authors
      .map((a) => {
        const nameParts = a.name.split(' ');
        const initials = nameParts
          .slice(0, -1)
          .map((n) => n[0] + '.')
          .join(' ');
        const lastName = nameParts[nameParts.length - 1];
        return `${initials} ${lastName}`;
      })
      .join(', ');

    return `${authors}, "${document.title}," ${
      document.journal ? `${document.journal}` : ''
    }${document.volume ? `, vol. ${document.volume}` : ''}${
      document.pages ? `, pp. ${document.pages}` : ''
    }${document.publicationYear ? `, ${document.publicationYear}` : ''}.`;
  };

  const generateBibTeX = () => {
    const firstAuthorLastName = document.authors[0].name
      .split(' ')
      [document.authors[0].name.split(' ').length - 1].toLowerCase();
    const key = `${firstAuthorLastName}${document.publicationYear}`;

    return `@article{${key},
  title={${document.title}},
  author={${document.authors.map((a) => a.name).join(' and ')}},
  journal={${document.journal || 'N/A'}},
  volume={${document.volume || 'N/A'}},
  pages={${document.pages || 'N/A'}},
  year={${document.publicationYear}},
  doi={${document.doi || 'N/A'}}
}`;
  };

  const copyCitation = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <h3>Citation Formats</h3>

      <Tabs defaultValue="apa">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="apa">APA</TabsTrigger>
          <TabsTrigger value="mla">MLA</TabsTrigger>
          <TabsTrigger value="chicago">Chicago</TabsTrigger>
          <TabsTrigger value="ieee">IEEE</TabsTrigger>
          <TabsTrigger value="bibtex">BibTeX</TabsTrigger>
        </TabsList>

        <TabsContent value="apa">
          <Card className="p-4">
            <p className="text-sm mb-4 font-mono">{generateAPA()}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => copyCitation(generateAPA())}
              className="gap-2"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? 'Copied!' : 'Copy Citation'}
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="mla">
          <Card className="p-4">
            <p className="text-sm mb-4 font-mono">{generateMLA()}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => copyCitation(generateMLA())}
              className="gap-2"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? 'Copied!' : 'Copy Citation'}
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="chicago">
          <Card className="p-4">
            <p className="text-sm mb-4 font-mono">{generateChicago()}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => copyCitation(generateChicago())}
              className="gap-2"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? 'Copied!' : 'Copy Citation'}
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="ieee">
          <Card className="p-4">
            <p className="text-sm mb-4 font-mono">{generateIEEE()}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => copyCitation(generateIEEE())}
              className="gap-2"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? 'Copied!' : 'Copy Citation'}
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="bibtex">
          <Card className="p-4">
            <pre className="text-sm mb-4 overflow-x-auto">{generateBibTeX()}</pre>
            <Button
              size="sm"
              variant="outline"
              onClick={() => copyCitation(generateBibTeX())}
              className="gap-2"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? 'Copied!' : 'Copy Citation'}
            </Button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
