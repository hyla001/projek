import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { contactFormSchema } from "@/lib/validations/contact"
import { sendContactEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input with Zod
    const validatedData = contactFormSchema.parse(body)

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message,
      },
    })

    // Send email notification (optional - will fail silently if not configured)
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
        await sendContactEmail(validatedData)
      }
    } catch (emailError) {
      console.error("Failed to send email:", emailError)
      // Continue even if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil dikirim!",
        data: contact,
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error("Contact form error:", error)

    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak valid",
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan. Silakan coba lagi.",
      },
      { status: 500 },
    )
  }
}
