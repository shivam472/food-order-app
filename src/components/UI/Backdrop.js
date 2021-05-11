import { useContext } from "react";
import classes from "./Backdrop.module.css";
import CartContext from "../../contexts/cart-context";

const Backdrop = () => {
  const { setCartVisibility } = useContext(CartContext);

  return (
    <div
      className={classes.backdrop}
      onClick={() => setCartVisibility(false)}
    />
  );
};

export default Backdrop;
