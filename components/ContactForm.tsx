"use client";
import { useState } from "react";
import type { SyntheticEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto flex flex-col gap-4">
      <input name="name" placeholder="Nombre" required className="p-3 rounded text-black" />
      <input name="email" type="email" placeholder="Email" required className="p-3 rounded text-black" />
      <input name="phone" placeholder="Teléfono" className="p-3 rounded text-black" />
      <textarea
        name="message"
        rows={4}
        placeholder="Cuéntame brevemente qué necesitas…"
        className="p-3 rounded text-black resize-none"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-orange-500 py-3 rounded font-semibold text-white hover:bg-orange-600 transition"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm text-center mt-2">
          ✅ ¡Mensaje enviado! Te responderé lo antes posible.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm text-center mt-2">
          ❌ Ha ocurrido un error. Inténtalo de nuevo.
        </p>
      )}
    </form>
  );
}