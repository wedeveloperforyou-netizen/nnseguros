"use client";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
              
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <img
                    src="/images/logo-ng.png"
                    alt="Nelcy García - Asesora financiera"
                    className="h-12 md:h-16 w-auto object-contain"
                />
                <p><strong>Nelcy García </strong>- Asesora financiera</p>
                
                <nav
                    className={`hidden md:flex gap-8 text-sm font-medium transition-colors ${scrolled ? "text-gray-800" : "text-black"
                        }`}
                >
                    <a href="#inicio">Inicio</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#contacto">Contacto</a>
                </nav>

                <a
                    href="#contacto"
                    className="hidden md:inline-block bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
                >
                    Solicitar asesoría
                </a>
            </div>
        </header>
    );
}