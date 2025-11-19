import React from 'react';
import PageHero from '../components/PageHero';

const ContactPage: React.FC = () => (
    <>
        <PageHero title="Contact Us" subtitle="Let's start a conversation about your next project." bgImage="https://images.unsplash.com/photo-1587560699334-cc426240169f?q=80&w=2070&auto=format&fit=crop" />
        <div className="py-20 sm:py-24 lg:py-32 bg-[#242424]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                        <input type="text" id="name" className="mt-1 block w-full bg-white/5 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-[#b89e5a] focus:border-[#b89e5a]" />
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                        <input type="email" id="email" className="mt-1 block w-full bg-white/5 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-[#b89e5a] focus:border-[#b89e5a]" />
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" rows={5} className="mt-1 block w-full bg-white/5 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-[#b89e5a] focus:border-[#b89e5a]"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-[#b89e5a] text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-[#b89e5a]/20">Send Message</button>
                    </div>
                </form>
                <div className="text-gray-300">
                    <h3 className="text-2xl font-serif font-bold text-white">Get in Touch</h3>
                    <p className="mt-4 text-gray-400">We're always excited to hear about new projects and ideas. Drop us a line, and we'll get back to you as soon as possible.</p>
                    <div className="mt-8 space-y-4">
                        <p><strong>Email:</strong> contact@manovaa-designs.com</p>
                        <p><strong>Phone:</strong> +1 (234) 567-890</p>
                        <p><strong>Address:</strong> 123 Design Lane, Creativity City, 10101</p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default ContactPage;
