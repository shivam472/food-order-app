import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./contexts/CartProvider";

const App = () => {
  const [cartVisibility, setCartVisibility] = useState(false);

  return (
    <CartProvider value={setCartVisibility}>
      {cartVisibility ? <Cart /> : null}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
