import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedArticles from './components/FeaturedArticles';
import Tutorials from './components/Tutorials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Hero />
        <FeaturedArticles />
        <Tutorials />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
