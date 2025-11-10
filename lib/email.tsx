import nodemailer from "nodemailer"

// Create reusable transporter object using SMTP transport
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// Verify transporter configuration
export async function verifyEmailConfig() {
  try {
    await transporter.verify()
    return true
  } catch (error) {
    console.error("Email configuration error:", error)
    return false
  }
}

export async function sendContactEmail(data: {
  name: string
  email: string
  phone: string
  message: string
}) {
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    subject: `Pesan Kontak Baru dari ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #166534;">Pesan Kontak Baru</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
          <p><strong>Nama:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telepon:</strong> ${data.phone}</p>
          <p><strong>Pesan:</strong></p>
          <p style="background-color: white; padding: 15px; border-radius: 4px;">${data.message}</p>
        </div>
      </div>
    `,
    text: `
Pesan Kontak Baru

Nama: ${data.name}
Email: ${data.email}
Telepon: ${data.phone}

Pesan:
${data.message}
    `,
  }

  return await transporter.sendMail(mailOptions)
}
