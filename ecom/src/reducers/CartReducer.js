const CartReducer = (state,action)=>{
    switch (action.type) {
        case "HANDLE_ADD_TOCART":
            const  {color, amount, Product } = action.payload;
            console.log("amount: ", amount);
            console.log("color: ", color);
            console.log("Product: ", Product);
            
          return state;
    
        default:
            return state;

    }
}

export default CartReducer;