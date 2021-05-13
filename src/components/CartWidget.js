import React from 'react';
import { GiShoppingCart } from "react-icons/gi";

const MyCartWidget = ({size, color}) => {
    return(        
        <GiShoppingCart size={size} color={color}/>
    );
}

export default MyCartWidget;