import {React} from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useCart }  from '../contexts/CartContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const CartNumber = styled.div`
  color: white;
  background: red;
  padding: 3px;
  border-radius: 50%;
  font-size: 12px;
`;

const CartWidget = ({size, color}) => {

    const cartUsed = useCart();
    cartUsed.cartItemCounter();
    //cartUsed.cartTotalPrice();

    return(        
        <Container>
          {cartUsed.cart.totalItems ?
          <>
            <Link to="/cart/" style={{textDecoration: 'none'}}>
            <GiShoppingCart size={size} color={color} />
            </Link>
            <CartNumber>{cartUsed.cart.totalItems}</CartNumber>
          </>  
            :
            null
          }
            

            
        </Container>
        
    );
}

export default CartWidget;