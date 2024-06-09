// Context#3

import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import reducer from "../reducers/CartReducer";

export const CartContext = createContext();

const initialState = {};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider
     value={{ ...state }}>
        {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
