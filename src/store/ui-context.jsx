import { createContext, useState } from "react";

export const UIContext = createContext({
  progress: "",
  setProgress: () => {},
});

export default function UIContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");
  const ctxValue = {
    progress: userProgress,
    setProgress: setUserProgress,
  };
  return <UIContext.Provider value={ctxValue}>{children}</UIContext.Provider>;
}
