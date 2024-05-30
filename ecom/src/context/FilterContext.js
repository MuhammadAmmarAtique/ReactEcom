import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductsContext";
import reducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  isLoading: false,
  filterProducts: [],
  allProducts: [],
  // We will toggle this & based on it we will show products in 2 ways in main products page i.e gridview and listview 
  grid_view: true
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();

  useEffect(() => {
    dispatch({ type: "LOADING" });
    if (products && products.length > 0) {
      dispatch({
        type: "LOAD_PRODUCTS_DATA_IN_FILTER_CONTEXT_FROM_PRODUCT_CONTEXT",
        payload: products,
      });
    }
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
