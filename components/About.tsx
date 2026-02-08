export default function About() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-start">

        {/* COLUMNA IZQUIERDA · IMAGEN */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm w-full max-w-md">
            <img
              src="/images/nelcy-profesional.jpg"
              alt="Nelcy García - Asesora financiera"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* COLUMNA DERECHA · TEXTO + MAPA */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Hola, soy <span className="text-orange-500">Nelcy García</span>
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Soy <strong>asesora financiera</strong> y acompaño a personas y familias
            a tomar <strong>decisiones claras</strong> para proteger su presente y
            su futuro, sin complicaciones ni letra pequeña.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Trabajo como asesora colaborando con <strong>NN Seguros</strong>,
            ofreciendo un <strong>asesoramiento cercano y honesto</strong>,
            adaptado a cada momento de vida.
          </p>

          {/* DATOS */}
          <div className="mt-6 space-y-1 text-gray-700">
            <p>
              📞 <strong>Tel / WhatsApp:</strong> +34 644 19 83 69
            </p>
            <p>
              📍 <strong>Zona:</strong> Av. de Blasco Ibáñez, 60, Valencia, España.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contacto"
            className="inline-block mt-8 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Hablar conmigo
          </a>

          {/* MAPA */}
          <div className="mt-10">
            <p className="mb-3 text-gray-700 font-semibold">
              📍 Oficina en Valencia
            </p>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.7329330884063!2d-0.3573332249723012!3d39.475361712397174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605022a8fded2d%3A0x133cc6b03f47b989!2sNationale-Nederlanden!5e0!3m2!1ses!2ses!4v1770552571981!5m2!1ses!2ses"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}