import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590450175039-815996ebfe02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBibGFjayUyMHJlZHxlbnwxfHx8fDE3NTgyOTQ2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Deportivo de lujo negro y rojo brillante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="mb-6 text-4xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            TRANSFORMA TU AUTO
          </span>
          <br />
          <span className="text-white">CON NUESTROS SERVICIOS</span>
        </h1>
        <div className="mb-8 space-y-4">
          <p className="text-2xl md:text-3xl text-white font-semibold">
            ¿Quieres que tu auto luzca como nuevo?
          </p>
          <p className="text-xl text-gray-200">
            Nosotros tenemos la solución perfecta
          </p>
          <p className="text-lg">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 rounded-full text-white font-bold shadow-lg inline-flex items-center gap-2">
              🚗 TODOS LOS SERVICIOS A DOMICILIO
            </span>
          </p>
          <p className="text-base text-gray-300">
            No pierdas tiempo, nosotros vamos a donde estés
          </p>
        </div>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
          onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Conoce Nuestros Servicios
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}