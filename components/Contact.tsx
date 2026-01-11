import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-scs-charcoal relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-scs-gold uppercase tracking-[0.2em] text-xs font-bold mb-4">
              Visit Our Showroom
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-12">
              Experience Luxury <br /> <span className="italic text-gray-500">In Person</span>
            </h2>
            
            <div className="space-y-10">
               {/* Address */}
               <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-white/5 rounded-full text-scs-gold border border-white/10 group-hover:border-scs-gold transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-2">Location</h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      Jasola District Centre, <br/>New Delhi, Delhi 110025
                    </p>
                  </div>
               </div>

               {/* Phone */}
               <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-white/5 rounded-full text-scs-gold border border-white/10 group-hover:border-scs-gold transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-2">Contact</h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      <a href="tel:+919876543210" className="hover:text-white transition-colors block">+91 98765 43210</a>
                      <a href="mailto:contact@scsinteriors.com" className="hover:text-white transition-colors block mt-1">contact@scsinteriors.com</a>
                    </p>
                  </div>
               </div>

               {/* Hours */}
               <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-white/5 rounded-full text-scs-gold border border-white/10 group-hover:border-scs-gold transition-colors duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-2">Showroom Hours</h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      Mon - Sat: 10:00 AM - 7:00 PM<br/>
                      Sunday: By Appointment Only
                    </p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="h-[500px] w-full rounded-sm overflow-hidden relative border border-white/10 group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.662867882256!2d77.2831!3d28.5496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c6298533b1%3A0x62c0406830501869!2sJasola%20District%20Centre%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SCS Interior Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-scs-gold z-20" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-scs-gold z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};