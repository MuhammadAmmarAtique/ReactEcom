import {React, useState} from "react";
import FormatPrice from "../helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ id, name, image, color, price, amount, max }) => {
  const { RemoveCartProduct } = useCartContext();

  // Quantity increase and decrease functionality
  const [newAmount, SetnewAmount]=useState(amount)
  
  const setDecrease = () => {
    newAmount > 1 ? SetnewAmount(newAmount - 1) : SetnewAmount(1);
  };

  const setIncrease = () => {
    newAmount < max ? SetnewAmount(newAmount + 1) : SetnewAmount(max);
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
      {/* Item */}
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>
      {/* Price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={newAmount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* Subtotal (Price * Quantity) */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      {/* Remove */}
      <div>
        <FaTrash className="remove_icon" onClick={() => RemoveCartProduct(id)} />
      </div>
    </div>
  );
};

export default CartItem;