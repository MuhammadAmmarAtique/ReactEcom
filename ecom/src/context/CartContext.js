// Context#3

import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import reducer from "../reducers/CartReducer";

export const CartContext = createContext();

const initialState = {
  cart: [],
  totalItem: "",
  totalAmount: "",
  shippingFees: 5000,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (color, amount, Product) => {
    return dispatch({
      type: "HANDLE_ADD_TOCART",
      payload: {color, amount, Product },
    });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
