import { useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Gallery() {
  const [selectedTab, setSelectedTab] = useState('carros')

  const carGallery = [
    {
      before: "https://images.unsplash.com/photo-1594798546489-0a5cd52bb4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiZWZvcmUlMjBhZnRlciUyMHBvbGlzaHxlbnwxfHx8fDE3NTgxMzg3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      after: "https://images.unsplash.com/photo-1629281066736-ff3a1e6b36d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzU4MTM4NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "BMW Serie 3 - Restauración completa de pintura"
    },
    {
      before: "https://images.unsplash.com/photo-1675809421826-c75a78a78fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlueSUyMHBvbGlzaGVkJTIwY2FyJTIwYmx1ZXxlbnwxfHx8fDE3NTgxMzg3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      after: "https://images.unsplash.com/photo-1629281066736-ff3a1e6b36d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzU4MTM4NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Audi A4 - Pulido profesional y encerado"
    },
    {
      before: "https://images.unsplash.com/photo-1594798546489-0a5cd52bb4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiZWZvcmUlMjBhZnRlciUyMHBvbGlzaHxlbnwxfHx8fDE3NTgxMzg3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      after: "https://images.unsplash.com/photo-1675809421826-c75a78a78fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlueSUyMHBvbGlzaGVkJTIwY2FyJTIwYmx1ZXxlbnwxfHx8fDE3NTgxMzg3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Mercedes-Benz - Eliminación de rayones profundos"
    }
  ]

  const motoGallery = [
    {
      before: "https://images.unsplash.com/photo-1636761358756-ef34b4ef036a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZGV0YWlsaW5nJTIwcG9saXNofGVufDF8fHx8MTc1ODEzODc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      after: "https://images.unsplash.com/photo-1636761358756-ef34b4ef036a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZGV0YWlsaW5nJTIwcG9saXNofGVufDF8fHx8MTc1ODEzODc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Harley Davidson - Restauración de cromados"
    },
    {
      before: "https://images.unsplash.com/photo-1636761358756-ef34b4ef036a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZGV0YWlsaW5nJTIwcG9saXNofGVufDF8fHx8MTc1ODEzODc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      after: "https://images.unsplash.com/photo-1636761358756-ef34b4ef036a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZGV0YWlsaW5nJTIwcG9saXNofGVufDF8fHx8MTc1ODEzODc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Yamaha R1 - Pulido y protección total"
    }
  ]

  const currentGallery = selectedTab === 'carros' ? carGallery : motoGallery

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">Galería de Trabajos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mira la transformación de nuestros trabajos. Antes y después de nuestros servicios profesionales de pulido
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setSelectedTab('carros')}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                selectedTab === 'carros'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Carros
            </button>
            <button
              onClick={() => setSelectedTab('motos')}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                selectedTab === 'motos'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Motos
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentGallery.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <ImageWithFallback
                      src={item.before}
                      alt="Antes del pulido"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
                      Antes
                    </div>
                  </div>
                  <div className="relative">
                    <ImageWithFallback
                      src={item.after}
                      alt="Después del pulido"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm">
                      Después
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-800">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}