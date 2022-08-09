import { Fragment, useContext } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import FoodContext from "../../store/food-context";
const Cart = () => {
  const ctx = useContext(FoodContext);
  const addItemHandler = (item) => {
    console.log("added");
    ctx.addItem({...item,amount:1})
  };
  const removeItemHandler = (id) => {
    console.log(id);
    ctx.removeItem(id)
  };

  const content = ctx.items.map((item) => (
    <CartItem
      title={item.title}
      price={item.price}
      amount={item.amount}
      up={addItemHandler.bind(null,item)}
      down={removeItemHandler.bind(null,item.id)}
    />
  ));
  const totalAmount = ctx.totalAmount;
const check=ctx.items;
console.log(check);
  return (
    <Fragment>
      {content}
      <div className={classes.totalAmount}>
        <h1>Total Amount</h1>
        <p>{totalAmount} Rs</p>
      </div>
    </Fragment>
  );
};
export default Cart;
