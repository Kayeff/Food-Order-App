import { RiErrorWarningFill, RiRestartLine } from "@remixicon/react";
import Button from "./Button";

export default function ErrorMessage({ title, message, meals }) {
  return (
    <div className="w-full flex items-center justify-center flex-col p-5">
      <span>
        <RiErrorWarningFill className="text-red-400" />
      </span>
      <h1 className="text-red-400 text-xl tracking-tight">{title}</h1>
      <p className="tracking-tight">{message}</p>
      {meals && (
        <Button
          onClick={() => location.reload()}
          className="flex flex-col items-center justify-center"
        >
          <RiRestartLine />
          <p>Reload page</p>
        </Button>
      )}
    </div>
  );
}
