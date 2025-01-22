import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'

function Cart() {
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, cartTotal } = useCart()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 z-40 bg-black"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 z-50 w-full h-full max-w-md p-6 bg-white shadow-lg"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Carrito</h2>
                <button
                  onClick={toggleCart}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="flex items-center justify-center flex-grow">
                  <p className="text-gray-500">Tu carrito está vacío</p>
                </div>
              ) : (
                <>
                  <div className="flex-grow overflow-y-auto">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        className="flex items-center gap-4 p-4 border-b"
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="object-cover w-20 h-20 rounded-lg"
                        />
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="font-semibold text-primary">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded hover:bg-gray-100"
                            >
                              <FaMinus className="text-sm" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded hover:bg-gray-100"
                            >
                              <FaPlus className="text-sm" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 rounded-full hover:bg-red-100"
                        >
                          <FaTrash />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                  <div className="pt-6 mt-6 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-xl font-bold text-primary">
                        ${cartTotal.toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full py-3 text-white transition-colors bg-primary rounded-xl hover:bg-secondary">
                      Finalizar Compra
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Cart 