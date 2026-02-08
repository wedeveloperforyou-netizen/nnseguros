"use client";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setSent(true);
      e.currentTarget.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 max-w-md mx-auto flex flex-col gap-4"
    >
      <input
        name="name"
        placeholder="Nombre"
        required
        className="p-3 rounded text-black"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="p-3 rounded text-black"
      />

      <input
        name="phone"
        placeholder="Teléfono"
        className="p-3 rounded text-black"
      />

      <textarea
        name="message"
        rows={4}
        placeholder="Cuéntame brevemente qué necesitas…"
        className="p-3 rounded text-black resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-orange-500 py-3 rounded font-semibold text-white hover:bg-orange-600 transition"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {sent && (
        <p className="text-green-400 text-sm text-center">
          ✅ ¡Mensaje enviado! Te responderé lo antes posible.
        </p>
      )}

      {error && (
        <p className="text-red-400 text-sm text-center">
          ❌ Ha ocurrido un error. Inténtalo de nuevo.
        </p>
      )}
    </form>
  );
}