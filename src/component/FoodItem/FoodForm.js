import { useRef } from "react";
import classes from "./FoodForm.module.css";
const FoodForm = (props) => {
  const refAmount = useRef();

  const onAmountSubmit = (event) => {
    event.preventDefault();
    const amount = refAmount.current.value;
    const numAmount = +amount;
    console.log(numAmount);
    if(numAmount<0||numAmount>5){
        return
    }
    else{
        props.sendAmount(numAmount);
    }
  };
  return (
    <form className={classes.form} onSubmit={onAmountSubmit}>
      <div className={classes.amount}>
        <label htmlFor="amount">Amount</label>
        <input type="number" min="1" max="5" defaultValue="1" ref={refAmount} />
      </div>
      <button className={classes.btn} type="submit">
        Add Food
      </button>
    </form>
  );
};
export default FoodForm;
