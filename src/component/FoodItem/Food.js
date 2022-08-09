import { useContext } from "react";
import classes from "./Food.module.css";
import FoodForm from "./FoodForm";
import FoodContext from "../../store/food-context";
const Food = (props) => {
  const ctx = useContext(FoodContext);
  const amountHandler = (amount) => {
    console.log(amount);
    ctx.addItem({
      key: props.id,
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div className="flex">
    <div className={classes.food}>
      <h1>{props.title}</h1>
      <div className={classes.image}>
        <img src={props.src} alt="biryani" />
      </div>
      <p>{props.description}</p>

      <div className={classes.price}>
        <span>{props.price} Rs</span>
      </div>
      <div>
        <FoodForm sendAmount={amountHandler} />
      </div>
    </div>
    </div>
  );
};
export default Food;
