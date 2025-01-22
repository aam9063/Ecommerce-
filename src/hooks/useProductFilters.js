import { useState, useMemo } from 'react'

export function useProductFilters(products) {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    maxPrice: 2000,
    sort: 'name-asc'
  })

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Aplicar filtros
    if (filters.category) {
      result = result.filter(product => product.category === filters.category)
    }
    if (filters.brand) {
      result = result.filter(product => product.brand === filters.brand)
    }
    result = result.filter(product => product.price <= filters.maxPrice)

    // Aplicar ordenamiento
    switch (filters.sort) {
      case 'name-asc':
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'name-desc':
        result.sort((a, b) => b.title.localeCompare(a.title))
        break
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    return result
  }, [products, filters])

  return {
    filters,
    setFilters,
    filteredProducts
  }
} 