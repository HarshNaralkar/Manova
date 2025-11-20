import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface SketchRevealProps {
  realSrc: string;
  sketchSrc?: string; // Optional: if you have a dedicated sketch image
  children: React.ReactNode;
  className?: string;
}

const SketchReveal: React.FC<SketchRevealProps> = ({ realSrc, sketchSrc, children, className = '' }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [realImageLoaded, setRealImageLoaded] = useState(false);
  const [sketchImageLoaded, setSketchImageLoaded] = useState(false);

  // Use the sketch source if provided, otherwise fallback to real source (and we'll apply filters)
  const activeSketchSrc = sketchSrc || realSrc;

  // Resolve image paths - construct proper public URLs for Vite
  const resolveImagePath = (src: string): string => {
    console.log('Original src:', src);
    // If already a full URL, return as-is
    if (src.startsWith('http://') || src.startsWith('https://')) {
      console.log('Resolved to external URL:', src);
      return src;
    }
    // If starts with /, assume it's from public root
    if (src.startsWith('/')) {
      console.log('Resolved to absolute path:', src);
      return src;
    }
    // Otherwise prepend / for public folder
    const resolved = '/' + src;
    console.log('Resolved to:', resolved);
    return resolved;
  };

  const realImagePath = resolveImagePath(realSrc);
  const sketchImagePath = resolveImagePath(activeSketchSrc);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = clientX - containerRect.left;
    const percentage = Math.min(Math.max((relativeX / containerRect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging.current) {
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        handleMove(clientX);
      }
    };
    
    const handleGlobalUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('touchmove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-screen overflow-hidden select-none cursor-col-resize group ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* ==========================================
          LAYER 1: REALITY (Background Layer) 
          Right side. Full Color.
         ========================================== */}
      <div className="absolute inset-0 w-full h-full bg-[#1a1a1a] z-0">
        {/* Background Image - Lower Brightness for text visibility */}
        <img 
          src={realImagePath} 
          alt="Real Interior" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.65)' }}
          onLoad={() => {
            console.log('✓ Real image loaded successfully from:', realImagePath);
            setRealImageLoaded(true);
          }}
          onError={(e) => {
            console.error('✗ Real image failed to load from:', realImagePath);
            console.error('Event:', e);
            // Try with window.location.origin as fallback
            const fallbackSrc = `${window.location.origin}${realImagePath}`;
            console.log('Trying fallback URL:', fallbackSrc);
            (e.target as HTMLImageElement).src = fallbackSrc;
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
        
        {/* Content Container */}
        <div className="absolute inset-0 container mx-auto px-6 md:px-12 flex items-center justify-center z-10">
          <div className="w-full reality-theme">
            {children}
          </div>
        </div>

        {/* Reality Label */}
        <div className="absolute top-32 right-8 md:right-12 z-20">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#EBE9E4]/80 border-b border-[#EBE9E4]/50 pb-1">
            Reality
          </span>
        </div>
      </div>

      {/* ==========================================
          LAYER 2: CONCEPT (Foreground Layer)
          Left side. Sketch / Blueprint.
         ========================================== */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#0a0a0a] z-10"
        style={{ 
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` 
        }}
      >
        {/* 
            Sketch Image 
            If a specific sketch image is provided, we assume it's already black & white.
            If reusing the real image, we use 'invert(1)' to create a "Blueprint on dark paper" look.
            This ensures white text pops against it.
        */}
        <img 
          src={sketchImagePath} 
          alt="Sketch Interior" 
          className="absolute inset-0 w-full h-full object-cover"
          style={sketchSrc ? {
            filter: 'brightness(0.4) contrast(1.2)' // Just dim it if it's already a sketch
          } : {
            filter: 'grayscale(100%) invert(1) contrast(150%) brightness(0.6)', // Create blueprint effect
          }}
          onLoad={() => {
            console.log('✓ Sketch image loaded successfully from:', sketchImagePath);
            setSketchImageLoaded(true);
          }}
          onError={(e) => {
            console.error('✗ Sketch image failed to load from:', sketchImagePath);
            console.error('Event:', e);
            // Try with window.location.origin as fallback
            const fallbackSrc = `${window.location.origin}${sketchImagePath}`;
            console.log('Trying fallback URL:', fallbackSrc);
            (e.target as HTMLImageElement).src = fallbackSrc;
          }}
        />
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }} 
        />
        
        {/* Dark Overlay to guarantee White Text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="absolute inset-0 container mx-auto px-6 md:px-12 flex items-center justify-center z-20">
          <div className="w-full concept-theme">
            {children}
          </div>
        </div>

         {/* Concept Label */}
         <div className="absolute top-32 left-8 md:left-12 z-30">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/90 border-b border-white/50 pb-1">
            Concept
          </span>
        </div>
      </div>

      {/* ==========================================
          SLIDER CONTROLS
         ========================================== */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-white/40 z-50 cursor-col-resize pointer-events-none backdrop-blur-md"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <MoveHorizontal className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* 
          Global Theme Styles 
      */}
      <style>{`
        /* --- REALITY THEME (Right) --- */
        .reality-theme { color: #F2F0E9; }
        .reality-theme h1, .reality-theme h2, .reality-theme h3 { color: #F2F0E9; }
        .reality-theme p { color: #E0E0E0; }
        .reality-theme .accent-text { color: #D4AF37; font-style: italic; } 
        .reality-theme .divider { background-color: #F2F0E9; opacity: 0.5; }
        .reality-theme .icon-current { color: #F2F0E9; }
        
        .reality-theme .btn-primary { 
          background-color: #F2F0E9; 
          color: #1a1a1a; 
          border: 1px solid #F2F0E9;
        }
        .reality-theme .btn-outline { 
          border: 1px solid #F2F0E9; 
          color: #F2F0E9; 
          background: transparent; 
        }

        /* --- CONCEPT THEME (Left) --- */
        .concept-theme { color: #FFFFFF !important; }
        .concept-theme h1, .concept-theme h2, .concept-theme h3 { color: #FFFFFF !important; }
        .concept-theme p { color: #DDDDDD !important; }
        .concept-theme span { color: #FFFFFF !important; }
        .concept-theme .accent-text { 
          color: #FFFFFF !important; 
          font-style: italic;
          opacity: 0.9;
        }
        .concept-theme .divider { background-color: #FFFFFF !important; }
        .concept-theme .icon-current { color: #FFFFFF !important; }

        .concept-theme .btn-primary { 
          background-color: transparent !important; 
          color: white !important; 
          border: 1px solid white !important; 
        }
        .concept-theme .btn-outline { 
          border: 1px solid white !important; 
          color: white !important; 
          background: transparent !important; 
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default SketchReveal;