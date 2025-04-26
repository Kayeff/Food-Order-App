import { use } from "react";
import { UIContext } from "../store/ui-context";
import { CartContext } from "../store/cart-context";
import ProgressModal from "./ProgressModal";
import CheckoutForm from "./CheckoutForm";
import { formatValue } from "../utils/value-formatter";
import CheckoutDisplay from "./CheckoutDisplay";
import { useHTTP } from "../hooks/useHTTP";
import Button from "./Button";

const postConfig = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export default function Checkout() {
  const { progress, hideCheckout } = use(UIContext);
  const { items, totalPrice, clearCart } = use(CartContext);
  const { data, isLoading, sendRequest, error } = useHTTP(
    "http://localhost:3000/orders",
    postConfig
  );

  function handleClose() {
    hideCheckout();
  }

  function finishProgress() {
    hideCheckout();
    clearCart();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData);

    sendRequest(
      JSON.stringify({ order: { items: items, customer: customerData } })
    );
  }

  if (data && !error) {
    return (
      <ProgressModal
        header="Order Submitted!"
        show={progress === "checkout"}
        handleClose={finishProgress}
        className="w-[40%]"
      >
        <h1 className="tracking-tight">Order Created</h1>
        <div className="w-full flex items-center justify-end gap-2">
          <Button
            disabled={items.length === 0}
            onClick={finishProgress}
            className="bg-white/90 text-black"
          >
            Thank You
          </Button>
        </div>
      </ProgressModal>
    );
  }

  return (
    <ProgressModal
      header="Checkout"
      show={progress === "checkout"}
      className="w-[40%]"
      handleClose={handleClose}
    >
      <ul className="w-full flex flex-col gap-0.5 p-2 border border-white/20 rounded-lg">
        {items.map((item) => (
          <CheckoutDisplay key={item.id} item={item} />
        ))}
      </ul>
      <h1 className="text-end tracking-tight">
        Total: <span>{formatValue(totalPrice)}</span>
      </h1>
      <CheckoutForm
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </ProgressModal>
  );
}
