import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import CartContextProvider from "./store/cart-context";
import UIContextProvider from "./store/ui-context";

export default function App() {
  return (
    <CartContextProvider>
      <UIContextProvider>
        <main className="w-full min-h-screen bg-black text-white font-inter relative flex flex-col gap-4">
          <Modal />
          <Header />
          <Meals />
        </main>
      </UIContextProvider>
    </CartContextProvider>
  );
}
