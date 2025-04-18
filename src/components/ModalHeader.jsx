import cancel from "../assets/close.svg";

export default function ModalHeader({ handleClose, children }) {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-2xl font-medium tracking-tighter">{children}</h1>
      <button onClick={handleClose} className="size-6 cursor-pointer">
        <img
          className="w-full h-full object-cover"
          src={cancel}
          alt="cancel-button"
        />
      </button>
    </div>
  );
}
