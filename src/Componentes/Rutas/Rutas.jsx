import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Inicio from '../../Paginas/Inicio/Inicio';
import Sobre from '../../Paginas/Sobre/Sobre';
import Cuidadoras from '../../Paginas/Cuidadoras/Cuidadoras';
import Otros from '../../Paginas/Otros/Otros';
import Contacto from '../../Paginas/Contacto/Contacto';
import Empleo from '../../Paginas/Empleo/Empleo';
import BarraNav from "../Navbar/BarraNav";
import Footer from '../Footer/Footer';


const Rutas = () => {
    return (
     <BrowserRouter>
  
        <BarraNav />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Cuidadoras" element={<Cuidadoras />} />
          <Route path="/Otros" element={<Otros />} />
          <Route path="/Contacto" element={<Contacto />} /> 
          <Route path="/Empleo" element={<Empleo />} /> 
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    )
  };
  
  export default Rutas;