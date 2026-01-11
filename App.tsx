import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-scs-charcoal text-scs-cream font-sans selection:bg-scs-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;