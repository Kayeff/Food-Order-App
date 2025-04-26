export default function Input({ label, isEmail, ...props }) {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor="name" className="tracking-tight">
        {label}
      </label>
      <input
        {...props}
        type={isEmail ? "email" : "text"}
        className="outline-0 p-2 tracking-tight border border-white/20 rounded-lg"
        required
      />
    </div>
  );
}
