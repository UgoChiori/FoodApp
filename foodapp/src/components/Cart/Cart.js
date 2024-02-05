import Modal from "../UI/Modal";
import React, { useState, useContext } from "react";
import CartContext from "../../storage/CartContext";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import OrderDelivered from "./OrderDelivered";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [showOrder, setShowOrder] = useState(false);

  const totalAmount = `${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    cartCtx.clearall();
    setShowOrder(true);
  };
  // const item = { totalAmount: totalAmount };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          totalAmount={item.totalAmount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {!showOrder ? (
        <>
          {cartItems }

          <div className={classes.total}>
            <span>Total Amount</span>
            <span>₦{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        </>
      ) : (
        <OrderDelivered onClose={props.onClose} />
      )}
    </Modal>
  );
};

export default Cart;



