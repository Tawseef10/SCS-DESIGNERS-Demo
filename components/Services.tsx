import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Key } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'res',
    title: 'Residential Luxury',
    description: 'Bespoke interiors for villas and penthouses in South Delhi\'s most exclusive neighborhoods.',
    icon: Home
  },
  {
    id: 'corp',
    title: 'Corporate Spaces',
    description: 'High-performance work environments that blend brand identity with ergonomic luxury.',
    icon: Building2
  },
  {
    id: 'turn',
    title: 'Turnkey Solutions',
    description: 'End-to-end execution from conceptualization to the final styling touch.',
    icon: Key
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-scs-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-scs-gold uppercase tracking-[0.2em] text-xs font-bold mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-white"
          >
            Design Excellence
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 border border-white/5 hover:border-scs-gold/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="mb-6 text-scs-gold opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">
                <service.icon size={40} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif text-white mb-4 tracking-wide group-hover:text-scs-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};