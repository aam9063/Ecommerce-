import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function Hero({ featuredProducts }) {
  return (
    <div className="h-[80vh] bg-gray-50">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {featuredProducts?.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative flex items-center w-full h-full">
              <div className="container relative z-10 flex items-center justify-between px-4 mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl"
                >
                  <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl">
                    {product.title}
                  </h2>
                  <p className="mb-8 text-xl text-gray-600">
                    {product.description}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      to={`/products/${product.id}`}
                      className="px-8 py-3 text-white transition-colors bg-primary hover:bg-secondary rounded-xl"
                    >
                      Comprar Ahora
                    </Link>
                    <span className="text-3xl font-bold text-gray-800">
                      ${product.price}
                    </span>
                  </div>
                </motion.div>
                <div className="w-1/2 h-[60vh]">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

Hero.propTypes = {
  featuredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
}

export default Hero