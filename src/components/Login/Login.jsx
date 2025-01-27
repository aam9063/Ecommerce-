import { useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function Login({ onClose, setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Guardar en localStorage
    localStorage.setItem('user', JSON.stringify({
      username: formData.username,
      orders: []
    }))
    setIsLoggedIn(true)
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <div className="w-full max-w-md p-6 bg-white rounded-xl">
        <h2 className="mb-6 text-2xl font-bold">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 transition-colors border rounded-lg hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white transition-colors rounded-lg bg-primary hover:bg-secondary"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}

export default Login 