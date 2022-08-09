import { createContext } from "react";

const FoodContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});
export default FoodContext;
