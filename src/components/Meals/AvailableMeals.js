import Card from "../Ui/Card";
import MealItem from "./MealItem/MealItem";
import berger from "../../assets/delicious-burger-with-fresh-ingredients.png";
import tacos from "../../assets/delicious-traditional-tacos-arrangement.png";
import pizza from "../../assets/pizza-pizza-filled-with-tomatoes-salami-olives.png";

const DUMMY_MEALS = [
  {
    id: "m1",
    img: berger,
    name: "Sushi",
    description: "Finest Fish and vagtable",
    price: 12.97,
  },
  {
    id: "m2",
    img: tacos,
    name: "Sushi",
    description: "Finest Fish and vagtable",
    price: 12.97,
  },
  {
    id: "m3",
    img: pizza,
    name: "Sushi",
    description: "Finest Fish and vagtable",
    price: 12.97,
  },
  {
    id: "m4",
    img: pizza,
    name: "Sushi",
    description: "Finest Fish and vagtable",
    price: 12.97,
  },
  {
    id: "m5",
    img: berger,
    name: "Hamburger",
    description: "Finest meat and potato and tomato",
    price: 36.00,
  },
];

const AvailableMeals = () => {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      img={meal.img}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return <Card>{MealsList}</Card>;
};

export default AvailableMeals;
