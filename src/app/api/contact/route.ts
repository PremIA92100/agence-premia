import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    // SMTP config via environment variables
    const smtpHost = process.env.SMTP_ZOHO_HOST || "smtp.zoho.eu";
    const smtpPort = parseInt(process.env.SMTP_ZOHO_PORT || "587");
    const smtpUser = process.env.SMTP_ZOHO_USER || "contact@agence-premia.fr";
    const smtpPass = process.env.SMTP_ZOHO_PASS;

    if (!smtpPass) {
      console.error("SMTP_ZOHO_PASS not configured");
      return NextResponse.json({ error: "Service email non configuré" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // STARTTLS
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 24px; border-radius: 16px 16px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">📩 Nouveau message depuis agence-premia.fr</h1>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: 0; border-radius: 0 0 16px 16px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;"><strong>Nom</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Email</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Téléphone</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${phone || "Non renseigné"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Société</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${company || "Non renseignée"}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="color: #64748b; font-size: 14px; margin: 0 0 8px;"><strong>Message :</strong></p>
          <p style="color: #0f172a; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Site Prem'IA" <${smtpUser}>`,
      to: smtpUser, // contact@agence-premia.fr
      replyTo: email,
      subject: `[Site] Nouveau message de ${name}${company ? ` (${company})` : ""}`,
      html: htmlBody,
      text: `Nouveau message depuis agence-premia.fr\n\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone || "Non renseigné"}\nSociété: ${company || "Non renseignée"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
