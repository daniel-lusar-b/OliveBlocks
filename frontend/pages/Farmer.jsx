import React from 'react';
import '../css/Farmer.css'; // Optional: Move styles here if separating CSS


const Farmer = () => {
  const handleTokenizeSingle = () => {
    alert('Single tree tokenization flow will start here');
    // TODO: Connect to Motoko canister
  };

  const handleTokenizeBatch = () => {
    alert('Batch tokenization flow will start here');
  };

  const handleLogHarvest = () => {
    alert('Log harvest flow will start here');
  };

  const handleVerifyQuality = () => {
    alert('Verify quality flow will start here');
  };

  return (
    <div>
      <header className="farmer-header">
        <h1>OliveChain Farmer Portal - JS-TEST</h1>
          <h1 style={{ textAlign: 'center', color: 'green' }}>Landing Works!</h1>
        <button onClick={() => (window.location.href = '/')}>Back to Home</button>
      </header>

      <div className="container">
        <div className="tree-stats">
          <div className="stat">
            <div className="stat-value">142</div>
            <div className="stat-label">Total Trees</div>
          </div>
          <div className="stat">
            <div className="stat-value">87</div>
            <div className="stat-label">Tokenized</div>
          </div>
          <div className="stat">
            <div className="stat-value">₳1,250</div>
            <div className="stat-label">Earned</div>
          </div>
        </div>

        <div className="dashboard">
          <div className="card">
            <h2>Tokenize New Trees</h2>
            <p>Register your olive trees on the blockchain to create tradable assets</p>
            <div className="action-buttons">
              <button onClick={handleTokenizeSingle}>Tokenize Single Tree</button>
              <button onClick={handleTokenizeBatch}>Tokenize Batch</button>
            </div>
          </div>

          <div className="card">
            <h2>Your Tokenized Trees</h2>
            <div className="tree-list">
              <div className="tree-item">
                <span>Tree #OLV-42</span>
                <span>12 Tokens</span>
              </div>
              <div className="tree-item">
                <span>Tree #OLV-87</span>
                <span>8 Tokens</span>
              </div>
              <div className="tree-item">
                <span>Tree #OLV-103</span>
                <span>15 Tokens</span>
              </div>
            </div>
            <button>View All</button>
          </div>

          <div className="card">
            <h2>Harvest Management</h2>
            <p>Log your harvest data to update token values</p>
            <div className="action-buttons">
              <button onClick={handleLogHarvest}>Log Harvest</button>
              <button onClick={handleVerifyQuality}>Verify Quality</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farmer;
