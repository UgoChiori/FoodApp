import Carticon from "../Cart/Carticon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../storage/CartContext";
import React, { useContext, useState, useEffect } from "react";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

// import Carticon from "../Cart/Carticon";
// import classes from "./HeaderCartButton.module.css";
// import CartContext from "../../storage/CartContext";
// import React from "react";

// const HeaderCartButton = () => {
//   const [btnIsHighlighted, setBtnIsHighlighted] = React.useState(false);
//   const cartCtx = React.useContext(CartContext);
//   const { items } = cartCtx;

//   const numberOfCartItems = items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);
//   const btnClasses = `${classes.button} ${
//     btnIsHighlighted ? classes.bump : ""
//   }`;
//   React.useEffect(() => {
//     if (items.length === 0) {
//       return;
//     }
//     setBtnIsHighlighted(true);
//     const timer = setTimeout(() => {
//       setBtnIsHighlighted(false);
//     }, 300);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [items]);
//   return (
//     <button className={btnClasses} onClick={props.onClick}>
//       <span className={classes.icon}>
//         <Carticon />
//       </span>
//       <span>Your Cart</span>
//       <span className={classes.badge}>{numberOfCartItems}</span>
//     </button>
//   );
// };

// export default HeaderCartButton;
