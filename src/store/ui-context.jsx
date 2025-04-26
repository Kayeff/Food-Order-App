import { createContext, useState } from "react";

export const UIContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
  showResult: () => {},
  hideResult: () => {},
});

export default function UIContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    if (userProgress === "cart") {
      setUserProgress("");
    }
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    if (userProgress === "checkout") {
      setUserProgress("");
    }
  }

  function showResult() {
    setUserProgress("result");
  }

  function hideResult() {
    if (userProgress === "result") {
      setUserProgress("");
    }
  }

  const ctxValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
    showResult,
    hideResult,
  };
  return <UIContext.Provider value={ctxValue}>{children}</UIContext.Provider>;
}
