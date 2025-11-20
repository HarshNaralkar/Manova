import React, { useState } from 'react';
import PageHero from '../components/PageHero';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage(null);

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatusMessage({
                    type: 'success',
                    text: data.message || 'Email sent successfully! We will get back to you soon.',
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatusMessage({
                    type: 'error',
                    text: data.message || 'Failed to send email. Please try again.',
                });
            }
        } catch (error) {
            setStatusMessage({
                type: 'error',
                text: 'Connection error. Please make sure the server is running and try again.',
            });
            console.error('Error sending email:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <PageHero title="Contact Us" subtitle="Let's start a conversation about your next project." bgImage="https://images.unsplash.com/photo-1587560699334-cc426240169f?q=80&w=2070&auto=format&fit=crop" />
            <div className="py-20 sm:py-24 lg:py-32 bg-[#242424]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-white/5 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-[#b89e5a] focus:border-[#b89e5a]"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-white/5 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-[#b89e5a] focus:border-[#b89e5a]"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full bg-white/5 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-[#b89e5a] focus:border-[#b89e5a]"
                            ></textarea>
                        </div>

                        {/* Status Message */}
                        {statusMessage && (
                            <div
                                className={`p-4 rounded-md text-sm font-medium ${
                                    statusMessage.type === 'success'
                                        ? 'bg-green-500/20 border border-green-500 text-green-300'
                                        : 'bg-red-500/20 border border-red-500 text-red-300'
                                }`}
                            >
                                {statusMessage.text}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#b89e5a] text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-[#b89e5a]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
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
};

export default ContactPage;
