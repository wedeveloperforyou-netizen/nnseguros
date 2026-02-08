import HeroImageCarousel from "@/components/HeroImageCarousel";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden">

      {/* Carrusel de fondo */}
      <HeroImageCarousel />

      {/* Contenido encima */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Protege lo que más importa
          <br />
          <span className="text-orange-400">con NN Seguros</span>
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Asesoramiento personalizado en seguros de vida, salud y ahorro.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a className="bg-orange-500 px-8 py-4 rounded-full font-semibold">
            Solicitar asesoría
          </a>
          <a className="border border-white px-8 py-4 rounded-full">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}