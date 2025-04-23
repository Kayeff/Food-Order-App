import { AnimatePresence } from "motion/react";
import React, { use } from "react";
import CheckoutModal from "./CheckoutModal";
import CartModal from "./CartModal";
import { UIContext } from "../store/ui-context";

export default function Modal() {
  const { progress } = use(UIContext);

  return (
    <AnimatePresence>
      {progress !== "" ? (
        <div className="w-full min-h-screen bg-black/40 fixed inset-0 z-40 flex items-center justify-center">
          {progress === "cart" && <CartModal />}
          {progress === "checkout" && <CheckoutModal />}
        </div>
      ) : null}
    </AnimatePresence>
  );
}
