import { NextResponse } from "next/server"
import { getCurrentAdmin } from "@/lib/auth"

export async function GET() {
  try {
    const admin = await getCurrentAdmin()

    if (!admin) {
      return NextResponse.json({ error: "Tidak terautentikasi" }, { status: 401 })
    }

    return NextResponse.json({ admin })
  } catch (error) {
    console.error("[v0] Get current admin error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}
