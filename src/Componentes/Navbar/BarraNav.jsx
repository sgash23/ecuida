import { useState} from "react";
import "./Navbar.css";
import logo from "../Navbar/logo.svg";
import { NavbarBrand, Button, Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function BarraNav() {
  const [showModal, setShowModal] = useState(false);



  return (
    <>
      <Navbar
        className="barra-nav"
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
          <img src={logo} className="img1"/>
          </Navbar.Brand>

   
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/Sobre">
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/Cuidadoras">
                Cuidadoras
              </Nav.Link>
              <Nav.Link as={Link} to="/Otros">
                Otros servicios
              </Nav.Link>
              <Nav.Link as={Link} to="/Contacto">
                Contacto
              </Nav.Link>
              <Button className='empleo' variant="info" as={Link} to="/Empleo">Empleo</Button>{' '}
            </Nav>
          </Navbar.Collapse>
    
          
        </Container>
      </Navbar>

    </>
  );
}

export default BarraNav;
