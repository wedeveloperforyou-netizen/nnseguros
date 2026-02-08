export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 bg-black text-white px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          ¿Hablamos?
        </h2>

        <p className="mt-4 text-white/80 text-base md:text-lg">
          Si quieres asesoramiento o tienes dudas sobre tu situación,
          escríbeme y lo vemos con calma.
        </p>

        <form className="mt-10 max-w-md mx-auto flex flex-col gap-4">
          <input
            className="p-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Nombre"
          />

          <input
            type="email"
            className="p-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Email"
          />

          <input
            className="p-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Teléfono"
          />

          <button
            type="submit"
            className="mt-2 bg-orange-500 py-3 rounded font-semibold hover:bg-orange-600 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Email visible */}
        <p className="mt-6 text-sm text-white/70">
          O si lo prefieres, escríbeme directamente a{" "}
          <a
            href="mailto:nelcy.garcia@nnespana.com"
            className="text-orange-400 hover:underline"
          >
            nelcy.garcia@nnespana.com
          </a>
        </p>
      </div>
    </section>
  );
}