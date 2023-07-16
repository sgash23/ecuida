import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';

export const Footer = () => {
  return (
    
      <div className="sup">
          <div className="container">
              <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
                  <div className="col mb-3">
                      <a href="/" className="d-flex align-items-center mb-3  ">
                          <img className="bi me-2" width="140" height="110" src={logo}></img>
                      </a>
                      <p className='pfooter'>Derechos reservados</p>
                      <p className='pfooter'>&copy; ECUIDA - Sgash 2023</p>
                  </div>

                  <div className="col mb-5">
                      <h5>Atención al cliente</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item mb-2">0099-4456-2132</li>
                          <li className="nav-item mb-2">0877-3698-2133</li>
                          <li className="nav-item mb-2">Lu-Vi de 09:00 a 18:00</li>
                          <li className="nav-item mb-2">Sa de 09:00 a 13:00</li>

                      </ul>
                  </div>

                  <div className="col mb-5">
                      <h5>Venta telefónica</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item mb-2">0099-4456-2132</li>
                          <li className="nav-item mb-2">Lu-Vi de 08:00 a 20:00</li>
                          <li className="nav-item mb-2">Sa-Do-Fer. de 09:00 a 21:00</li>
                      </ul>
                      <h5>Cobros</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item mb-2">cobranza@reactech.ar</li>
                      </ul>
                  </div>

                  <div className="col mb-5">
                      <h5>Servicio a Empresas</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item mb-2">Ventas corporativas</li>
                          <li className="nav-item mb-2">Programas especiales</li>
                          <li className="nav-item mb-2">Planes</li>
                      </ul>
                  </div>

                  <div className="col mb-5">
                      <h5>Paginación</h5>
                      <ul className="nav flex-column">
                          <a href="./Inicio.jsx" ><li className="nav-item mb-2">Inicio</li></a>
                          <a href="./Inicio.jsx" ><li className="nav-item mb-2">Sobre nosotros</li></a>
                          <a href="./Inicio.jsx" ><li className="nav-item mb-2">Cuidadoras</li></a>
                          <a href="./Inicio.jsx" ><li className="nav-item mb-2">Otros Servicios</li></a>
                          <a href="./Inicio.jsx" ><li className="nav-item mb-2">Contacto</li></a>
                          <a href="./Inicio.jsx" ><li className="nav-item mb-2">Empleos</li></a>
                      </ul>
                  </div>
              </footer>
          </div>
      </div>



  )
}

export default Footer;