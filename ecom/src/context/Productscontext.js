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
  products: [], //Products come in form of array of object
  featuredProducts: [],

  //States for single product:-
  isSingleProductLoading: false,
  isSingleProductError: false,
  SingleProduct: {}, //single product is an object
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //1st api call for All Products
  const getProductsData = async () => {
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

  //2nd api call for Single Product page
  const getSingleProductData = async (url) => {
    dispatch({ type: "LOADING_FOR_GETTING_SINGLE_PRODUCT_DATA" });
    try {
      const singleProductData = await axios.get(url);
      dispatch({
        type: "MY_API_DATA_FOR_SINGLE_PRODUCT",
        payload: singleProductData,
      });
    } catch (error) {
      dispatch({ type: "ERROR_IN_GETTING__API_DATA_FOR_SINGLE_PRODUCT" });
      console.log(
        "ERROR_IN_GETTING_API_DATA_FOR_SINGLE_PRODUCT (productscontext.js) ::",
        error
      );
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    //  getSingleProductData method will be called when we click on any single product
    <ProductContext.Provider value={{ ...state, getSingleProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
