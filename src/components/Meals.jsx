import MealCard from "./MealCard";

export default function Meals({ meals }) {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-[70%] p-4">
        <div className="grid grid-cols-3 gap-4 w-full">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}
