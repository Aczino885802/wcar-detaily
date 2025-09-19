import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Products() {
  const products = [
    {
      id: 1,
      name: "Cera Premium Carnauba",
      price: "$45.000",
      image: "https://images.unsplash.com/photo-1714042073736-8f6347a156a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjbGVhbmluZyUyMHN1cHBsaWVzJTIwYm90dGxlc3xlbnwxfHx8fDE3NTgxMzg3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Cera 100% natural que proporciona un brillo profundo y protección duradera"
    },
    {
      id: 2,
      name: "Kit de Pulido Profesional",
      price: "$85.000",
      image: "https://images.unsplash.com/photo-1647844834608-7e9e9fdb44b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwc29hcCUyMHByb2R1Y3RzfGVufDF8fHx8MTc1ODEzODc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Kit completo con compuestos, ceras y herramientas para pulido profesional"
    },
    {
      id: 3,
      name: "Paños de Microfibra Premium",
      price: "$25.000",
      image: "https://images.unsplash.com/photo-1625562105978-6dac2a7fdbfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZGV0YWlsaW5nJTIwbWljcm9maWJlcnxlbnwxfHx8fDE3NTgxMzg3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Paños de microfibra ultra suaves para un acabado perfecto sin rayones"
    },
    {
      id: 4,
      name: "Compuesto de Pulido Avanzado",
      price: "$65.000",
      image: "https://images.unsplash.com/photo-1613013053193-ac99773425ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwb2xpc2hpbmclMjBjb21wb3VuZHxlbnwxfHx8fDE3NTgxMzg3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Compuesto profesional para eliminar rayones y restaurar el brillo original"
    },
    {
      id: 5,
      name: "Shampoo pH Neutro",
      price: "$35.000",
      image: "https://images.unsplash.com/photo-1740744356759-4b4ff55c479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXglMjBwb2xpc2glMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTgxMzg3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Shampoo especializado que no daña la cera ni el sellador aplicado"
    },
    {
      id: 6,
      name: "Protector de Llantas",
      price: "$40.000",
      image: "https://images.unsplash.com/photo-1636761358756-ef34b4ef036a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZGV0YWlsaW5nJTIwcG9saXNofGVufDF8fHx8MTc1ODEzODc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Protector que devuelve el color original y protege contra el desgaste"
    }
  ]

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">Nuestros Productos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Productos profesionales de la más alta calidad para el cuidado y mantenimiento de tu vehículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-gray-900">{product.name}</CardTitle>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-blue-600">{product.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Consultar Disponibilidad
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}