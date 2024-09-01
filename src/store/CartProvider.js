import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "add") {
    const updatedItem = state.items.concat(action.items);
    const updatedTotalAmount = state.totalAmount + action.items.price * action.items.amount;
    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    };
  }//if
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemCartHandler,
  };

  function addItemToCartHandler(items) {
    dispatchCart({ type: "add", items: items });
  }
  function removeItemCartHandler(id) {
    dispatchCart({ type: "remove", id: id });
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
