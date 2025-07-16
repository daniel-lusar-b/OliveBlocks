import React from 'react';
import '../css/Landing.css';

const Hero = () => {
  return (
    <section className="hero">

            <div className="hero-overlay">

      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿 Welcome to OliveChain</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
        Tokenize, trace, and trade your olive trees and seeds on the blockchain.
      </p>
       <div className="cta-buttons">
          <a href="/farmer" className="cta-button">I'm a Farmer</a>
          <a href="/investor" className="cta-button secondary">I'm an Investor</a>
        </div>
        </div>
    </section>
  );
};

export default Hero;
