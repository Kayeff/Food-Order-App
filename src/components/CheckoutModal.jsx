import { AnimatePresence, motion } from "motion/react";
import CheckoutForm from "./CheckoutForm";
import ModalHeader from "./ModalHeader";
import { use } from "react";
import { CartContext } from "../store/cart-context";
import { UIContext } from "../store/ui-context";

export default function CheckoutModal() {
  const { cart, totalPrice } = use(CartContext);
  const { hideCheckout } = use(UIContext);

  return (
    <div className="w-full min-h-screen bg-black/40 fixed inset-0 z-40 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-[40%] p-4 bg-black border border-white/20 rounded-xl flex flex-col gap-6"
      >
        <ModalHeader handleClose={hideCheckout}>Checkout</ModalHeader>
        <ul className="w-full flex flex-col gap-0.5 p-2 border border-white/20 rounded-lg">
          {cart.map((item) => (
            <li key={item.id} className="grid grid-cols-5">
              <p className="flex gap-1 col-span-3">
                <span className="tracking-tight">{item.quantity}</span>
                <span>x</span>
                <span className="tracking-tight">{item.name}</span>({" "}
                <span className="tracking-tight">${item.price}</span>each )
              </p>
              <p className="text-center"> -----&gt; </p>
              <p className="tracking-tight text-end">
                ${item.quantity * item.price}
              </p>
            </li>
          ))}
        </ul>
        <h1 className="text-end tracking-tight">
          Total: <span>${totalPrice}</span>
        </h1>
        <CheckoutForm totalPrice={totalPrice} handleClose={hideCheckout} />
      </motion.div>
    </div>
  );
}
