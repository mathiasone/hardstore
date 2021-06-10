import { React, useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [],
  totalPrice: 0
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE);

  const addItemToCart = (item) => {
    setCart({ ...cart, addedItems: [...cart.addedItems, item] });
  };

  const clear = () => {
    setCart(INITIAL_STATE);
  };

  const removeItem = (id) => {
    const filteredItems = cart.addedItems.filter(i => i.id !== id)

    setCart({ ...cart, addedItems: filteredItems });
  };

  const isInCart = (id) => {
    if (cart.addedItems.some((addedItem) => addedItem.id === id)) {return true;}

    return false;
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, clear, removeItem, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
