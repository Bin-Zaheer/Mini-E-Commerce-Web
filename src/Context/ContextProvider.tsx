import  { useState, type ReactNode } from 'react'
import { Cart } from './Cart'

export function ContextProvider({ children }: { children: ReactNode }) {

    
    const [isOpen, setisOpen] = useState<boolean>(false)
    
  return (
    (
    <Cart.Provider value={{ isOpen, setisOpen }}>
        {children}
    </Cart.Provider>
    )
  )
}