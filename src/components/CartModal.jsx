import { motion } from "motion/react";
import Cart from "./Cart";
import ModalHeader from "./ModalHeader";
import { CartContext } from "../store/cart-context";
import { use } from "react";
import { UIContext } from "../store/ui-context";
import { formatValue } from "../utils/value-formatter";
import Button from "./Button";

export default function CartModal() {
  const { items, totalItems, totalPrice } = use(CartContext);
  const { hideCart, showCheckout } = use(UIContext);

  function handleGotoCheckout() {
    hideCart();
    showCheckout();
  }

  return (
    <div className="w-full min-h-screen bg-black/40 fixed inset-0 z-40 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-[70%] p-4 bg-black border border-white/20 rounded-xl flex flex-col gap-6"
      >
        <ModalHeader handleClose={hideCart}>
          Cart ( <span>{totalItems} items</span> )
        </ModalHeader>
        <div className="w-full">
          {items.length > 0 ? (
            <Cart />
          ) : (
            <h1 className="text-white/50 text-sm">Please add items to cart</h1>
          )}
        </div>
        {totalItems !== 0 && (
          <div className="flex flex-col items-end">
            <h1 className="tracking-tighter flex gap-2 text-lg font-medium">
              <span>Subtotal ( {totalItems} items )</span>
              <span>:</span>
              <span>{formatValue(totalPrice)}</span>
            </h1>
          </div>
        )}
        <div className="w-full flex items-center justify-end gap-2">
          <Button
            disabled={items.length === 0}
            onClick={handleGotoCheckout}
            className="bg-white/90 text-black"
          >
            Go to checkout
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
