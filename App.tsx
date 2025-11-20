import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landingpage from './components/Landingpage';
// Import pages from the new 'pages' directory
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    // Set initial route
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (true) {
      case route.startsWith('#/project-detail/'):
        return <ProjectDetailPage />;
      case route === '#/projects':
        return <ProjectsPage />;
      case route === '#/gallery':
        return <GalleryPage />;
      case route === '#/services':
        return <ServicesPage />;
      case route === '#/about':
        return <AboutPage />;
      case route === '#/contact':
        return <ContactPage />;
      case route === '#/' || route === '':
      default:
        return <HomePage />;
    }
  };


  return (
    <div className="bg-[#1E1E1E] min-h-screen">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;