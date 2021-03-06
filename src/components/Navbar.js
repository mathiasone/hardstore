import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import CartWidget from './CartWidget';
import CotizacionBitcoin from './CotizacionBitcoin';
import CotizacionDolar from './CotizacionDolar';
import { Link } from 'react-router-dom';


const MyNavbar = () => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Hard-Store®</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <NavDropdown.Item><Link to="/category/1">Fuentes</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/category/2">Cooling</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/category/2">Gabinetes</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/">Todos los productos</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Form inline className="mr-5">
                        <FormControl style={{width: "350px"}} type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" className="mr-sm-2">Search</Button>
                    </Form>
                
                    <div classname="my-auto">    
                        <CotizacionDolar/>
                        <CotizacionBitcoin/>
                    </div>

                    <CartWidget size={40} color={'white'} />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;