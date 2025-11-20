import React from 'react';
import { FaInstagram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      href: 'https://instagram.com',
      label: 'Instagram'
    },
    {
      icon: FaXTwitter,
      href: 'https://x.com',
      label: 'X (Twitter)'
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
              Get in touch<br />with Manovaa
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg mb-12 font-light">
              Designing timeless spaces that tell your story.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 items-center">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-16 h-16 bg-black-500 hover:bg-[#b89e5a] rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <IconComponent size={32} color="white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center pl-12 lg:pl-24">
            {/* Contact Heading */}
            <div className="mb-12">
              <h3 className="text-[#b89e5a] text-lg font-bold tracking-widest uppercase mb-8">
                Contact
              </h3>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Email */}
                <div>
                  <p className="text-white text-base font-light">
                    contact@manovaa-designs.com
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-white text-base font-light">
                    +1 (234) 567-890
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="text-white text-base font-light">
                    123 Design Lane, Creativity City
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Manovaa Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;