import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ProductGrid } from '../../components'
import productsData from '../../mocks/products.json'
import ProductFilters from '../../components/ProductGrid/ProductFilters'
import { usePagination } from '../../hooks/usePagination'

function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    maxPrice: 2000,
    sort: 'default'
  })

  useEffect(() => {
    setProducts(productsData.products)
    setFilteredProducts(productsData.products)
  }, [])

  useEffect(() => {
    let updatedProducts = [...products]

    if (filters.category) {
      updatedProducts = updatedProducts.filter(product => product.category === filters.category)
    }

    if (filters.brand) {
      updatedProducts = updatedProducts.filter(product => product.brand === filters.brand)
    }

    updatedProducts = updatedProducts.filter(product => product.price <= filters.maxPrice)

    if (filters.sort === 'price-asc') {
      updatedProducts.sort((a, b) => a.price - b.price)
    } else if (filters.sort === 'price-desc') {
      updatedProducts.sort((a, b) => b.price - a.price)
    } else if (filters.sort === 'alphabetical') {
      updatedProducts.sort((a, b) => a.title.localeCompare(b.title))
    }

    setFilteredProducts(updatedProducts)
  }, [filters, products])

  const categories = [...new Set(products.map(product => product.category))]
  const brands = [...new Set(products.map(product => product.brand))]
  const sortOptions = [
    { value: 'default', label: 'Por defecto' },
    { value: 'price-asc', label: 'Precio: Menor a Mayor' },
    { value: 'price-desc', label: 'Precio: Mayor a Menor' },
    { value: 'alphabetical', label: 'Alfabético' }
  ]

  const {
    currentPage,
    paginatedItems: paginatedProducts,
    totalPages,
    goToPage,
    nextPage,
    previousPage,
    pageNumbers
  } = usePagination(filteredProducts, 9)

  return (
    <div>
      <section className="container px-4 py-16 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-center"
        >
          Todos los Productos
        </motion.h2>

        <ProductFilters 
          filters={filters} 
          setFilters={setFilters} 
          categories={categories} 
          brands={brands} 
          sortOptions={sortOptions} 
        />

        <ProductGrid products={paginatedProducts} />

        {/* Controles de paginación */}
        <div className="flex justify-center mt-8">
          <button
            onClick={previousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 text-white rounded bg-primary disabled:opacity-50"
          >
            Anterior
          </button>
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => goToPage(number)}
              className={`px-4 py-2 mx-1 rounded ${currentPage === number ? 'bg-secondary text-white' : 'bg-gray-200'}`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 text-white rounded bg-primary disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </section>
    </div>
  )
}

export default Products