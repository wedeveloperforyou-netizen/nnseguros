import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* MARCA */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo-ng.png"
            alt="Nelcy García - Asesora financiera"
            className="h-8 w-auto"
          />
          <div className="leading-tight">
            <p className="font-semibold text-gray-800">Nelcy García</p>
            <p className="text-sm text-gray-600">Asesora financiera</p>
          </div>
        </div>

        {/* CONTACTO */}
        <div className="text-sm text-gray-700 text-center md:text-left">
          <p className="font-medium">Contacto</p>
          <a
            href="mailto:nelcy.garcia@nnespana.com"
            className="flex items-center justify-center md:justify-start gap-2 hover:underline"
          >
            <MdEmail />
            nelcy.garcia@nnespana.com
          </a>
        </div>

        {/* REDES */}
        <div className="flex items-center gap-4 text-gray-700">
          <a
            href="https://www.linkedin.com/in/nelcy-garcia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0A66C2] transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-500 py-2">
        © 2026 Nelcy García · Todos los derechos reservados
      </div>
    </footer>
  );
}