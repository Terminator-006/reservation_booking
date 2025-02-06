import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ConfirmedSlots from './pages/confirmedSlot';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirmed-slots" element={<ConfirmedSlots />} />
      </Routes>
    </Router>
  );
};

export default App;