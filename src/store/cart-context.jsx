import { createContext, useReducer, useState } from "react";

export const CartContext = createContext({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  addToCart: (meal) => {},
  removeFromCart: (id) => {},
  clearCart: () => {},
});

function reducerFunction(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItemID = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const updatedItems = [...state.items];

    if (existingItemID !== -1) {
      const existingItem = updatedItems[existingItemID];
      updatedItems[existingItemID] = {
        ...action.payload,
        quantity: existingItem.quantity + 1,
      };
    } else {
      updatedItems.push({ ...action.payload, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingItemID = state.items.findIndex(
      (item) => item.id === action.payload
    );
    if (existingItemID === -1) return state;

    const updatedItems = [...state.items];
    const existingItem = updatedItems[existingItemID];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemID, 1);
    } else {
      updatedItems[existingItemID] = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(reducerFunction, { items: [] });

  function addToCart(meal) {
    dispatch({ type: "ADD_ITEM", payload: meal });
  }

  function removeFromCart(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const totalItems = cartState.items.reduce((a, c) => a + c.quantity, 0);
  const totalPrice = cartState.items.reduce(
    (a, c) => a + c.price * c.quantity,
    0
  );

  const ctxValue = {
    items: cartState.items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
