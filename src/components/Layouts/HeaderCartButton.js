import React from "react";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <>
      <button className="relative text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        <CartIcon />
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
      </button>
    </>
  );
};

export default HeaderCartButton;
