import { BookOpen, Upload, Search, Menu, Home, FolderTree } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <BookOpen className="size-8 text-blue-600" />
            <div>
              <h1 className="text-blue-600">AcademiaHub</h1>
              <p className="text-xs text-gray-600">Open Academic Library</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
              className="gap-2"
            >
              <Home className="size-4" />
              Home
            </Button>
            <Button
              variant={currentPage === 'search' ? 'default' : 'ghost'}
              onClick={() => onNavigate('search')}
              className="gap-2"
            >
              <Search className="size-4" />
              Search
            </Button>
            <Button
              variant={currentPage === 'browse' ? 'default' : 'ghost'}
              onClick={() => onNavigate('browse')}
              className="gap-2"
            >
              <FolderTree className="size-4" />
              Browse
            </Button>
            <Button
              variant={currentPage === 'upload' ? 'default' : 'ghost'}
              onClick={() => onNavigate('upload')}
              className="gap-2"
            >
              <Upload className="size-4" />
              Upload
            </Button>
          </nav>

          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
