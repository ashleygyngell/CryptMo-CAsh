import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Convert from './components/Convert';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Top100 from './components/Top100';
import CryptoCard from './components/CryptoCard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/top100" element={<Top100 />} />
        <Route path="/convert" element={<Convert />} />
        <Route path="/cryptocard" element={<CryptoCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
