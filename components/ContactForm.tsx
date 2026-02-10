"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";

type Status = "idle" | "loading" | "success" | "error" | "invalid-email";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // Regex simple y fiable para emails
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // 🔐 Validación email frontend (extra al type="email")
    if (!isValidEmail(email)) {
      setStatus("invalid-email");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      // ⚠️ Blindaje ante respuestas raras
      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        throw new Error("Backend error");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
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
        onChange={() => status !== "idle" && setStatus("idle")}
        className="p-3 rounded text-black"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        onChange={() => status !== "idle" && setStatus("idle")}
        className="p-3 rounded text-black"
      />

      <input
        name="phone"
        placeholder="Teléfono"
        onChange={() => status !== "idle" && setStatus("idle")}
        className="p-3 rounded text-black"
      />

      <textarea
        name="message"
        rows={4}
        placeholder="Cuéntame brevemente qué necesitas…"
        onChange={() => status !== "idle" && setStatus("idle")}
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

      {status === "invalid-email" && (
        <p className="text-yellow-400 text-sm text-center mt-2">
          ⚠️ Introduce un email válido (ejemplo@correo.com)
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm text-center mt-2">
          ❌ Ha ocurrido un error. Inténtalo de nuevo más tarde.
        </p>
      )}
    </form>
  );
}