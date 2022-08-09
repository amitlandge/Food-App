import classes from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <div className={classes.cartItem}>
      <h1>{props.title}</h1>
      <p>{props.price} Rs</p>
      <div className={classes.amount}>
        <span>x{props.amount}</span>
      </div>
      <div className={classes.btns}>
        <button className="addbtn" onClick={props.up}>+</button>
        <button className="subbtn" onClick={props.down}  >-</button>
      </div>
    </div>
  );
};
export default CartItem;
