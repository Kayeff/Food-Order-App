import { use } from "react";
import { UIContext } from "../store/ui-context";
import Button from "./Button";
import Input from "./Input";

export default function CheckoutForm() {
  const { setProgress } = use(UIContext);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
      <div className="w-full grid grid-cols-2 gap-4">
        <h1 className="col-span-2 text-3xl tracking-tight font-medium">
          Your Info
        </h1>
        <Input
          label="Full name"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
        />
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <div className="col-span-2 grid grid-cols-3 gap-2">
          <Input
            label="Street"
            type="text"
            id="street"
            name="street"
            placeholder="Ex. Midtown Manhattan"
          />
          <Input
            label="City"
            type="text"
            id="city"
            name="city"
            placeholder="Ex. New York City"
          />
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            name="postal-code"
            pattern="[0-9]{6}"
            maxLength={6}
            placeholder="Ex. 100001"
          />
        </div>
      </div>
      {/* {error && (
        <ErrorMessage
          title="Failed to submit order."
          message={error.message}
          meals={false}
        />
      )} */}
      <div className="w-full flex items-center justify-end gap-2">
        <Button
          onClick={() => setProgress("")}
          type="button"
          className="bg-transparent border-white/20 border text-white hover:border-white/40"
        >
          Cancel Order
        </Button>
        <Button
          type="submit"
          className="bg-white/90 text-black border-white/20 border hover:border-white/40 enabled:hover:bg-white"
        >
          Submit Order
        </Button>
      </div>
    </form>
  );
}
