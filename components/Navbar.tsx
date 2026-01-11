import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen ? 'bg-scs-charcoal/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
          <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-white">
                  SCS <span className="text-scs-gold">INTERIOR</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">
                  & Associates
              </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {['Philosophy', 'Portfolio', 'Services'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest hover:text-scs-gold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20schedule%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-scs-gold text-scs-gold px-6 py-2 text-xs uppercase tracking-widest hover:bg-scs-gold hover:text-black transition-all duration-300"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-scs-gold transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen Redesign */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
          >
            <motion.div
              className="flex flex-col items-center space-y-8 text-center"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {['Philosophy', 'Portfolio', 'Services'].map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl text-white hover:text-scs-gold transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: 20, opacity: 0 }
                }}
                className="pt-8"
              >
                <a
                  href="https://wa.me/919876543210?text=Hi,%20I'd%20like%20to%20schedule%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-scs-gold text-scs-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-scs-gold hover:text-black transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};