import bcrypt from "bcryptjs"
import { cookies } from "next/headers"
import { prisma } from "@/lib/prisma"

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function createSession(adminId: string) {
  const cookieStore = await cookies()
  cookieStore.set("admin_session", adminId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
}

export async function getSession() {
  const cookieStore = await cookies()
  return cookieStore.get("admin_session")?.value
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
}

export async function getCurrentAdmin() {
  const sessionId = await getSession()
  if (!sessionId) return null

  const admin = await prisma.admin.findUnique({
    where: { id: sessionId },
    select: {
      id: true,
      email: true,
      name: true,
    },
  })

  return admin
}
