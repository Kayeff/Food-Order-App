import { createContext, useState } from "react";

export const UIContext = createContext({
  isCartVisible: null,
  isCheckoutVisible: null,
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
  handleGotoCheckout: () => {},
});

export default function UIContextProvider({ children }) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  function showCart() {
    setIsCartVisible(true);
  }

  function hideCart() {
    setIsCartVisible(false);
  }

  function showCheckout() {
    setIsCheckoutVisible(true);
  }

  function hideCheckout() {
    setIsCheckoutVisible(false);
  }

  function handleGotoCheckout() {
    hideCart();
    showCheckout();
  }

  const ctxValue = {
    isCartVisible,
    isCheckoutVisible,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
    handleGotoCheckout,
  };

  return <UIContext.Provider value={ctxValue}>{children}</UIContext.Provider>;
}
