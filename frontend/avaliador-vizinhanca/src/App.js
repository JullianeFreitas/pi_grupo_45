import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Avaliar from './pages/Avaliar';
import Bairro from './pages/Bairro';
import Avaliacoes from './pages/Avaliacoes';
import RotaPrivada from './components/RotaPrivada';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/avaliar" element={<RotaPrivada> <Avaliar /> </RotaPrivada>} />
        <Route path="/bairro" element={<Bairro />} />
        <Route path="/avaliacoes/:id" element={<Avaliacoes />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>

  );
}

export default App;
