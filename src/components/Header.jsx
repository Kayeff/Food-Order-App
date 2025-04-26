import { use } from "react";
import cartSVG from "../assets/cart.svg";
import { CartContext } from "../store/cart-context";
import { UIContext } from "../store/ui-context";

export default function Header() {
  const { totalItems } = use(CartContext);
  const { showCart } = use(UIContext);

  return (
    <header className="w-full flex items-center justify-center sticky top-0 bg-black border-b border-white/20 z-40">
      <div className="w-[70%] flex items-center justify-between p-4">
        <h1 className="tracking-tighter font-medium text-3xl">
          Food Order App
        </h1>
        <button
          onClick={showCart}
          className="flex items-center justify-center cursor-pointer size-8 relative"
        >
          <img
            className="w-full h-full object-cover"
            src={cartSVG}
            alt="cart-svg"
          />
          <span className="size-4 rounded-full bg-paint-red absolute -top-1 -left-1 flex items-center justify-center">
            <span className="text-xs">{totalItems}</span>
          </span>
        </button>
      </div>
    </header>
  );
}
