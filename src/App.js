import "./App.css";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Welcome from "./components/Layouts/Welcome";
import CartProvider from "./store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <main className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800">
        <Header />
        <Cart />
        <Welcome />
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
