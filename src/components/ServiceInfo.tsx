import { Clock, Shield, Award, Users, Home, MapPin } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export function ServiceInfo() {
  const features = [
    {
      icon: <Home className="h-8 w-8 text-red-600" />,
      title: "Servicio a Domicilio",
      description: "Vamos donde estés. No pierdas tiempo, nosotros nos desplazamos a tu ubicación"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Profesionales Certificados",
      description: "Técnicos especializados con años de experiencia en detailing automotriz"
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Resultados Inmediatos",
      description: "Tu vehículo transformado en el mismo día con resultados visibles"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Atención Personalizada",
      description: "Cada servicio se adapta a las necesidades específicas de tu vehículo"
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Evaluación",
      description: "Inspeccionamos tu vehículo para determinar el mejor tratamiento"
    },
    {
      step: "2",
      title: "Preparación",
      description: "Lavado profundo y preparación de la superficie"
    },
    {
      step: "3",
      title: "Pulido",
      description: "Aplicación de compuestos y técnicas profesionales de pulido"
    },
    {
      step: "4",
      title: "Protección",
      description: "Encerado y sellado para proteger el acabado"
    },
    {
      step: "5",
      title: "Entrega",
      description: "Inspección final y entrega de tu vehículo reluciente"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Service Highlight */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 lg:p-12 mb-16 text-white text-center shadow-2xl">
          <Home className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="mb-4 text-white text-3xl font-bold">TODOS LOS SERVICIOS A DOMICILIO</h2>
          <p className="text-xl text-red-100 mb-6">
            No pierdas tiempo, nosotros vamos a donde estés
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-2 text-orange-200" />
              <p className="text-red-100 font-semibold">Tu casa</p>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-2 text-orange-200" />
              <p className="text-red-100 font-semibold">Tu oficina</p>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-2 text-orange-200" />
              <p className="text-red-100 font-semibold">Donde necesites</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">¿Por Qué Elegir Nuestros Servicios?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas en el cuidado automotriz con años de experiencia transformando vehículos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-gray-50 to-white border-2 hover:border-red-200 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 p-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-full w-16 h-16 mx-auto items-center">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 mb-2 font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white text-3xl font-bold">Nuestro Proceso de Trabajo</h2>
            <p className="text-xl text-gray-300">
              Cada paso está diseñado para obtener los mejores resultados
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-white mb-2 font-bold">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-1/2 transform translate-x-8 w-8 h-0.5 bg-gradient-to-r from-red-400 to-orange-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-gray-900 mb-4">Horarios de Atención</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="text-gray-900">Lunes a Viernes:</span> 8:00 AM - 6:00 PM</p>
              <p><span className="text-gray-900">Sábados:</span> 8:00 AM - 4:00 PM</p>
              <p><span className="text-gray-900">Domingos:</span> Cerrado</p>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4">Servicios Especializados</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mr-3"></div>
                Eliminación de rayones profundos
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mr-3"></div>
                Restauración de faros opacos
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mr-3"></div>
                Tratamiento de cromados
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mr-3"></div>
                Protección cerámica
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}