import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartFood = cartCtx.items.reduce((curr,item)=>{
    return curr + item.amount;
  },0)
  return (
    <>
      <button data-modal-target="view-cart" data-modal-toggle="view-cart" className="relative text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        <CartIcon />
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{numberOfCartFood}</div>
      </button>
    </>
  );
};

export default HeaderCartButton;
