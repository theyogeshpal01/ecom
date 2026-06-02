import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product'; // We will create this
import Enquiry from './pages/Enquiry/Enquiry';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/:id/enquiry" element={<Enquiry />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
