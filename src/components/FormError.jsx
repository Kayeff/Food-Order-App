export default function FormError({ formError }) {
  return (
    <h1 className="font-light text-red-500/90">
      {formError !== null &&
        formError.length > 0 &&
        "Please fill out all fields"}
    </h1>
  );
}
