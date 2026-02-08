import "./globals.css";

export const metadata = {
  title: "Asesor NN Seguros",
  description: "Seguros de vida, salud y ahorro con asesoramiento personalizado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}