import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900 text-4xl font-bold">Información de Contacto</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para darle a tu vehículo el cuidado que merece? Aquí tienes toda la información para contactarnos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900">¿Cómo Contactarnos?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Estamos aquí para ayudarte con el cuidado de tu vehículo. Puedes contactarnos a través de cualquiera de estos medios:
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-green-800 mb-2">¡Contáctanos por WhatsApp!</h3>
                  <p className="text-green-700 mb-4">La forma más rápida de obtener información y cotizaciones</p>
                  <a 
                    href="https://wa.me/573132020301?text=Hola, me interesa conocer más sobre sus servicios de pulido" 
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Escribir por WhatsApp</span>
                  </a>
                </div>

                {/* Call CTA */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-6 text-center shadow-lg">
                  <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-red-800 mb-2 font-bold">Llámanos Directamente</h3>
                  <p className="text-red-700 mb-4">Horario de atención telefónica</p>
                  <a 
                    href="tel:+573132020301" 
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg font-bold"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+57 313 202 0301</span>
                  </a>
                </div>

                {/* Email CTA */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 rounded-lg p-6 text-center shadow-lg">
                  <Mail className="h-12 w-12 text-gray-700 mx-auto mb-4" />
                  <h3 className="text-gray-800 mb-2 font-bold">Envíanos un Email</h3>
                  <p className="text-gray-700 mb-4">Para consultas detalladas y presupuestos</p>
                  <a 
                    href="mailto:info@wcardetaily.com?subject=Consulta sobre servicios de detailing" 
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg font-bold"
                  >
                    <Mail className="h-5 w-5" />
                    <span>info@wcardetaily.com</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="grid gap-6">
              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Dirección</h3>
                    <p className="text-gray-600">Calle 123 #45-67<br />Bogotá, Colombia</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <Phone className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+57 313 202 0301</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <Mail className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@wcardetaily.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <Clock className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Horarios</h3>
                    <p className="text-gray-600">
                      Lun - Vie: 8:00 AM - 6:00 PM<br />
                      Sáb: 8:00 AM - 4:00 PM<br />
                      Dom: Cerrado
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Mapa de ubicación</p>
                    <p className="text-sm">Calle 123 #45-67, Bogotá</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}