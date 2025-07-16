import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    assetType: 'tree',
    cultivar: '',
    location: '',
    dna: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting payload:", formData);

    // TODO: Integrate with Motoko backend here
    // await registerAsset(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', color: 'green' }}>Landing Works!</h1>
      <h2>Register New Asset</h2>
                 
                        <img
        src="/olive-grove.jpg"
        alt="Olive Grove"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              name="assetType"
              value="tree"
              checked={formData.assetType === 'tree'}
              onChange={handleChange}
            />
            Tree
          </label>
          <label style={{ marginLeft: '1rem' }}>
            <input
              type="radio"
              name="assetType"
              value="seed"
              checked={formData.assetType === 'seed'}
              onChange={handleChange}
            />
            Seed
          </label>
        </div>

        <div>
          <label>Cultivar:</label>
          <input
            type="text"
            name="cultivar"
            value={formData.cultivar}
            onChange={handleChange}
            placeholder="Chemlali"
            required
          />
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Sfax, Tunisia"
            required
          />
        </div>

        <div>
          <label>DNA Hash:</label>
          <input
            type="text"
            name="dna"
            value={formData.dna}
            onChange={handleChange}
            placeholder="sha256:abc123..."
            required
          />
        </div>

        <button type="submit" style={{ marginTop: '1rem' }}>Register</button>
      </form>
    </section>
  );
};

export default Register;
