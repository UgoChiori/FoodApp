import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../storage/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      minimumOrder: props.minimumOrder,
      
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₦{price}</div>
        <div className={classes.minimumOrder}>{props.minimumOrder}</div>
        
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}
        minimumOrder={props.minimumOrder}
         />
      </div>
      
    </li>
  );
};

export default MealItem;
