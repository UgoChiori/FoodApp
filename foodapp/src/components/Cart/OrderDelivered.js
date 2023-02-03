import { Fragment } from "react";
import classes from "./Cart.module.css";

const OrderDelivered = (props) => {
  return (
    <Fragment>
      <section>
      <h4> Your order is being processed</h4>
        <h2>Thank you so much for your order!</h2>

        <p>We really appreciate it. </p>
        <p>
          THANK YOU! 
        </p>
      </section>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default OrderDelivered;
