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

  const updateQuantity = (item, val) => {

    let temp_state = [...cart.addedItems];
    const index = temp_state.findIndex(i => i.id === item.id)
  
    let temp_element = { ...temp_state[index] };
    temp_element.quantity = item.quantity + val;
	  temp_state[index] = temp_element;

	  setCart({ ...cart, addedItems: temp_state });
    cartItemCounter();
    cartTotalPrice();
  };

  const cartItemCounter = () => {
    if(cart.addedItems){
      cart.totalItems = cart.addedItems.reduce((c,q) =>  c = Number(c) + Number(q.quantity) , 0 );
    }
  };

  const cartTotalPrice = () => {
    if(cart.addedItems){
      cart.totalPrice = cart.addedItems.reduce((a,v) =>  a = Number(a) + Number(v.precio*v.quantity) , 0 );
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, clear, removeItem, isInCart, cartItemCounter, cartTotalPrice, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
