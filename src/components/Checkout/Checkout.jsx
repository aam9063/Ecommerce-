import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const { cartTotal, toggleCart, clearCart, cart } = useCart()
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: ''
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      navigate('/login')
      return
    }

    const order = {
      id: Date.now(),
      date: new Date(),
      total: cartTotal,
      status: 'Procesando',
      items: cart,
      shipping: {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        direccion: formData.direccion
      }
    }

    const updatedUser = {
      ...user,
      orders: [...(user.orders || []), order]
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    
    setShowSuccess(true)
    clearCart()
    setTimeout(() => {
      setShowSuccess(false)
      toggleCart()
      navigate('/orders')
    }, 3000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-2xl p-6 mx-auto bg-white shadow-lg rounded-xl">
        {showSuccess ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="py-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-green-600">
              ¡Pedido realizado con éxito!
            </h2>
            <p className="text-gray-600">
              Recibirás un email con los detalles de tu compra
            </p>
          </motion.div>
        ) : (
          <>
            <h2 className="mb-6 text-2xl font-bold">Finalizar Compra</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    required
                    value={formData.direccion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="pt-6 mt-6 border-t">
                <h3 className="mb-4 text-lg font-semibold">Información de pago</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Número de tarjeta
                    </label>
                    <input
                      type="text"
                      name="numeroTarjeta"
                      required
                      value={formData.numeroTarjeta}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Fecha de expiración
                      </label>
                      <input
                        type="text"
                        name="fechaExpiracion"
                        required
                        value={formData.fechaExpiracion}
                        onChange={handleInputChange}
                        placeholder="MM/AA"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t">
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-semibold">Total a pagar:</span>
                  <span className="text-xl font-bold text-primary">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-white transition-colors bg-primary hover:bg-secondary rounded-xl"
                >
                  Pagar ahora
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default Checkout 