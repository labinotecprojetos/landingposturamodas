import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Features from './components/Features';
import Gallery from './components/Collection';
import Showcase from './components/Showcase';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SEO from './components/SEO';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white font-sans selection:bg-brand-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Features />
        <Gallery />
        <Showcase />
        <Testimonials />
        <Location />
        <SEO />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;