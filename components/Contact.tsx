export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 bg-black text-white text-center px-6"
    >
      <h2 className="text-3xl font-bold">
        Solicita información
      </h2>

      <form className="mt-10 max-w-md mx-auto flex flex-col gap-4">
        <input
          className="p-3 rounded text-black"
          placeholder="Nombre"
        />
        <input
          className="p-3 rounded text-black"
          placeholder="Email"
        />
        <input
          className="p-3 rounded text-black"
          placeholder="Teléfono"
        />

        <button className="bg-orange-500 py-3 rounded font-semibold hover:bg-orange-600">
          Enviar
        </button>
      </form>
    </section>
  );
}