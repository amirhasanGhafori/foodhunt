import Modal from "../Ui/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = item =>{
    cartCtx.addItem({...item,amount:1})
  }

  const cartItemRemoveHandler = id =>{
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <div>
      {cartCtx.items.map((item) => {
        return <CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} />;
      })}
    </div>
  );

  return (
    <Modal id="view-cart" title="Shopping Cart">
      <div className="flex flex-col dark:text-gray-200 text-gray-700">
        <div className="flex flex-col">
          {cartItems}
        </div>
        <div className="flex flex-row items-center justify-between text-2xl mt-8">
          <span>Total Amount</span>
          <span className="px-4">${cartCtx.totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
