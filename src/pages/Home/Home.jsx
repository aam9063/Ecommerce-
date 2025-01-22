import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Hero, ProductGrid } from '../../components'
import productsData from '../../mocks/products.json'

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [mainProducts, setMainProducts] = useState([])

  useEffect(() => {
    // Asegúrate de acceder a la propiedad 'products' del archivo JSON
    const products = productsData.products

    // Seleccionar 3 productos aleatorios para el Hero
    const shuffled = [...products].sort(() => 0.5 - Math.random())
    setFeaturedProducts(shuffled.slice(0, 3))
    
    // Seleccionar 6 productos principales
    setMainProducts(shuffled.slice(3, 9))
  }, [])

  return (
    <div>
      <Hero featuredProducts={featuredProducts} />
      
      <section className="container px-4 py-16 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-center"
        >
          Productos Destacados
        </motion.h2>
        
        <ProductGrid products={mainProducts} />
      </section>
    </div>
  )
}

export default Home