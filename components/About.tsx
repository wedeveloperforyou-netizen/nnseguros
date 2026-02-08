export default function About() {
    return (
        <section id="sobre-mi" className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">

                {/* Imagen / placeholder */}
                <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-8 shadow-sm w-full max-w-md">
                        <img
                            src="/images/nelcy-profesional.png"
                            alt="Nelcy García - Asesora financiera"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Texto */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Hola, soy <span className="text-orange-500">Nelcy García</span>
                    </h2>

                    <p className="mt-6 text-gray-700 leading-relaxed">
                        Soy <strong>asesora financiera</strong> y acompaño a personas y familias a
                        tomar <strong>decisiones claras</strong> para proteger su presente y su
                        futuro, sin complicaciones ni letra pequeña.
                    </p>

                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Trabajo como asesora colaborando con <strong>NN Seguros</strong>, ofreciendo
                        un <strong>asesoramiento cercano y honesto</strong>, adaptado a cada
                        momento de vida.
                    </p>

                    {/* Datos de contacto */}
                    <div className="mt-6 space-y-1 text-gray-700">
                        <p>
                            📞 <strong>Tel / WhatsApp:</strong> +34 644 19 83 69
                        </p>
                        <p>
                            📍 <strong>Zona:</strong> Valencia, España
                        </p>
                    </div>

                    <a
                        href="#contacto"
                        className="inline-block mt-8 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
                    >
                        Hablar conmigo
                    </a>
                </div>

            </div>
        </section>
    );
}