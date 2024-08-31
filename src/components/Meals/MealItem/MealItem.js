import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <img class="rounded-t-lg max-h-80" src={props.img} alt={props.name} />
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
          <MealItemForm />
        </div>
      </div>
    </div>
  );
};

export default MealItem;
