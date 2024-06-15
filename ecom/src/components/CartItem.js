import {React, useState} from "react";
import FormatPrice from "../helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ id, name, image, color, price, amount, max }) => {
  const { RemoveCartProduct, setDecrease, setIncrease  } = useCartContext();
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
        amount={amount}
        setDecrease={()=> setDecrease(id)}
        setIncrease={()=> setIncrease(id)}
      />

      {/* Subtotal (Price * Quantity) */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      {/* Remove */}
      <div>
        <FaTrash className="remove_icon" onClick={() => RemoveCartProduct(id, color)} />
      </div>
    </div>
  );
};

export default CartItem;