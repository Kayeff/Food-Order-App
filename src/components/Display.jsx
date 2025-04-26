import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { use } from "react";
import { CartContext } from "../store/cart-context";
import { formatValue } from "../utils/value-formatter";
import Button from "./Button";

export default function Display() {
  const { items, addToCart, removeFromCart } = use(CartContext);

  return (
    <ul className="w-full grid grid-cols-3 gap-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="border border-white/20 p-2 flex gap-2 rounded-xl"
        >
          <img
            className="size-40 object-cover rounded-xl"
            src={`http://localhost:3000/${item.image}`}
            alt=""
          />
          <div className="w-full p-2 flex flex-col gap-2">
            <h1 className="w-full flex flex-col tracking-tighter">
              <span className="text-2xl font-medium">{item.name}</span>
              <span className="tracking-tighter text-white/80">
                {formatValue(item.price)}
              </span>
            </h1>
            <p className="tracking-tighter text-center flex items-center gap-4">
              <span>Quantity: </span>
              <span className="grid grid-cols-3 gap-2 items-center">
                <Button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-cener p-0.5 size-5"
                >
                  <RiSubtractLine size={17} />
                </Button>
                <span>{item.quantity}</span>
                <Button
                  onClick={() => addToCart(item)}
                  className=" bg-white/90 hover:bg-white
                  text-black rounded-full flex items-center
                  justify-cener p-0.5 size-5"
                >
                  <RiAddLine size={17} />
                </Button>
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
