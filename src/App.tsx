import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './component/Home.tsx';
import About from './component/About.tsx';
import Navabr from './component/Navbar.tsx';
import Bookdata from './component/Bookdata.tsx';
import Morefilter from './component/Morefilter.tsx';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
           <Navabr />
      <Routes>
         <Route path="/" element={< Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/Bookdata" element={<Bookdata />} />
         <Route path="/Morefilter" element={<Morefilter />} />
      </Routes>
    </Router>
  );
};

export default App;
