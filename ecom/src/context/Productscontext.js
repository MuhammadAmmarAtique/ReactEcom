import React from "react";
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer";

export const ProductContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
};

export const ProductContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const getdata = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "https://api.pujakaitem.com/api/products"
      );
      const products = await response.data;
      dispatch({ type: "MY_API_DATA(PRODUCTS)", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR_IN_GETTING_API_DATA" });
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <ProductContext.Provider value={{ ...state }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
