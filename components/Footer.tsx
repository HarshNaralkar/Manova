
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#242424] text-gray-400 border-t border-gray-800/50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <a href="#/" className="text-white text-3xl font-bold font-serif">Manovaa</a>
            <p className="mt-4 text-sm">
              Designing timeless spaces that tell your story.
            </p>
          </div>
          <div className="grid grid-cols-2 md:col-span-3 gap-8">
              <div className="md:col-start-2">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#/" className="text-base hover:text-white transition-colors">Home</a></li>
                  <li><a href="#/projects" className="text-base hover:text-white transition-colors">Projects</a></li>
                  <li><a href="#/services" className="text-base hover:text-white transition-colors">Services</a></li>
                  <li><a href="#/about" className="text-base hover:text-white transition-colors">About</a></li>
                  <li><a href="#/contact" className="text-base hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-white">Contact</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>contact@manovaa-designs.com</li>
                  <li>+1 (234) 567-890</li>
                  <li>123 Design Lane, Creativity City</li>
                </ul>
              </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Manovaa Designs. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" /></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.787-.023-1.175-.067 2.179 1.396 4.768 2.212 7.557 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21-.005-.423-.014-.633.961-.695 1.8-1.562 2.46-2.549z" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.24 2.48.512a4.92 4.92 0 0 1 1.675 1.675c.272.477.456 1.274.512 2.48.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.512 2.48a4.92 4.92 0 0 1-1.675 1.675c-.477.272-1.274.456-2.48.512-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.206-.056-2.003-.24-2.48-.512a4.92 4.92 0 0 1-1.675-1.675c-.272-.477-.456-1.274-.512-2.48-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.056-1.206.24-2.003.512-2.48a4.92 4.92 0 0 1 1.675-1.675c.477-.272 1.274-.456 2.48-.512 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.013-4.947.072-1.281.059-2.153.27-2.91.57a6.92 6.92 0 0 0-2.51 1.64 6.92 6.92 0 0 0-1.64 2.51c-.3.757-.511 1.629-.57 2.91-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.059 1.281.27 2.153.57 2.91a6.92 6.92 0 0 0 1.64 2.51 6.92 6.92 0 0 0 2.51 1.64c.757.3 1.629.511 2.91.57 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.281-.059 2.153-.27 2.91-.57a6.92 6.92 0 0 0 2.51-1.64 6.92 6.92 0 0 0 1.64-2.51c.3-.757.511-1.629.57-2.91.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.059-1.281-.27-2.153-.57-2.91a6.92 6.92 0 0 0-1.64-2.51 6.92 6.92 0 0 0-2.51-1.64c-.757-.3-1.629-.511-2.91-.57-1.28-.059-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;