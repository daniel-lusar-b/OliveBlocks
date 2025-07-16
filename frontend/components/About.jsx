import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#f4f4f4',
        color: '#333',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Us</h2>
      <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
        OliveChain is a pioneering initiative leveraging blockchain and biotechnology to bring transparency,
        sustainability, and innovation to Tunisia's olive industry. From molecularly certified olive trees
        to climate-smart cross-pollinated seeds, we empower farmers, investors, and consumers through traceable
        digital tokens and verifiable provenance data.
      </p>
    </section>
  );
};

export default About;
