import React from "react";
import axios from "axios";
import { createContext, useContext, useEffect } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const getdata = async () => {
    const response = await axios
      .get("https://api.pujakaitem.com/api/products")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

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
