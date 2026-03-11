import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    // Send email via mailto fallback / or integrate with a service
    // For now, we'll use a simple fetch to a Formspree-like endpoint
    // or you can replace this with Resend, SendGrid, etc.
    
    const emailBody = `
Nouveau message depuis agence-premia.fr

Nom: ${name}
Email: ${email}
Téléphone: ${phone || "Non renseigné"}
Société: ${company || "Non renseignée"}

Message:
${message}
    `.trim();

    // Option 1: Use environment variable for email service
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@agence-premia.fr";
    
    // If Resend API key is configured, use it
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Site Prem'IA <noreply@agence-premia.fr>",
          to: [CONTACT_EMAIL],
          reply_to: email,
          subject: `[Site] Nouveau message de ${name}${company ? ` (${company})` : ""}`,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
      }
    } else {
      // Fallback: log to console (in production, replace with your email service)
      console.log("=== NEW CONTACT FORM SUBMISSION ===");
      console.log(emailBody);
      console.log("===================================");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
