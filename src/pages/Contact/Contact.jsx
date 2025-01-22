import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      info: '+34 900 123 456',
      detail: 'Lun-Vie 9:00-18:00'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'info@techstore.com',
      detail: 'Respuesta en 24h'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ubicación',
      info: 'Calle Tecnología 123',
      detail: '28001 Madrid, España'
    },
    {
      icon: <FaClock />,
      title: 'Horario',
      info: 'Lun-Vie: 9:00-18:00',
      detail: 'Sáb: 10:00-14:00'
    }
  ]

  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Contacta con Nosotros</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Estamos aquí para ayudarte. Envíanos tus dudas o consultas y te responderemos
          lo antes posible.
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-6 bg-white shadow-lg rounded-2xl"
              >
                <div className="mb-4 text-2xl text-primary">{item.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.info}</p>
                <p className="text-sm text-gray-500">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-6 text-white bg-primary rounded-2xl">
            <h3 className="mb-4 text-xl font-semibold">¿Necesitas ayuda inmediata?</h3>
            <p className="mb-4">
              Nuestro equipo de soporte está disponible para atenderte por teléfono
              durante el horario comercial.
            </p>
            <a
              href="tel:+34900123456"
              className="inline-flex items-center gap-2 px-6 py-3 transition-colors bg-white text-primary rounded-xl hover:bg-gray-100"
            >
              <FaPhone />
              Llamar ahora
            </a>
          </div>
        </motion.div>

        {/* Formulario de contacto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-2xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Motivo de tu consulta"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 transition-colors border border-gray-300 resize-none rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-xl text-white transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-secondary'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-600"
                >
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-red-600"
                >
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 