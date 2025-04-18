import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  addToCart: (meal) => {},
  removeFromCart: (id) => {},
  updateCartQuantity: (id, doo) => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(meal) {
    const { id, price, name } = meal;
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity++ } : item
        );
      }

      return [...prev, { id, price: Number(price), name, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function updateCartQuantity(id, doo) {
    if (doo === "+") {
      setCart((prev) => {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity++ } : item
        );
      });
    } else if (doo === "-") {
      setCart((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            if (item.quantity === 0) {
              removeFromCart(id);
            }
            return { ...item, quantity: item.quantity-- };
          }
          return item;
        });
      });
    }
  }

  const totalItems = cart.reduce((a, c) => a + c.quantity, 0);
  const totalPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);

  const ctxValue = {
    cart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateCartQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
