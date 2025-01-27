import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import PropTypes from 'prop-types'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault() // Evita la navegación al hacer clic en el botón
    addToCart(product, 1)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col h-full overflow-hidden bg-white shadow-lg rounded-2xl"
    >
      <Link to={`/products/${product.id}`} className="flex flex-col flex-1">
        <div className="relative group aspect-[4/3] overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20" />
        </div>

        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {product.title}
            </h3>
            <span className="px-2 py-1 ml-2 text-sm rounded-lg bg-primary/10 text-primary whitespace-nowrap">
              {product.category}
            </span>
          </div>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({product.rating})
              </span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="text-sm text-red-500">
                    -{Math.round(product.discountPercentage)}%
                  </span>
                )}
              </div>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="flex items-center gap-2 p-2 text-white transition-colors duration-300 rounded-xl bg-primary hover:bg-secondary"
              >
                <FaShoppingCart />
                <span className="hidden sm:inline">Añadir</span>
              </motion.button>
            </div>

            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>

            {product.stock < 10 && (
              <div className="mt-3">
                <span className="text-sm text-red-500">
                  ¡Solo quedan {product.stock} unidades!
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    discountPercentage: PropTypes.number
  }).isRequired
}

export default ProductCard