const CartReducer = (state, action) => {
  switch (action.type) {
    //Initially adding products from local storage to our store.
    case "LOAD_PRODUCTS_FROM_LOCAL_STORAGE_INTO_CART" :
      return {...state, cart:action.payload}  


    case "ADD_PRODUCT_IN_CART":
      const { color, amount, Product } = action.payload;

      let cartProduct;

      cartProduct = {
        id: Product.id + Math.random(),
        name: Product.name,
        color: color, //user selected color
        amount: amount, //amount of product user wants to buy
        image: Product.image[0].url,
        price: Product.price,
        max: Product.stock,
      };
      return { ...state, cart: [...state.cart, cartProduct] };

      case "REMOVE_PRODUCT_FROM_CART":
        const updatedCart = state.cart.filter(element => element.id !== action.payload);
        return {...state, cart: updatedCart};

        case "DELETE_ALL_PRODUCTS_FROM_CART":
          return {...state, cart: []};  

    default:
      return state;
  }
};

export default CartReducer;
