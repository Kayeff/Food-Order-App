import { use } from "react";
import { AnimatePresence } from "motion/react";
import { UIContext } from "../store/ui-context";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function Modals() {
  const { progress } = use(UIContext);
  return (
    <AnimatePresence>
      {progress !== "" ? (
        <div className="w-full min-h-screen bg-black/60 fixed inset-0 z-50">
          <Cart />
          <Checkout />
        </div>
      ) : null}
    </AnimatePresence>
  );
}
