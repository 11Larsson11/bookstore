import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./BookItem.module.css";
import BookItemForm from "./BookItemForm";


const BookItem = (props) => {
const cartCtx = useContext(CartContext);

const price = `$${props.price.toFixed(2)}`;

const addToCartHandler = amount => {
  cartCtx.addItem({
    id: props.id,
    title: props.title,
    amount: amount,
    price: props.price
  });
};

  return (
    <li className={classes.book}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <BookItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default BookItem;
