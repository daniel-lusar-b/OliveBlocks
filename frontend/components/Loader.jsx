import React from 'react';

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      backgroundColor: '#f7f5ef'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '8px solid #ccc',
        borderTop: '8px solid #4a7c59',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{ marginTop: '1rem' }}>Loading OliveChain...</p>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
