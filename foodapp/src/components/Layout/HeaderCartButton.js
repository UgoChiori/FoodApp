import Carticon from "../Cart/Carticon";
import classes from "./HeaderCartButton.module.css";



const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <Carticon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>4</span>
    </button>
  );
};

export default HeaderCartButton;
