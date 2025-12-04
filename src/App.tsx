import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { SearchPage } from './components/SearchPage';
import { DocumentViewer } from './components/DocumentViewer';
import { BrowsePage } from './components/BrowsePage';
import { UploadPage } from './components/UploadPage';

type Page = 'home' | 'search' | 'document' | 'browse' | 'upload';

interface NavigationData {
  query?: string;
  id?: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [navigationData, setNavigationData] = useState<NavigationData>({});

  const handleNavigate = (page: string, data?: NavigationData) => {
    setCurrentPage(page as Page);
    setNavigationData(data || {});
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      
      {currentPage === 'search' && (
        <SearchPage onNavigate={handleNavigate} initialQuery={navigationData.query} />
      )}
      
      {currentPage === 'document' && navigationData.id && (
        <DocumentViewer documentId={navigationData.id} onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'browse' && <BrowsePage onNavigate={handleNavigate} />}
      
      {currentPage === 'upload' && <UploadPage />}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white mb-4">AcademiaHub</h3>
              <p className="text-gray-400 text-sm">
                Open access to millions of academic resources. No barriers, no subscriptions.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Browse</a></li>
                <li><a href="#" className="hover:text-white">Search</a></li>
                <li><a href="#" className="hover:text-white">Upload</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Citation Guide</a></li>
                <li><a href="#" className="hover:text-white">API Access</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Copyright</a></li>
                <li><a href="#" className="hover:text-white">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 AcademiaHub. Free academic resources for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
