function ProductReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "MY_API_DATA(PRODUCTS)":
      const AllProducts = action.payload;
      const featuredProducts = AllProducts.filter((elem) => elem.id <= 3);
      return {
        ...state,
        isLoading: false,
        products: AllProducts,
        featuredProducts,
      };

    case "ERROR_IN_GETTING_API_DATA":
      return { ...state, isLoading: false, isError: true };

    //For single product

    case "LOADING_FOR_GETTING_SINGLE_PRODUCT_DATA":
      return { ...state, isSingleProductLoading: true };

    case "MY_API_DATA_FOR_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleProductLoading: false,
        SingleProduct: action.payload,
      };

    case "ERROR_IN_GETTING__API_DATA_FOR_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleProductLoading: false,
        isSingleProductError: true,
      };

    default:
      return state;
  }
}

export default ProductReducer;
