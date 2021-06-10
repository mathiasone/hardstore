import React from 'react';
import Item from './Item';
import { useCart }  from '../contexts/CartContext';
import {Button} from 'react-bootstrap';


const Cart = () => {

    const cartUsed = useCart();
    const productos = cartUsed.cart.addedItems;

    const clearCart = () => {
        cartUsed.clear();
    }

    const removeItem = (pid) => {
        console.log("Hola", pid)
        cartUsed.removeItem(pid);
    }

    return(        
        <>
            <div className="d-flex flex-row flex-wrap m-1 text-center">
                {
                    productos.map((p) => (
                        <>
                        <Item inline key={p.id}prod={p}/>
                        <Button onClick={() => removeItem(p.id)} variant="outline-success" style={{ width: "150px", height: "50px"}} className="mr-auto">Remove</Button>
                        </>
                    ))
                }
            </div>
            <Button onClick={clearCart} variant="outline-success" style={{ width: "240px"}} className="mr-auto">LimpiarCarrito</Button>
        </>
    );
}

export default Cart;