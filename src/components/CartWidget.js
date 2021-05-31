import React from 'react';
import { GiShoppingCart } from "react-icons/gi";

const CartWidget = ({size, color}) => {
    return(        
        <GiShoppingCart size={size} color={color} className="mx-5" />
    );
}

export default CartWidget;