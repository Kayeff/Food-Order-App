import { useEffect, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import CartContextProvider from "./store/cart-context";
import UIContextProvider from "./store/ui-context";

export default function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const data = await response.json();
      setMeals(data);
    }

    getMeals();
  }, []);

  return (
    <CartContextProvider>
      <main className="w-full min-h-screen bg-black text-white font-inter relative">
        <UIContextProvider>
          <Modal />
          <Header />
        </UIContextProvider>
        <Meals meals={meals} />
      </main>
    </CartContextProvider>
  );
}
