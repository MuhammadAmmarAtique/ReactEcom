const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true
      };

    case "LOAD_DATA_IN_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [... action.payload],
        allProducts: [... action.payload],
      };

    default:
      return state;
  }
};

export default FilterReducer;
