import { React, useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const EMPTY_CART = {
  addedItems: [],
  totalPrice: 0,
  totalItems: 0
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(EMPTY_CART);

  const addItemToCart = (item) => { 
    
    setCart({ ...cart, addedItems: [...cart.addedItems, item] });
   
  };

  const clear = () => {
    setCart(EMPTY_CART);
  };

  const removeItem = (id) => {
    const filteredItems = cart.addedItems.filter(i => i.id !== id)

    setCart({ ...cart, addedItems: filteredItems });
  };

  const isInCart = (id) => {
    if (cart.addedItems.some((addedItem) => addedItem.id === id)) {return true;}

    return false;
  };

  const cartItemCounter = () => {
    //console.log((cart.addedItems.reduce((c,q) =>  c = Number(c) + Number(q.quantity) , 0 )))
    if(cart.addedItems){
      cart.totalItems = cart.addedItems.reduce((c,q) =>  c = Number(c) + Number(q.quantity) , 0 );
      return (cart.addedItems.reduce((c,q) =>  c = Number(c) + Number(q.quantity) , 0 ));
    }else{
      return 0;
    }
      


  };

  const cartTotalPrice = () => {
    //console.log((cart.addedItems.reduce((a,v) =>  a = Number(a) + Number(v.precio) , 0 )))
    //(cart.addedItems.reduce((a,v) =>  a = Number(a) + Number(v.precio) , 0 ));
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, clear, removeItem, isInCart, cartItemCounter, cartTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
