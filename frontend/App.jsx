import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Farmer from './pages/Farmer';
import Investor from './pages/Investor';
import Register from './pages/Register';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
