function ProductReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "MY_API_DATA(PRODUCTS)":
      const AllProducts = action.payload;
      const featuredProducts = AllProducts.filter((elem) => elem.id <= 3);
      return { ...state, products: AllProducts, featuredProducts };

    case "ERROR_IN_GETTING_API_DATA":
      return { ...state, isError: true };

    default:
      return state;
  }
}

export default ProductReducer;
