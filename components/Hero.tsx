import HeroImageCarousel from "@/components/HeroImageCarousel";

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24 relative h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden">

      {/* Carrusel de fondo */}
      <HeroImageCarousel />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido encima */}
      <div className="relative z-10 max-w-2xl px-6 text-center text-white">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Protege lo que más importa
          <span className="block text-orange-400">
            con NN Seguros
          </span>
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-xl text-white/90">
          Asesoramiento personalizado en seguros de vida, salud y ahorro.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#contacto"
            className="bg-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Solicitar asesoría
          </a>

          <a
            href="https://wa.me/XXXXXXXXX"
            className="border border-white px-8 py-4 rounded-full hover:bg-white/10 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}