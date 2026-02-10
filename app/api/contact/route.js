import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    await resend.emails.send({
      from: "Web Nelcy García <onboarding@resend.dev>",
      to: ["carolinagoliat@gmail.com"],
      subject: "Nuevo mensaje desde la web",
      html: `
        <h2>Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return new Response("Error al enviar el mensaje", { status: 500 });
  }
}