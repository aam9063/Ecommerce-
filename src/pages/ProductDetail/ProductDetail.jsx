import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaMinus, FaPlus, FaShoppingCart, FaArrowLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useCart } from '../../context/CartContext'
import productsData from '../../mocks/products.json'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const foundProduct = productsData.products.find(p => p.id === parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [id])

  if (!product) {
    return (
      <div className="container px-4 py-8 mx-auto">
        <p>Producto no encontrado</p>
      </div>
    )
  }

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(product.stock, quantity + value))
    setQuantity(newQuantity)
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const calculateDiscountedPrice = () => {
    const discount = product.price * (product.discountPercentage / 100)
    return (product.price - discount).toFixed(2)
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 text-gray-600 hover:text-primary"
      >
        <FaArrowLeft />
        Volver
      </motion.button>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Galería de imágenes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="overflow-hidden rounded-2xl"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${product.title} - imagen ${index + 1}`}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  loading="lazy"
                  className="object-cover w-full h-20"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Información del producto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h1 className="mb-2 text-3xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-primary">
              ${calculateDiscountedPrice()}
            </div>
            {product.discountPercentage > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-xl text-gray-400 line-through">
                  ${product.price}
                </span>
                <span className="px-2 py-1 text-sm text-red-600 bg-red-100 rounded-lg">
                  -{Math.round(product.discountPercentage)}%
                </span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Marca:</span>
              <span className="font-semibold">{product.brand}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Categoría:</span>
              <span className="font-semibold">{product.category}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Stock:</span>
              <span className="font-semibold">{product.stock} unidades</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Valoración:</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
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
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                <FaMinus />
              </button>
              <span className="w-12 text-xl font-semibold text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                <FaPlus />
              </button>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="flex items-center justify-center w-full gap-2 px-6 py-3 text-white transition-colors bg-primary rounded-xl hover:bg-secondary"
            >
              <FaShoppingCart />
              Añadir al carrito - ${(calculateDiscountedPrice() * quantity).toFixed(2)}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductDetail