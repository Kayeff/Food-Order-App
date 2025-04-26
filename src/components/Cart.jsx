import { use } from "react";
import ProgressModal from "./ProgressModal";
import Display from "./Display";
import { formatValue } from "../utils/value-formatter";
import Button from "./Button";
import { CartContext } from "../store/cart-context";
import { UIContext } from "../store/ui-context";

export default function Cart() {
  const { progress, hideCart, showCheckout } = use(UIContext);
  const { items, totalItems, totalPrice } = use(CartContext);

  function handleClose() {
    hideCart();
  }

  function handleGoToCheckout() {
    showCheckout();
  }

  return (
    <ProgressModal
      show={progress === "cart"}
      handleClose={handleClose}
      header={
        <>
          Cart ( <span>{totalItems} items</span> )
        </>
      }
      className="w-[65%]"
    >
      <div className="w-full">
        {items.length > 0 ? (
          <Display />
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
          onClick={handleGoToCheckout}
          className="bg-white/90 text-black"
        >
          Go to checkout
        </Button>
      </div>
    </ProgressModal>
  );
}
