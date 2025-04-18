import { AnimatePresence, motion } from "motion/react";
import Cart from "./Cart";
import ModalHeader from "./ModalHeader";
import { CartContext } from "../store/cart-context";
import { use } from "react";
import { UIContext } from "../store/ui-context";

export default function CartModal() {
  const { cart, totalItems } = use(CartContext);
  const { hideCart, handleGotoCheckout } = use(UIContext);

  return (
    <div className="w-full min-h-screen bg-black/40 fixed inset-0 z-40 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-1/2 p-4 bg-black border border-white/20 rounded-xl flex flex-col gap-6"
      >
        <ModalHeader handleClose={hideCart}>
          Cart Items ( <span>{totalItems} items</span> )
        </ModalHeader>
        <div className="w-full">
          {cart.length > 0 ? (
            <Cart />
          ) : (
            <h1 className="text-white/50 text-sm">Please add items to cart</h1>
          )}
        </div>
        <div className="w-full flex items-center justify-end gap-2">
          <button
            disabled={cart.length === 0}
            onClick={handleGotoCheckout}
            className="p-3 rounded-md bg-white/90 text-black text-sm tracking-tighter font-medium duration-300 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white cursor-pointer"
          >
            Go to checkout
          </button>
        </div>
      </motion.div>
    </div>
  );
}
