
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
                  <li><a href="#/gallery" className="text-base hover:text-white transition-colors">Gallery</a></li>
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
          <div className="flex space-x-4 mt-4 sm:mt-0">*/
             {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;