import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { use } from "react";
import { CartContext } from "../store/cart-context";

export default function Cart({}) {
  const { cart, updateCartQuantity, totalItems, totalPrice } = use(CartContext);
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr>
          <th className="tracking-tighter border border-white/20 text-center bg-white/10 p-2">
            Item
          </th>
          <th className="tracking-tighter border border-white/20 p-2 text-center bg-white/10">
            Quantity
          </th>
          <th className="tracking-tighter border border-white/20 p-2 text-center bg-white/10">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td className="tracking-tighter border border-white/20 p-2 px-4">
              {item.name}
            </td>
            <td className="tracking-tighter  p-2 text-center flex gap-2 items-center justify-center border border-white/20">
              <button
                onClick={() => updateCartQuantity(item.id, "-")}
                className="cursor-pointer size-4 rounded-full flex items-center justify-cener"
              >
                <RiSubtractLine className="font-medium" />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateCartQuantity(item.id, "+")}
                className="cursor-pointer size-4 rounded-full flex items-center justify-cener"
              >
                <RiAddLine className="font-medium" />
              </button>
            </td>
            <td className="tracking-tighter border border-white/20 p-2 text-center">
              ${item.price}
            </td>
          </tr>
        ))}
        <tr>
          <td className="tracking-tighter border border-white/20 p-2 px-4">
            Total Items
          </td>
          <td className="tracking-tighter border border-white/20 p-2 px-4 text-center">
            Quantity: {totalItems}
          </td>
          <td className="tracking-tighter border border-white/20 p-2 px-4 text-center">
            ${totalPrice}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
