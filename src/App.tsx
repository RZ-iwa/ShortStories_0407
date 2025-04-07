import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StoryList from './components/StoryList';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <Hero />
      <StoryList />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
