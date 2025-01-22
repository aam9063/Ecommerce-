import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import Cart from '../Cart/Cart'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false) 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleCart, cart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/products', label: 'Productos' },
    { path: '/about', label: 'Sobre Nosotros' },
    { path: '/contact', label: 'Contacto' },
  ]

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="TechStore Logo"
              className="w-auto h-8"
            />
          </Link>

          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative text-gray-700 hover:text-primary transition-colors ${
                  location.pathname === path ? 'font-semibold' : ''
                }`}
              >
                {label}
                {location.pathname === path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full hover:bg-gray-100"
            >
              <FaShoppingCart className="text-2xl text-gray-700" />
              {cart.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 -right-1 bg-primary">
                  {cart.length}
                </span>
              )}
            </button>
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 rounded-full md:hidden hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl text-gray-700" />
              ) : (
                <FaBars className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4 bg-white shadow-lg">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={handleMobileMenuToggle}
                className={`relative text-gray-700 hover:text-primary transition-colors ${
                  location.pathname === path ? 'font-semibold' : ''
                }`}
              >
                {label}
                {location.pathname === path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      <Cart />
    </motion.nav>
  )
}

export default Navbar