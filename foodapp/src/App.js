import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Menu from "./components/Meals/Menu";
import CartProvider from "./storage/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
      <main>
        <Menu />
      </main>
    </CartProvider>
  );
}

export default App;
