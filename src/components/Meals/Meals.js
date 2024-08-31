import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <section className="w-full md:w-7/12 p-5 md:pl-10 lg:pl-32">
      <MealsSummary />
      <AvailableMeals />
    </section>
  );
};

export default Meals;
