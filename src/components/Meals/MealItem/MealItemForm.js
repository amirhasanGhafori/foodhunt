import { useRef, useState } from "react";
import Input from "../../Ui/Input";

const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === "" ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form class="p-0 m-0" onSubmit={submitHandler}>
      <label
        for="quantity-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      <div class="relative flex items-center max-w-[8rem]">
        <button
          onClick={submitHandler}
          type="button"
          id="decrement-button"
          data-input-counter-decrement="quantity-input"
          class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg px-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            class="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <Input
          ref={amountInputRef}
          input={{ type: "text", id: "quantiry-input", placeholder: 1 ,defaultValue:1}}
        />
        <button
          onClick={submitHandler}
          type="button"
          id="increment-button"
          data-input-counter-increment="quantity-input"
          class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg px-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            class="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
        {!amountIsValid && <p>Please Enter Valid Number (1-10)</p>}
      </div>
    </form>
  );
};

export default MealItemForm;
