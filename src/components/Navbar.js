import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import CartWidget from './CartWidget';
import CotizacionBitcoin from './CotizacionBitcoin';
import CotizacionDolar from './CotizacionDolar';

const MyNavbar = () => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Hard-Store®</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/category/1">Fuentes</NavDropdown.Item>
                        <NavDropdown.Item href="/category/2">Cooling</NavDropdown.Item>
                        <NavDropdown.Item href="/category/3">Gabinetes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Todos los productos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Form inline className="mr-5">
                        <FormControl style={{width: "350px"}} type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" className="mr-sm-2">Search</Button>
                    </Form>
                
                    <div className="m-auto">    
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