export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3 items-center text-center md:text-left">

        {/* Marca */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/logo-ng.png"
            alt="Nelcy García - Asesora financiera"
            className="h-12 w-auto"
          />
          <p className="mt-4 font-semibold text-gray-800">
            Nelcy García
          </p>
          <p className="text-sm text-gray-600">
            Asesora financiera
          </p>
        </div>

        {/* Contacto */}
        <div className="text-gray-700">
          <p className="font-semibold mb-2">Contacto</p>
          <p>
            📧{" "}
            <a
              href="mailto:nelcy.garcia@nnespana.com"
              className="hover:text-orange-500 transition"
            >
              nelcy.garcia@nnespana.com
            </a>
          </p>

          <p className="mt-2">
            🔗{" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              LinkedIn
            </a>
          </p>
        </div>

        {/* Legal */}
        <div className="text-sm text-gray-500 md:text-right">
          <p>© {new Date().getFullYear()} Nelcy García</p>
          <p>Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  );
}