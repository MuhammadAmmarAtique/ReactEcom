function ProductReducer(state, action) {
  const AllProducts = action.products;

  AllProducts.map((elem) => {
    if (elem.featured === true) {
      const featuredProducts = elem;
      return (state.featuredProducts = featuredProducts);
    }
  });

  return (state.products = AllProducts);
}

export default ProductReducer;
