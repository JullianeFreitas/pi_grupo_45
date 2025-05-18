import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Avaliar from './pages/Avaliar';
import Bairro from './pages/Bairro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/avaliar" element={<Avaliar />} />
        <Route path="/bairro" element={<Bairro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
