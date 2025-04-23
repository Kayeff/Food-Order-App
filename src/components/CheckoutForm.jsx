import { useActionState } from "react";
import { isEmail, validString } from "../utils/input-validation";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

function handleSubmitAction(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const street = formData.get("street");
  const city = formData.get("city");
  const postCode = formData.get("postal-code");

  let errors = [];

  if (!validString(name)) {
    errors.push({ inputField: "name", errorText: "Invalid Full Name" });
  }
  if (!isEmail(email) && !validString(email)) {
    errors.push({ inputField: "email", errorText: "Email is not valid." });
  }
  if (!validString(street)) {
    errors.push({
      inputField: "street",
      errorText: "Invalid Street Address",
    });
  }
  if (!validString(city)) {
    errors.push({ inputField: "city", errorText: "Invalid City" });
  }
  if (!validString(postCode)) {
    errors.push({
      inputField: "postal-code",
      errorText: "Invalid Postal Code",
    });
  }

  if (errors.length > 0) {
    return {
      errors: errors,
      enteredValues: { name, email, street, city, postCode },
    };
  }

  return { errors: null };
}

export default function CheckoutForm({ handleClose }) {
  const [formState, formAction] = useActionState(handleSubmitAction, {
    errors: null,
  });

  let invalidName,
    invalidEmail,
    invalidCity,
    invalidStreet,
    invalidPostalCode = null;

  if (formState.errors !== null) {
    invalidName = formState?.errors.find(
      (error) => error.inputField === "name"
    );
    invalidEmail = formState?.errors.find(
      (error) => error.inputField === "email"
    );
    invalidCity = formState?.errors.find(
      (error) => error.inputField === "city"
    );
    invalidStreet = formState?.errors.find(
      (error) => error.inputField === "street"
    );
    invalidPostalCode = formState?.errors.find(
      (error) => error.inputField === "postal-code"
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-10 w-full">
      <div className="w-full grid grid-cols-2 gap-4">
        <h1 className="col-span-2 text-3xl tracking-tight font-medium">
          Your Info
        </h1>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="name" className="tracking-tight">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            defaultValue={formState.enteredValues?.fullName}
            className={twMerge(
              "outline-0 p-2 tracking-tight border border-white/20 rounded-lg",
              invalidName && "border-red-500/90"
            )}
          />
          {invalidName && (
            <p className="text-sm text-red-500/90">{invalidName.errorText}</p>
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="email" className="tracking-tight">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            defaultValue={formState.enteredValues?.email}
            className={twMerge(
              "outline-0 p-2 tracking-tight border border-white/20 rounded-lg",
              invalidEmail && "border-red-500/90"
            )}
          />
          {invalidEmail && (
            <p className="text-sm text-red-500/90">{invalidEmail.errorText}</p>
          )}
        </div>
        <div className="col-span-2 grid grid-cols-3 gap-2">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="street" className="tracking-tight">
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Ex. Midtown Manhattan"
              defaultValue={formState.enteredValues?.streetAdd}
              className={twMerge(
                "outline-0 p-2 tracking-tight border border-white/20 rounded-lg ",
                invalidStreet && "border-red-500/90"
              )}
            />
            {invalidStreet && (
              <p className="text-sm text-red-500/90">
                {invalidStreet.errorText}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="city" className="tracking-tight">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Ex. New York City"
              defaultValue={formState.enteredValues?.city}
              className={twMerge(
                "outline-0 p-2 tracking-tight border border-white/20 rounded-lg ",
                invalidCity && "border-red-500/90"
              )}
            />
            {invalidCity && (
              <p className="text-sm text-red-500/90">{invalidCity.errorText}</p>
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="postal-code" className="tracking-tight">
              Postal Code
            </label>
            <input
              type="text"
              id="postal-code"
              name="postal-code"
              pattern="[0-9]{6}"
              maxLength={6}
              placeholder="Ex. 100001"
              defaultValue={formState.enteredValues?.postCode}
              className={twMerge(
                "outline-0 p-2 tracking-tight border border-white/20 rounded-lg ",
                invalidPostalCode && "border-red-500/90"
              )}
            />
            {invalidPostalCode && (
              <p className="text-sm text-red-500/90">
                {invalidPostalCode.errorText}
              </p>
            )}
          </div>
        </div>
      </div>
      <h1 className="font-light text-red-500/90">
        {formState.errors !== null &&
          formState.errors.length > 0 &&
          "Please fill out all fields"}
      </h1>
      <div className="w-full flex items-center justify-end gap-2">
        <Button
          onClick={handleClose}
          type="button"
          className="bg-transparent border-white/20 border text-white hover:border-white/40"
        >
          Cancel Order
        </Button>
        <Button className="bg-white/90 text-black border-white/20 border hover:border-white/40 enabled:hover:bg-white">
          Submit Order
        </Button>
      </div>
    </form>
  );
}
