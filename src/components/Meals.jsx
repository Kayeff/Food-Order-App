import MealCard from "./MealCard";
import { useHTTP } from "../hooks/useHTTP";
import ErrorMessage from "./ErrorMessage";

const configObj = {};
export default function Meals() {
  const {
    error,
    isLoading: loading,
    data,
  } = useHTTP("http://localhost:3000/meals", configObj, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-4">
        <h1 className="tracking-tight">Fetching Meals...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage
        title="Failed to fetch meals"
        message={error.message}
        meals={true}
      />
    );
  }

  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-[70%]">
        <ul className="w-full grid grid-cols-4 gap-3">
          {data.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </ul>
      </div>
    </section>
  );
}
