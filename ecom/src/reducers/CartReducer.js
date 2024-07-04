const CartReducer = (state, action) => {
  switch (action.type) {
    //Initially adding products from local storage to our store.
    case "LOAD_PRODUCTS_FROM_LOCAL_STORAGE_INTO_CART":
      return { ...state, cart: action.payload };

    case "ADD_PRODUCT_IN_CART":
      const { color, amount, Product } = action.payload;

      let cartProduct;

      cartProduct = {
        id: Product.id + color,
        name: Product.name,
        color: color, //user selected color
        amount: amount, //amount of product user wants to buy
        image: Product.image[0].url,
        price: Product.price,
        max: Product.stock, //product stock
      };

       //if user is adding same product with same color in cart then increasing product's quantity in cart page
      const existingProduct = state.cart.find(
        (product) => product.id === cartProduct.id && product.color === cartProduct.color
      );
    
      if (existingProduct) {
        // If product exists in the cart, update the amount
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === cartProduct.id && product.color === cartProduct.color
              ? { ...product, amount: Math.min(product.max, product.amount + amount) } // Update amount, respecting the max stock
              : product
          ),
        };
      } else {
        // If product does not exist in the cart, add it to the cart
        return { ...state, cart: [...state.cart, cartProduct] };
      }

    case "REMOVE_PRODUCT_FROM_CART":
      const {Productid, Productcolor} = action.payload;
      
      const updatedCart = state.cart.filter(
        (element) => element.id !== Productid && element.color !== Productcolor
      );
      return { ...state, cart: updatedCart };

    case "DELETE_ALL_PRODUCTS_FROM_CART":
      return { ...state, cart: [] };

    case "DECREMENT_PRODUCT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, amount: Math.max(1, product.amount - 1) }
            : product
        ),
      };

    case "INCREMENT_PRODUCT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, amount: Math.min(product.max, product.amount + 1) }
            : product
        ),
      };

      case "UpdateTotalItems":
      return {
        ...state,
        totalItems: state.cart.reduce((accum, product)=>{
          accum += product.amount
          return accum
        },0)
      };

    default:
      return state;
  }
};

export default CartReducer;
