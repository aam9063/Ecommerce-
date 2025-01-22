import { useState, useMemo } from 'react'

export function usePagination(items, itemsPerPage = 9) {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    return items.slice(indexOfFirstItem, indexOfLastItem)
  }, [items, currentPage, itemsPerPage])

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const goToPage = (pageNumber) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)))
  }

  const nextPage = () => {
    goToPage(currentPage + 1)
  }

  const previousPage = () => {
    goToPage(currentPage - 1)
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return {
    currentPage,
    paginatedItems,
    totalPages,
    goToPage,
    nextPage,
    previousPage,
    pageNumbers,
    itemsPerPage
  }
} 