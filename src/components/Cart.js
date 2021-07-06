import {React} from 'react';
import Item from './Item';
import { useCart }  from '../contexts/CartContext';
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const CardProduct = {
    width: '18rem',
    height: '32rem',
    background: 'grey',
    margin: '8px 16px'
};

const Cart = () => {

    const cartUsed = useCart();
    const productos = cartUsed.cart.addedItems;
    cartUsed.cartTotalPrice();
    
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
                    <>
                        <Card style={CardProduct}>
                            <h4 className="m-auto text-light"> Total: $ {cartUsed.cart.totalPrice}</h4>
                            <Link to="/cart/order/"><BackToHome>Generar orden de compra</BackToHome></Link> 
                        </Card>

                        <Card style={CardProduct}>
                            <Container className="m-auto">
                                <Button onClick={cartUsed.clear} style={{ background: "black", color: "#ccff33", border: "0"}} >Limpiar carrito</Button>
                                <Link to="/"><BackToHome>Volver al inicio</BackToHome></Link> 
                            </Container>
                        </Card>
                        
                    </>    
                    : 
                    <>
                        <Container className="m-auto">
                            <NoItemsDiv>No hay productos en su carrito</NoItemsDiv>
                            <Link to="/"><BackToHome>Volver al inicio</BackToHome></Link> 
                        </Container>
                    </>
                } 
            </div>
        </>
    );
}

export default Cart;