import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductsContext";
import reducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  isLoading: false,
  allProducts: [],
  filterProducts: [],
  // We will toggle this & based on it we will show products in 2 ways in main products page i.e gridview and listview
  grid_view: true,
  sortingValue: "lowest",//by seeing this we are filtering Products based on price and title characters (a to z or z to a)
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();  //products are coming in form of array of objects.

  useEffect(() => {
    dispatch({ type: "LOADING" });
    dispatch({type: "LOAD_PRODUCTS_DATA_IN_FILTER_CONTEXT_FROM_PRODUCT_CONTEXT",payload: products,});
  }, [products]);

  //Two functions to change grid_view state value
  function setGridView() {
    return dispatch({ type: "SET_GRID_VIEW" });
  }

  function setListView() {
    return dispatch({ type: "SET_LIST_VIEW" });
  }

  //Soting products
  function setSortingValue(UserValue) {
    return dispatch({ type: "SET_SORTING_VALUE", payload: UserValue });
  }

  useEffect(()=>{
    dispatch({type:"SORTING_PRODUCTS"})
  },[state.sortingValue])




  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, setSortingValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
