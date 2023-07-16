import React from 'react';
import './Empleo.css';
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


            {/*   PORQUÉ ELEGIR ECUIDA  */}
            <div className='seccion1'>
                <div className='titulo'><h4>¿Porqué elegir Ecuida?</h4></div>
            </div>
            <hr></hr>
            <div className='elegir'>
                <div className='item-e'>
                    <span>Selección específica del cuidador</span>
                    <img className='img-e' src={seleccion} alt="seleccion" />
                </div>
                <div className='item-e'>
                    <span>Garantía ilimitada de situaciones</span>
                    <img className='img-e' src={sustitucion} alt="sustitucion" />
                </div>
                <div className='item-e'>
                    <span>Hacemos todos los trámites administrativos</span>
                    <img className='img-e' src={reportes} alt="reportes" />
                </div>
                <div className='item-e'>
                    <span>Atención las 24 horas del día</span>
                    <img className='img-e' src={atencion} alt="atencion" />
                </div>
                <div className='item-e'>
                    <span>Nos preocupa brindar servicio de calidad</span>
                    <img className='img-e' src={calidad} alt="calidad" />
                </div>
            </div>
            <hr></hr>
        
            {/*   PORQUÉ COMO TE AYUDAMOS  */}
            <div className='seccion2'>
                <div className='titulo'><h4>¿Cómo te ayudamos?</h4></div>
            </div>
            <hr></hr>
            <div className='teAyudamos'>
            <div className='item-a'>
                    <img className='img-a' src={cuidadora} alt="seleccion" />
                    <h5 className='titulo-teAyudamos'>ENCONTRAMOS  AL PROFESIONAL IDEAL</h5>
                    <p className='origen'>Encontramos a tu cuidador/a ideal a la que contratas directamente para sentir mayor cercanía.</p>
                </div>
                <div className='item-a'>
                    <img className='img-a' src={administrativa} alt="sustitucion" />
                    <h5 className='titulo-teAyudamos'>REALIZAMOS TODOS LOS TRÁMITES</h5>
                    <p className='origen'>Nos encargamos de todos los trámites para la contratación: seguridad social, contrato, nóminas, etc.</p>                    
                </div>
                <div className='item-a'>
                    <img className='img-a' src={telefonista} alt="reportes" />
                    <h5 className='titulo-teAyudamos'>SEGUIMIENTO DEL SERVICIO EFECTUADO</h5>
                    <p className='origen'>Hacemos un seguimiento del servicio para asegurarnos de que es satisfactorio y sustituimos tu cuidador/a cuando sea necesario.</p>                    
                </div>
            </div>


            {/*   CUIDAO DE ADULTOS MAYORES  */}
            <div className='countainer'>
            <div className="introduccion">
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="more-info-content">
                                <div className="row">
                                    <div className="col-md-6 align-self-center">
                                        <div className="right-content">
                                            <span><em>En Ecuida;</em></span>
                                            <h2>Cuidado de personas mayores</h2>
                                            <p>Estamos especializados en el cuidado de personas mayores, y te ayudamos encontrando el/la cuidadora ideal, 
                                                y ocupándonos de todas las gestiones administrativas para que estés tranquilo/a y tus seres queridos felices.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="left-image">
                                            <img src={cuidados} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div> 















        </div>
    )
}

export default Inicio