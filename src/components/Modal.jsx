import { AnimatePresence } from "motion/react";
import React, { use } from "react";
import CheckoutModal from "./CheckoutModal";
import CartModal from "./CartModal";
import { UIContext } from "../store/ui-context";

export default function Modal() {
  const { isCartVisible, isCheckoutVisible } = use(UIContext);

  return (
    <AnimatePresence>
      {isCartVisible || isCheckoutVisible ? (
        <div className="w-full min-h-screen bg-black/40 fixed inset-0 z-40 flex items-center justify-center">
          {isCartVisible && <CartModal />}
          {isCheckoutVisible && <CheckoutModal />}
        </div>
      ) : null}
    </AnimatePresence>
  );
}
