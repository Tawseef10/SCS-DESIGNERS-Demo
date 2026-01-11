import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f0f] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <span className="font-serif text-3xl font-bold tracking-widest text-white block mb-6">
                SCS <span className="text-scs-gold">INTERIOR</span>
            </span>
            <p className="text-gray-400 font-light max-w-sm leading-relaxed mb-8">
                Creating timeless spaces that embody elegance and functionality. 
                Serving South Delhi's elite residential and commercial sectors since 2010.
            </p>
            <div className="flex space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-scs-gold transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-scs-gold transition-colors">
                    <Facebook size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-scs-gold transition-colors">
                    <Linkedin size={20} />
                </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
                <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <div className="flex flex-col md:flex-row items-center gap-2">
                <p>&copy; {new Date().getFullYear()} SCS Interior & Associates. All rights reserved.</p>
                <span className="hidden md:block text-gray-800">|</span>
                <p>Made by <a href="https://dotvely.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-scs-gold transition-colors">Dotvely</a></p>
            </div>
            
            {/* Performance Badge */}
            <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:border-scs-gold/20 transition-colors cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-[10px] tracking-wide text-gray-400">
                    Dotvely Engine: 0.4s Load Speed.
                </span>
            </div>
        </div>
      </div>
    </footer>
  );
};