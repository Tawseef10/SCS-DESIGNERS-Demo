import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Maximize2 } from 'lucide-react';
import { Project } from '../types';

// Enhanced project data with descriptions and gallery images
const projects: Project[] = [
  {
    id: 'p1',
    title: 'SCS Signature Lounge',
    location: 'Jasola Project',
    category: 'Residential',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOdYfgeVAmzwlvrDeQ19WzThoKv7VJ1TVPoVps=s680-w680-h510-rw',
    description: "A masterpiece of contemporary design in Jasola. This lounge features bespoke Italian furniture and a custom-designed lighting array that transforms the mood seamlessly from day to night. The space is designed to be both a grand entertaining area and a cozy family retreat.",
    features: ["Imported Italian Marble Flooring", "Lutron Automation System", "Bespoke Velvet Upholstery", "Custom Gold-Leaf Ceiling Details"],
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 'p2',
    title: 'The Onyx Interior',
    location: 'Vasant Vihar',
    category: 'Residential',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMSy-vaQUGCB6rqsvoUlkqvba9Nea8su-mdxFk=s680-w680-h510-rw',
    description: "Located in the heart of Vasant Vihar, this residence uses semi-precious Onyx stone backlighting to create an ethereal ambiance. The interplay of natural wood and stone textures creates a warm, grounding environment amidst the city's hustle.",
    features: ["Backlit Onyx Feature Walls", "Teak Wood Paneling", "Gold-finished Sanitary Fixtures", "Smart Climate Control"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 'p3',
    title: 'Apex Detail Work',
    location: 'Gurgaon Cyber City',
    category: 'Corporate',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOQU47HYLTlRR4Kp9e7HUXz2yXQVm_Ye6VUM7k=s680-w680-h510-rw',
    description: "A corporate headquarters in Cyber City designed to inspire. Minimalist lines meet ergonomic luxury. We focused on creating acoustic zones for privacy while maintaining an open-plan feel that encourages collaboration.",
    features: ["Acoustic Sound Paneling", "Ergonomic Herman Miller Seating", "Biophilic Design Elements", "Automated Conference Systems"],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 'p4',
    title: 'Executive Suite',
    location: 'GK II Enclave',
    category: 'Corporate',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOeGj8W0bhpcAmPIo-GeHGvt-cu4TShb7ktA7w=s680-w680-h510-rw',
    description: "A private executive enclave in GK II. Designed for privacy and prestige, this suite combines dark wood tones with brushed brass accents to convey authority and sophistication.",
    features: ["Sound-proof Glass Partitions", "Private Bar & Lounge Area", "Smart Glass Technology", "Hand-tufted Persian Rugs"],
    gallery: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when project is selected
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 bg-scs-slate overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-scs-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">
              Selected Works
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white">
              Curated Spaces
            </h2>
          </div>
          <a 
            href="https://wa.me/919876543210?text=I'm%20interested%20in%20viewing%20your%20full%20project%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-scs-gold transition-colors"
          >
            View All Projects <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`card-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer rounded-sm"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              
              <motion.img
                layoutId={`project-image-${project.id}`}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay - Only visible when not selected */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8"
              >
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-scs-gold text-xs uppercase tracking-widest mb-2 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                            {project.category}
                        </span>
                        <motion.h3 
                            layoutId={`project-title-${project.id}`}
                            className="text-2xl font-serif text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150"
                        >
                            {project.title}
                        </motion.h3>
                        <p className="text-gray-300 text-sm font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                            {project.location}
                        </p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                        <Maximize2 size={20} className="text-white" />
                    </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-12 text-center md:hidden">
            <a 
                href="https://wa.me/919876543210?text=I'm%20interested%20in%20viewing%20your%20full%20project%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-scs-gold transition-colors"
            >
                View All Projects <ArrowUpRight size={16} />
            </a>
        </div>
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 lg:p-8">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute inset-0 bg-black/95 backdrop-blur-md"
                />

                {/* Card Modal */}
                <motion.div
                    layoutId={`card-container-${selectedProject.id}`}
                    className="w-full max-w-6xl max-h-[100vh] md:max-h-[90vh] bg-scs-charcoal overflow-y-auto overflow-x-hidden relative rounded-none md:rounded-lg shadow-2xl border border-white/5 scrollbar-hide"
                >
                    {/* Close Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(null);
                        }}
                        className="absolute top-6 right-6 z-30 p-2 bg-black/50 hover:bg-scs-gold hover:text-black text-white rounded-full transition-colors duration-300 backdrop-blur-sm"
                    >
                        <X size={24} />
                    </motion.button>

                    {/* Hero Section of Modal */}
                    <div className="relative h-[40vh] md:h-[60vh] w-full">
                        <motion.img
                            layoutId={`project-image-${selectedProject.id}`}
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-scs-charcoal via-transparent to-transparent opacity-90" />
                        
                        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-scs-gold uppercase tracking-[0.2em] text-sm font-semibold mb-2 block"
                            >
                                {selectedProject.category} — {selectedProject.location}
                            </motion.span>
                            <motion.h2 
                                layoutId={`project-title-${selectedProject.id}`}
                                className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight"
                            >
                                {selectedProject.title}
                            </motion.h2>
                        </div>
                    </div>

                    {/* Content Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12"
                    >
                        {/* Left Column: Description & Gallery */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h3 className="text-white uppercase tracking-widest text-sm font-semibold mb-6 border-l-2 border-scs-gold pl-4">
                                    Project Vision
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed font-light">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Additional Gallery */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedProject.gallery?.map((img, i) => (
                                    <img 
                                        key={i} 
                                        src={img} 
                                        alt={`Gallery ${i}`} 
                                        className="w-full h-64 object-cover rounded-sm hover:opacity-90 transition-opacity" 
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Details & Features */}
                        <div className="lg:col-span-1 space-y-10">
                            <div className="bg-white/5 p-8 rounded-sm border border-white/5">
                                <h3 className="text-white font-serif text-2xl mb-6">Key Features</h3>
                                <ul className="space-y-4">
                                    {selectedProject.features?.map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-400 font-light text-sm">
                                            <span className="text-scs-gold mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-scs-gold block flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <p className="text-gray-500 text-xs uppercase tracking-widest text-center">Interested in this style?</p>
                                <a 
                                    href={`https://wa.me/919876543210?text=I'm%20interested%20in%20discussing%20the%20${selectedProject.title}%20project.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 bg-scs-gold text-black text-center uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-colors duration-300"
                                >
                                    Inquire Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};