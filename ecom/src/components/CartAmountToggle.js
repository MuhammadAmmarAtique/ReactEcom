// This component is used in 2 places.
//  1) Inside singleProduct page (AddtoCart component) when user want to buy any product, he will 
// choose the no of quantity he wants to buy.
// 2) Inside Cart page (CartItem component) when there is change of mind in user's head, like he wants to buy more
//  or less product.


import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
