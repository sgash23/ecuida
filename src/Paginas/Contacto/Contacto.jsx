import React from 'react';
import './Contacto.css';
import logo from '../../assets/logo.svg';
import fondo from '../../assets/fondo.jpg';
import seleccion from '../../assets/seleccion.png';
import sustitucion from '../../assets/sustitucion.png';
import reportes from '../../assets/reportes.png';
import atencion from '../../assets/atencion.png';
import calidad from '../../assets/calidad.png';
import cuidadora from '../../assets/cuidadora.jpg';
import administrativa from '../../assets/administrativa.jpg';
import telefonista from '../../assets/telefonista.jpg';
import cuidados from '../../assets/cuidado-am.jpg'; 
import Button from 'react-bootstrap/Button';




export const Inicio = () => {
    return (
        <div className='contenedor'>
            



            {/*   IMAGEN DE INICIO  */}
            <div className='seccionImagen'>
            <img src={fondo} className='imgfondo'/>
            </div>

            {/*   SECCIÓN DE SERVICIOS  */}


          
            <hr></hr>
        
            {/*   PORQUÉ COMO TE AYUDAMOS  */}
            <div className='seccion2'>
                <div className='titulo'><h4>Contactanos</h4></div>
            </div>
            <hr></hr>












  






        </div>
    )
}

export default Inicio