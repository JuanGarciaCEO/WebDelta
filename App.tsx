
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Benefits from './components/Benefits';
import OfferSection from './components/OfferSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Benefits />
        <OfferSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
