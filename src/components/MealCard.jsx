import { use } from "react";
import { CartContext } from "../store/cart-context";
import { formatValue } from "../utils/value-formatter";
import Button from "./Button";

export default function MealCard({ meal }) {
  const { addToCart } = use(CartContext);

  function handleAddToCart() {
    addToCart(meal);
  }

  return (
    <li className="w-full border border-white/20 rounded-2xl flex flex-col cursor-default">
      <img
        className="border-b border-white/20 rounded-t-2xl object-cover"
        src={`http://localhost:3000/${meal.image}`}
        alt={`${meal.name}-image`}
        loading="lazy"
      />
      <div className="w-full p-4 flex flex-col gap-2">
        <div className="w-full flex flex-col">
          <h1 className="tracking-tighter font-semibold text-xl">
            {meal.name}
          </h1>
          <p className="tracking-tighter text-white/70">
            {formatValue(meal.price)}
          </p>
        </div>
        <p className="text-sm text-white/80 tracking-tight">
          {meal.description}
        </p>
      </div>
      <div className="w-full flex items-center justify-end p-4 mt-auto">
        <Button
          onClick={handleAddToCart}
          className="bg-white/90 hover:bg-white text-black"
        >
          Add to Cart
        </Button>
      </div>
    </li>
  );
}
