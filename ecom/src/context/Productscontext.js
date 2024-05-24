import React  from "react";
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer"

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const getdata = async () => {
    const response = await axios
      .get("https://api.pujakaitem.com/api/products")
      .then((response) => {
        // console.log(response);
        const products = response.data;
        // console.log(products);

        dispatch({products})
      })
      .catch((error) => {
        console.log("Error from ProductContextProvider method in ProductContext.js ",error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  //usereducer hook

  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: []
  }

 
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("seeing datat in state",state);

  return (
    <>
      <ProductContext.Provider value={"ammar"}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
