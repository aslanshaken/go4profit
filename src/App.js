import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Trucking from './Components/Trucking/Trucking';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trucking" element={<Trucking />} />
      </Routes>
    </div>
  );
}

export default App;
