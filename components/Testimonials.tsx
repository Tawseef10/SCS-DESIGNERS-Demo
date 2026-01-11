import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    text: "SCS transformed our Vasant Vihar villa into a masterpiece. The attention to detail and the way they played with natural light is unparalleled.",
    author: "Rajesh Khanna",
    project: "Vasant Vihar Residence"
  },
  {
    id: 't2',
    text: "Our corporate office in Cyber City now reflects our brand's prestige. Efficient, elegant, and professional execution from start to finish.",
    author: "Anita Singh",
    project: "Cyber City HQ"
  },
  {
    id: 't3',
    text: "True luxury is in the details. The SCS team understood our vision perfectly and delivered a home that feels both grand and intimate.",
    author: "Vikram Malhotra",
    project: "GK II Penthouse"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-scs-charcoal relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-12 flex justify-center">
             <div className="p-4 rounded-full bg-white/5 border border-scs-gold/20 text-scs-gold">
                <Quote size={32} className="fill-current opacity-50" />
             </div>
        </div>

        {/* Slider Container - Fixed height to prevent layout shifts */}
        <div className="relative h-[350px] md:h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute w-full px-4"
            >
              <blockquote className="font-serif text-xl md:text-3xl lg:text-4xl text-white leading-relaxed italic mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <cite className="not-italic text-scs-gold font-semibold tracking-widest uppercase text-sm">
                  {testimonials[currentIndex].author}
                </cite>
                <span className="text-gray-500 text-xs tracking-wider font-light">
                  {testimonials[currentIndex].project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-4">
            <button 
                onClick={prev} 
                className="p-3 rounded-full text-gray-500 hover:text-scs-gold hover:bg-white/5 transition-all duration-300"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-3">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-scs-gold w-8' : 'bg-gray-700 w-2 hover:bg-gray-600'}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>

            <button 
                onClick={next} 
                className="p-3 rounded-full text-gray-500 hover:text-scs-gold hover:bg-white/5 transition-all duration-300"
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </section>
  );
};