const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "LOAD_PRODUCTS_DATA_IN_FILTER_CONTEXT_FROM_PRODUCT_CONTEXT":
      return {
        ...state,
        isLoading: false,
        allProducts: [...action.payload], //making a copy of products using spread operator.
        filterProducts: [...action.payload],  
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SET_SORTING_VALUE":
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCTS":
      let ProductsToBeSorted = [...state.filterProducts]
      let newSortedProducts;

      if (state.sortingValue === "highest") {
        newSortedProducts = ProductsToBeSorted.sort((a, b) => b.price - a.price);
      } else if (state.sortingValue === "lowest") {
        newSortedProducts = ProductsToBeSorted.sort((a, b) => a.price - b.price);
      } else if (state.sortingValue === "a-z") {
        newSortedProducts = ProductsToBeSorted.sort((a, b) => a.title.localeCompare(b.title));
      } else if (state.sortingValue === "z-a") {
        newSortedProducts = ProductsToBeSorted.sort((a, b) => b.title.localeCompare(a.title));
      }

      return {
        ...state,
        filterProducts: newSortedProducts
      };


      case "SET_FILTERS_VALUE":
      return {
        ...state,
        filters: {
          text: action.payload.value
        },
      };

      case "FILTER_PRODUCTS":  //search functionality
    let ProductsToBeFiltered = [...state.allProducts];
    let UserEnteredText = state.filters.text.toLowerCase();

    let newFilteredProducts = ProductsToBeFiltered.filter(product =>
        product.title.toLowerCase().includes(UserEnteredText)
    );

    return {
        ...state,
        filterProducts: newFilteredProducts
    };

    default:
      return state;
  }
};

export default FilterReducer;
