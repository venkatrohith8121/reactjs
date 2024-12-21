import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home';
import Contact from './Contact/Contactapp';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </div>
);

export default App;
