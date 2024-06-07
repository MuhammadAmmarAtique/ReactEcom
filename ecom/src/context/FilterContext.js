// Context#2 (In this context we are getting all products data from ProductsContext.js and storing it in allProducts &
// filterProducts states so that we can use this data for sorting and filtering products)

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
  sortingValue: "lowest", //by seeing this we are filtering Products based on price and title characters (a to z or z to a)
  filters: {
    text: "",  //here "text" is used for search functionality
    category: "All",
    company: "All",
    color:"All",
    price: 0,
    minPrice:0,
    maxPrice:0

  },
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("state: ", state);
  const { products } = useProductContext(); //products are coming in form of array of objects.

  useEffect(() => {
    dispatch({ type: "LOADING" });
    dispatch({
      type: "LOAD_PRODUCTS_DATA_IN_FILTER_CONTEXT_FROM_PRODUCT_CONTEXT",
      payload: products,
    });
  }, [products]);

  //Two functions to change grid_view "state" value (Sort.js)
  function setGridView() {
    return dispatch({ type: "SET_GRID_VIEW" });
  }

  function setListView() {
    return dispatch({ type: "SET_LIST_VIEW" });
  }

  //Sorting products (Sort.js)
  function setSortingValue(UserValue) {
    return dispatch({ type: "SET_SORTING_VALUE", payload: UserValue });
  }

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sortingValue, state.filterProducts]);

  //Filters (FilterSection.js)
  function setFiltersValue(event) {
    const name = event.target.name; //input field name
    const value = event.target.value; //input field value

    return dispatch({ type: "SET_FILTERS_VALUE", payload: { name, value } });
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);

  // clear filters
  function clearFilters() {
    dispatch({type:"CLEAR_FILTERS"})
  }
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        setSortingValue,
        setFiltersValue,
        clearFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
