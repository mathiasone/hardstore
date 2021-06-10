import React from 'react';
import Item from './Item';
import { useCart }  from '../contexts/CartContext';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cart = () => {

    const cartUsed = useCart();
    const productos = cartUsed.cart.addedItems;
    console.log(productos);

    return(        
        <>
            <div className="d-flex flex-row flex-wrap m-1 text-center">
                {
                    productos.map((p) => (
                        <>
                        <Item inline key={p.id}prod={p}/>
                        
                        </>
                    ))
                }
                {
                    productos.length !== 0 ?
                        <Button onClick={cartUsed.clear} variant="outline-dark" style={{ width: "240px"}} className="ml-4">LimpiarCarrito</Button> : null
                }    
            </div>

            <Link to="/">Volver al Inicio</Link> 
        </>
    );
}

export default Cart;