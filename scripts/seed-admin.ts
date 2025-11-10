import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding admin user...")

  const hashedPassword = await bcrypt.hash("admin123", 10)

  const admin = await prisma.admin.upsert({
    where: { email: "admin@multidata.com" },
    update: {},
    create: {
      email: "admin@multidata.com",
      password: hashedPassword,
      name: "Admin MULTIDATA",
    },
  })

  console.log("Admin user created:", admin.email)
  console.log("Password: admin123")
  console.log("\nMigrating articles from static data...")

  // You can optionally migrate the static articles to database here
  console.log("Done!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
