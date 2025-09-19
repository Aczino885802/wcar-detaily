import { Car, Bike, ShoppingBag, Droplets, Shield, Wrench, Lightbulb, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export function Services() {
  const services = [
    {
      icon: <Droplets className="h-12 w-12 text-red-600" />,
      title: "DESCONTAMINACIÓN DE RANURAS Y DE PINTURA",
      description: "Elimina impurezas, manchas, excremento de pájaros para un acabado perfecto.",
      features: ["Eliminación de contaminantes", "Limpieza profunda", "Acabado perfecto", "Preparación para pulido"]
    },
    {
      icon: <Sparkles className="h-12 w-12 text-orange-600" />,
      title: "RESTAURACIÓN DE PINTURAS REALES DE BRILLO",
      description: "Recuperamos el brillo original de tu auto.",
      features: ["Restauración completa", "Brillo original", "Técnicas profesionales", "Resultados duraderos"]
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "PROTECCIÓN DE DIAMANTIZADO CON NANO CERÁMICO",
      description: "Protege la pintura con una capa protectora duradera y resistente.",
      features: ["Protección nano cerámica", "Resistencia extrema", "Acabado diamantizado", "Durabilidad superior"]
    },
    {
      icon: <Car className="h-12 w-12 text-orange-600" />,
      title: "LAVADO DE COJINERÍA, TECHO Y ALFOMBRAS",
      description: "Limpieza profunda para un interior de tu vehículo.",
      features: ["Limpieza de tapicería", "Lavado de techo", "Alfombras", "Interior impecable"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-red-600" />,
      title: "RESTAURACIÓN DE PARTES NEGRAS",
      description: "Devuelve la vida a plásticos y gomas descoloridas.",
      features: ["Restauración de plásticos", "Renovación de gomas", "Color original", "Protección UV"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-orange-600" />,
      title: "RESTAURACIÓN DE MOTOR",
      description: "Mantenemos tu motor en óptima condición y libre de suciedad.",
      features: ["Limpieza profunda", "Desengrase completo", "Protección anticorrosiva", "Motor como nuevo"]
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-red-600" />,
      title: "RESTAURACIÓN DE FAROLAS",
      description: "Mejoramos la visibilidad y estética de tus faros.",
      features: ["Eliminación de opacidad", "Mejor visibilidad", "Protección UV", "Estética renovada"]
    },
    {
      icon: <Sparkles className="h-12 w-12 text-orange-600" />,
      title: "PULIDO Y LAVADO COMPLETO",
      description: "Un tratamiento integral para que tu auto brille por dentro y por fuera.",
      features: ["Servicio completo", "Interior y exterior", "Pulido profesional", "Resultado integral"]
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white text-4xl font-bold">NUESTROS SERVICIOS INCLUYEN</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Servicios profesionales integrales para transformar tu vehículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 hover:shadow-2xl hover:border-red-500 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 p-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full w-20 h-20 mx-auto items-center">
                  {service.icon}
                </div>
                <CardTitle className="text-white text-sm font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Button 
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold shadow-lg"
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Cotizar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}