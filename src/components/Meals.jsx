import { useEffect, useState } from "react";
import MealCard from "./MealCard";

export default function Meals() {
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
    <section className="w-full flex items-center justify-center">
      <div className="w-[70%]">
        <ul className="w-full grid grid-cols-4 gap-3">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </ul>
      </div>
    </section>
  );
}
