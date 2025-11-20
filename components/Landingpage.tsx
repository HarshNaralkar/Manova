import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground2';
import Button from './Button';
import SketchReveal from './SketchReveal';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Image paths from public folder - Vite serves these from root in dev mode
  const imagePaths = {
    colorImg: "img2.jfif",
    sketchImg: "Portfolioimg1.jfif"
  };
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      
      {/* 3D Background - Subtle and behind everything */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <ThreeBackground />
      </div>

      {/* 
          Full Screen Interactive Reveal 
           Images are served from the public folder
      */}
      <SketchReveal 
         realSrc={imagePaths.colorImg}
         sketchSrc={imagePaths.sketchImg}
         className="h-full w-full"
      >
        {/* Content is rendered identically in both layers */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 20}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            {/* Top Decor */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="h-16 w-[1px] divider"></div>
              <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-80">
                Est. 2025
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold leading-[0.9] mb-6 tracking-tight relative">
              MANOVAA <br />
              {/* <span className="italic font-light accent-text text-5xl md:text-7xl block mt-2">By Saloni</span> */}
            </h1>
            
            {/* Description */}
            <p className="leading-relaxed max-w-xl text-sm md:text-base mb-10 font-light mx-auto opacity-90">
              By Saloni
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center mb-16">
              <Button className="btn-primary px-10 py-4 shadow-xl">
                View Portfolio
              </Button>
              <Button className="btn-outline px-10 py-4">
                Book Consultation
              </Button>
            </div>

            {/* Interactive Instruction */}
            <motion.div 
              className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
               {/* <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center animate-pulse">
                  <ArrowRight size={14} className="icon-current" />
               </div> */}
               {/* <div className="text-left">
                 <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5">Interactive View</p>
                 <p className="text-[10px] opacity-80 leading-tight">Drag the slider to reveal the process.</p>
               </div> */}
            </motion.div>

          </motion.div>
        </div>
      </SketchReveal>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 pointer-events-none mix-blend-difference text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {/* <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span> */}
        <div className="h-12 w-[1px] bg-white"></div>
      </motion.div>
    </section>
  );
};

export default Hero;