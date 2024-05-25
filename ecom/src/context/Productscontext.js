import React from "react";
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer";

export const ProductContext = createContext();

// Inside our Home page's featured product section, we will show loading before data comes, if any error comes we will show
// error there, if data of products comes successfully we will extract featured products from data and show it there.
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
      // const response = await axios.get(
      //   "https://api.pujakaitem.com/api/products"
      // );
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=10"
      );
      const products = await response.data;
      dispatch({ type: "MY_API_DATA(PRODUCTS)", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR_IN_GETTING_API_DATA" });
      console.log("ERROR_IN_GETTING_API_DATA (productscontext.js) ::", error);
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
