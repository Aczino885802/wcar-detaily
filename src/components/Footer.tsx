import { Car, Facebook, Instagram, Twitter, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-2 rounded-lg shadow-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl text-white font-bold">W.CAR.DETAILY</span>
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas en detailing y pulido profesional de carros y motos. W.CAR.DETAILY - cuidado profesional para tu vehículo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/573132020301" 
                className="text-gray-300 hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4 font-bold">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicios" className="hover:text-orange-400 transition-colors">Descontaminación</a></li>
              <li><a href="#servicios" className="hover:text-red-400 transition-colors">Restauración de Pintura</a></li>
              <li><a href="#servicios" className="hover:text-orange-400 transition-colors">Nano Cerámico</a></li>
              <li><a href="#servicios" className="hover:text-red-400 transition-colors">Lavado Completo</a></li>
              <li><a href="#servicios" className="hover:text-orange-400 transition-colors">Servicios a Domicilio</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4 font-bold">Enlaces</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#inicio" className="hover:text-red-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-orange-400 transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-red-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4 font-bold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-sm">Calle 123 #45-67, Bogotá</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm">+57 313 202 0301</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-sm">info@wcardetaily.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <a 
                  href="https://wa.me/573132020301" 
                  className="text-sm hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +57 313 202 0301
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 W.CAR.DETAILY. Todos los derechos reservados. Cuidado profesional para tu vehículo.
          </p>
        </div>
      </div>
    </footer>
  )
}