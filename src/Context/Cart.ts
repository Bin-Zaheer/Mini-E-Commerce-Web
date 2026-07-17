import { createContext } from "react";

export const Cart = createContext<{ isOpen: boolean; setisOpen: (isOpen: boolean) => void }>({
  isOpen: false,
  setisOpen: () => {}
});
