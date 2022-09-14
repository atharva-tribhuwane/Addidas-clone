import React from "react";
// import { createContext } from "react";

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = React.useState(0);

  const handleCartCount = (val) => {
    setCartCount(cartCount + val);
  };
  return (
    <CartContext.Provider value={{ cartCount, handleCartCount }}>
      {children}
    </CartContext.Provider>
  );
};