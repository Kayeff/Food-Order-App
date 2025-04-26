import { formatValue } from "../utils/value-formatter";

export default function CheckoutDisplay({ item }) {
  return (
    <li className="grid grid-cols-5">
      <p className="flex gap-1 col-span-3">
        <span className="tracking-tight">{item.quantity}</span>
        <span>x</span>
        <span className="tracking-tight">{item.name}</span>({" "}
        <span className="tracking-tight">{formatValue(item.price)}</span>
        each )
      </p>
      <p className="text-center"> -----&gt; </p>
      <p className="tracking-tight text-end">
        {formatValue(item.quantity * item.price)}
      </p>
    </li>
  );
}
