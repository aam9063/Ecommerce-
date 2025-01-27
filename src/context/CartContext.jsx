import { createContext, useContext } from 'react'

export const CartContext = createContext({
  cart: [],
  isCartOpen: false,
  toggleCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  cartTotal: 0
})

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}