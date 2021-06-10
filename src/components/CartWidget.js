import React from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';


const CartWidget = ({size, color}) => {
    return(        
        
        <Link to="/cart/" style={{textDecoration: 'none'}}>
            <GiShoppingCart size={size} color={color} className="mx-5"/>
        </Link>
        
    );
}

export default CartWidget;