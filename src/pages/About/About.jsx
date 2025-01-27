import { motion } from 'framer-motion'
import { FaShieldAlt, FaTruck, FaHeadset, FaRegHandshake } from 'react-icons/fa'

function About() {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Calidad Garantizada",
      description: "Todos nuestros productos pasan por rigurosos controles de calidad."
    },
    {
      icon: <FaTruck className="text-4xl text-primary" />,
      title: "Envío Rápido",
      description: "Entrega en 24/48 horas a cualquier punto del país."
    },
    {
      icon: <FaHeadset className="text-4xl text-primary" />,
      title: "Soporte 24/7",
      description: "Atención al cliente disponible todos los días del año."
    },
    {
      icon: <FaRegHandshake className="text-4xl text-primary" />,
      title: "Satisfacción Garantizada",
      description: "30 días de garantía de devolución sin preguntas."
    }
  ]

  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Hero Section */}
      <motion.div 
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
          Nuestra Historia
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-600">
          Desde 2010, TechStore ha sido líder en la venta de productos tecnológicos,
          ofreciendo la mejor selección de dispositivos con un servicio excepcional.
        </p>
      </motion.div>

      {/* Imagen y Misión */}
      <div className="grid items-center gap-12 mb-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/public/imgs/about.webp" 
            alt="Nuestra tienda"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Nuestra Misión
          </h2>
          <p className="leading-relaxed text-gray-600">
            En TechStore, nos dedicamos a hacer que la tecnología sea accesible para todos.
            Creemos en ofrecer productos de alta calidad a precios competitivos, respaldados
            por un servicio al cliente excepcional.
          </p>
          <p className="leading-relaxed text-gray-600">
            Nuestro compromiso con la excelencia nos ha permitido crecer y convertirnos
            en un referente en el sector de la tecnología, sirviendo a miles de clientes
            satisfechos en todo el país.
          </p>
        </motion.div>
      </div>

      {/* Características */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid gap-8 mb-20 md:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="p-6 text-center transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Estadísticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-12 text-white bg-primary rounded-2xl"
      >
        <div className="grid gap-8 text-center md:grid-cols-4">
          <div>
            <div className="mb-2 text-4xl font-bold">10K+</div>
            <div className="text-lg">Clientes Satisfechos</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold">1000+</div>
            <div className="text-lg">Productos</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold">13</div>
            <div className="text-lg">Años de Experiencia</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold">24/7</div>
            <div className="text-lg">Soporte</div>
          </div>
        </div>
      </motion.div>

      {/* Equipo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-20 text-center"
      >
        <h2 className="mb-12 text-3xl font-bold text-gray-800">
          Nuestros Valores
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Innovación
            </h3>
            <p className="text-gray-600">
              Constantemente buscamos las últimas tecnologías para ofrecer
              lo mejor a nuestros clientes.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Integridad
            </h3>
            <p className="text-gray-600">
              Actuamos con honestidad y transparencia en todas nuestras
              operaciones.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Excelencia
            </h3>
            <p className="text-gray-600">
              Nos esforzamos por superar las expectativas en cada interacción.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About 