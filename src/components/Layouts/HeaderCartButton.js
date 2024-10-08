import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

  const [btnIsHighlited,setBtnIsHighlited] = useState(false);

  const cartCtx = useContext(CartContext);
  const buttonClasses = `relative transition-all duration-300 text-white ${btnIsHighlited && 'transform scale-110'} bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`;
  const numberOfCartFood = cartCtx.items.reduce((curr,item)=>{
    return curr + item.amount;
  },0)

  useEffect(()=>{
    setBtnIsHighlited(true);
    let timer = setTimeout(()=>{
      setBtnIsHighlited(false)
    },1000)

    return ()=>{
      clearTimeout(timer)
    }
  },[cartCtx.items])

  return (
    <>
      <button data-modal-target="view-cart" data-modal-toggle="view-cart" className={buttonClasses}>
        <CartIcon />
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{numberOfCartFood}</div>
      </button>
    </>
  );
};

export default HeaderCartButton;
