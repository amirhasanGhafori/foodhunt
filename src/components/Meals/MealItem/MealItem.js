import { useContext, useState, useEffect } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {

  const [shootImage,setShootImage] = useState(false);
  const [posstionShoot,setPossitionShoot] = useState(document.body.scrollWidth);
  let imageClasses = `rounded-t-lg absolute max-h-80 opacity-100 ${shootImage && `transition-all tranform rotate-90 block opacity-0 -translate-y-48 duration-500 z-50 max-w-16`}`;

  const cartCtx = useContext(CartContext);

  useEffect(()=>{
    setPossitionShoot(document.body.scrollWidth/2)
    let timer = setTimeout(()=>{
      setShootImage(false)
    },1000)

    return ()=>{
      clearTimeout(timer)
    }
  },[cartCtx.items])
  
  const addToCartHandler = amount=>{
    setShootImage(true);
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    });
  }
  return (
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center max-h-80 h-80">
        <img className={`rounded-t-lg max-h-80 opacity-100`} src={props.img} alt={props.name} />
        <img className={imageClasses} src={props.img} alt={props.name} />
      </div>
      <div class="p-5">
        <div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            ${props.price}
          </span>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default MealItem;
