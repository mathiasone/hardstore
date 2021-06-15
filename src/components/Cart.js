import React from 'react';
import Item from './Item';
import { useCart }  from '../contexts/CartContext';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  div,
  button {
    font-size: 32px;
  }
`;

const NoItemsDiv = styled.div`
    color: black;
    margin: 10px auto 0;
    padding: 10px;
    border-radius: 10px;
    width: 75%;
    background: #ccff33;
    font-weight: bold;
`;

const BackToHome = styled.div`
    color: #ccff33;
    padding: 10px;
    border-radius: 10px;
    background: black;
    font-weight: bold;
    position: absolute;
    bottom: 10px;
    left: 45%;
`;

const Cart = () => {

    const cartUsed = useCart();
    const productos = cartUsed.cart.addedItems;
        
    return(        
        <>
            <div className="d-flex flex-row flex-wrap m-1 text-center">
                {
                    productos.map((p) => (
                        <>
                            <Item inline key={p.id}  prod={p}/>
                        </>
                    ))
                }
                {
                        productos.length !== 0 ?
                            <Button onClick={cartUsed.clear} variant="outline-dark" style={{ width: "240px"}} className="ml-4">LimpiarCarrito</Button>
                        : 
                            <NoItemsDiv>No hay productos en su carrito</NoItemsDiv>
                    
                } 
            </div>

            <Container>
                <Link to="/"><BackToHome>Volver al inicio</BackToHome></Link> 
            </Container>
        </>
    );
}

export default Cart;