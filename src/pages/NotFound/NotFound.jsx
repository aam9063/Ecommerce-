import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="mb-4 font-bold text-9xl text-primary">404</h1>
        <h2 className="mb-6 text-3xl font-semibold text-gray-800">
          Página no encontrada
        </h2>
        <p className="mb-8 text-gray-600">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-white transition-colors bg-primary rounded-xl hover:bg-secondary"
        >
          <FaHome />
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound 