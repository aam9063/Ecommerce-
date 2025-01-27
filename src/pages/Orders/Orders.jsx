import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Orders() {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      navigate('/')
      return
    }
    setOrders(user.orders || [])
  }, [navigate])

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-6 text-2xl font-bold">Mis Pedidos</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No tienes pedidos realizados</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-white rounded-lg shadow"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Pedido #{order.id}</span>
                <span className="text-primary">${order.total.toFixed(2)}</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
                <p>Estado: {order.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders 