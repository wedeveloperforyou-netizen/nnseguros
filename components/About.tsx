export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-8 items-center">

        <div className="h-[420px] bg-gray-200 rounded-3xl flex items-center justify-center">
          <span className="text-gray-500">
            Foto profesional
          </span>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Acompañándote en cada decisión
          </h2>

          <p className="mt-6 text-gray-700">
            Soy Nelcy Garcia asesora de NN Seguros y mi trabajo es ayudarte a proteger
            lo que más valoras, con soluciones claras y adaptadas a tu situación.
          </p>

          <p className="mt-4 text-gray-700">
            Creo en el trato cercano, la transparencia y la planificación
            a largo plazo como base de una buena decisión financiera.
          </p>
        </div>

      </div>
    </section>
  );
}