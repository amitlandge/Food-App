import { useReducer } from "react";
import FoodContext from "./food-context";
const initialState = {
  items: [],
  totalAmount: 0,
};
const reducerFun = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    let existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.items[existingItemIndex];
    let updateItems;
    if (existingItem) {
      let updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    let existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    console.log("removable");
    let existingItem = state.items[existingItemIndex];
    let updateTotalAmount = state.totalAmount - existingItem.price;
    let updateItems;
    if (existingItem.amount === 1) {
      updateItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return initialState;
};

const ContextProvider = (props) => {
  const [foodState, dispatch] = useReducer(reducerFun, initialState);
  const addDataHAndler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeDataHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const context = {
    items: foodState.items,
    totalAmount: foodState.totalAmount,
    addItem: addDataHAndler,
    removeItem: removeDataHandler,
  };
  return (
    <FoodContext.Provider value={context}>
      {props.children}
    </FoodContext.Provider>
  );
};
export default ContextProvider;
