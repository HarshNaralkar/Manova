import React, { useEffect, useState } from 'react';

interface ImageModalProps {
    isOpen: boolean;
    images: string[];
    initialIndex: number;
    onClose: () => void;
    category?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
    isOpen, 
    images, 
    initialIndex, 
    onClose,
    category = 'Image'
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex, isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                handlePrevious();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, currentIndex, images.length]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleTouchSwipe = (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        const startX = touch.clientX;

        const handleTouchEnd = (endEvent: TouchEvent) => {
            const endTouch = endEvent.changedTouches[0];
            const endX = endTouch.clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    handleNext();
                } else {
                    handlePrevious();
                }
            }
        };

        document.addEventListener('touchend', handleTouchEnd, { once: true });
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
            onClick={handleBackdropClick}
            onTouchStart={handleTouchSwipe}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-60 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 transition-all duration-300 flex items-center justify-center"
                aria-label="Close modal"
            >
                <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            {/* Main Image Container */}
            <div className="relative w-full h-full flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6">
                <img
                    src={images[currentIndex]}
                    alt={`${category} - Image ${currentIndex + 1}`}
                    className="max-h-full max-w-full object-contain rounded-lg animate-zoom-in"
                />

                {/* Previous Button */}
                {images.length > 1 && (
                    <button
                        onClick={handlePrevious}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 transition-all duration-300 flex items-center justify-center hover:scale-110"
                        aria-label="Previous image"
                    >
                        <svg
                            className="w-6 h-6 sm:w-8 sm:h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                )}

                {/* Next Button */}
                {images.length > 1 && (
                    <button
                        onClick={handleNext}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 transition-all duration-300 flex items-center justify-center hover:scale-110"
                        aria-label="Next image"
                    >
                        <svg
                            className="w-6 h-6 sm:w-8 sm:h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                )}
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm sm:text-base">
                    {currentIndex + 1} / {images.length}
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes zoom-in {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }

                .animate-zoom-in {
                    animation: zoom-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ImageModal;
