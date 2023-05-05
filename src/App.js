import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vendre from './components/vendeur/Vendre';
import Acheter from './components/acheteur/Acheter';
import Livrer from './components/livreur/Livrer'
function App() {
  return (
    <div >
  
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vendre" element={<Vendre />} />
      <Route path="/acheter" element={<Acheter />} />
      <Route path="/livrer" element={<Livrer />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;