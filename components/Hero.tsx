import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [isNight, setIsNight] = useState(false);

  // Using high-resolution (2500px+) images to ensure the hero section is crisp and not blurry.
  const dayImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop";
  const nightImage = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2500&auto=format&fit=crop";

  return (
    <section id="philosophy" className="relative h-screen w-full overflow-hidden">
      {/* Background Images Layer */}
      <div className="absolute inset-0 w-full h-full">
        {/* Day Image (Always present at bottom) */}
        <img
          src={dayImage}
          alt="Luxury Interior Day View"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
        />
        
        {/* Night Image (Fade in/out on top) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isNight ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={nightImage}
            alt="Luxury Interior Ambient View"
            className="w-full h-full object-cover"
          />
          {/* Night Overlay to make text pop more at night */}
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </motion.div>

         {/* General Dark Overlay for Text Readability */}
         <div className={`absolute inset-0 transition-colors duration-1000 ${isNight ? 'bg-black/20' : 'bg-black/10'}`} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-[1px] w-12 bg-scs-gold"></div>
            <span className="text-scs-gold uppercase tracking-[0.3em] text-sm font-semibold">
              South Delhi Premium
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white mb-8 drop-shadow-2xl">
            Redefining <br/>
            <span className="italic text-scs-gold font-light">Luxury</span> Living
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed drop-shadow-md">
            Experience the duality of design. Where structural elegance meets ambient warmth.
          </p>

          <Button onClick={() => window.open('https://wa.me/919876543210?text=Hi,%20I\'d%20like%20to%20schedule%20a%20consultation.', '_blank')}>
            Schedule a Consultation via WhatsApp
          </Button>
        </motion.div>
      </div>

      {/* Mood Toggle Control */}
      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20 flex flex-col items-center md:space-y-4">
        {/* Container: Horizontal on mobile, Vertical on Desktop */}
        <div className="bg-black/20 backdrop-blur-xl p-1.5 rounded-full border border-white/10 flex flex-row md:flex-col items-center gap-2 shadow-2xl">
            <button
                onClick={() => setIsNight(false)}
                className={`p-3 rounded-full transition-all duration-500 ${!isNight ? 'bg-scs-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'text-white/50 hover:text-white'}`}
                aria-label="Day Mode"
            >
                <Sun size={20} />
            </button>
            <button
                onClick={() => setIsNight(true)}
                className={`p-3 rounded-full transition-all duration-500 ${isNight ? 'bg-indigo-900 text-white shadow-[0_0_15px_rgba(49,46,129,0.5)]' : 'text-white/50 hover:text-white'}`}
                aria-label="Night Mode"
            >
                <Moon size={20} />
            </button>
        </div>
        
        {/* Label: Hidden on mobile */}
        <span className="hidden md:block text-[10px] uppercase tracking-widest text-white/60 rotate-90 origin-left translate-x-3 translate-y-8 whitespace-nowrap">
            Mood Lighting
        </span>
      </div>
    </section>
  );
};