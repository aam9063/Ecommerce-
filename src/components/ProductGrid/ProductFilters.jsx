import PropTypes from 'prop-types'

function ProductFilters({ 
  filters, 
  setFilters, 
  categories, 
  brands,
  sortOptions 
}) {
  return (
    <div className="p-6 mb-8 bg-white shadow-md rounded-xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Filtro por categoría */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Categoría
          </label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Todas</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por marca */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Marca
          </label>
          <select
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Todas</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por precio */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Precio máximo: ${filters.maxPrice}
          </label>
          <input
            type="range"
            min="0"
            max="2000"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            className="w-full"
          />
        </div>

        {/* Ordenamiento */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Ordenar por
          </label>
          <select
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

ProductFilters.propTypes = {
  filters: PropTypes.shape({
    category: PropTypes.string,
    brand: PropTypes.string,
    maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sort: PropTypes.string
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })).isRequired
}

export default ProductFilters 