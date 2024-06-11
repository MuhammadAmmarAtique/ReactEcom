// Context#3

import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import reducer from "../reducers/CartReducer";
import { useEffect } from "react";

export const CartContext = createContext();

const initialState = {
  cart: [],
  totalItem: "",
  totalAmount: "",
  shippingFees: 5000,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("state: ", state);

  const addToCart = (color, amount, Product) => {
    return dispatch({
      type: "ADD_PRODUCT_IN_CART",
      payload: {color, amount, Product },
    });
  };

  const RemoveCartProduct = (id)=>{
     return dispatch({type:"REMOVE_PRODUCT_FROM_CART", payload:id})
  }

  //Initial update
  useEffect(()=>{
  let localStorageProducts = JSON.parse(localStorage.getItem('Products') || []);
  dispatch({type:"LOAD_PRODUCTS_FROM_LOCAL_STORAGE_INTO_CART", payload:localStorageProducts })
  },[])

  //Adding Products in local storage
 useEffect(()=>{
  localStorage.setItem("Products", JSON.stringify(state.cart))
 },[state.cart])




  return (
    <CartContext.Provider value={{ ...state, addToCart, RemoveCartProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
