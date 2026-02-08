"use client";

import ContactForm from "./ContactForm";

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

        <ContactForm />
      </div>
    </section>
  );
}