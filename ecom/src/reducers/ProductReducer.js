// function ProductReducer(state, action) {
//   if (action.type === "LOADING") {
//     state.isLoading = true;
//     return state;
//   } else if (action.type === "MY_API_DATA(PRODUCTS)") {
//     const AllProducts = action.payload;
//     AllProducts.map((elem) => {
//       if (elem.featured === true) {
//         state.featuredProducts.push(elem);
//         return state;
//       }
//     });
//     state.products = AllProducts;
//     return state;
//   } else if (action.type === "ERROR_IN_GETTING_API_DATA") {
//     state.isError = true;
//     return state;
//   } else {
//     return state;
//   }
// }

// export default ProductReducer;

//using switch statement instead of if elseif ladder
function ProductReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      state.isLoading = true;
      return state;

    case "MY_API_DATA(PRODUCTS)":
      const AllProducts = action.payload;
      state.featuredProducts = []; // Initialize as empty array
      AllProducts.map((elem) => {
        if (elem.featured === true) {
          state.featuredProducts.push(elem);
        }
      });
      state.products = AllProducts;
      return state;

    case "ERROR_IN_GETTING_API_DATA":
      state.isError = true;
      return state;

    default:
      return state;
  }
}

export default ProductReducer;
