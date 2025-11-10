# Hello

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/multidataelectronik-6047s-projects/v0-hello)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/MgSYQg0TFNM)

## Overview

This is a full-stack Next.js 14 project with TypeScript, Tailwind CSS, PostgreSQL database with Prisma ORM, React Hook Form + Zod validation, and Nodemailer for email notifications.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **PostgreSQL** database
- **Prisma ORM** for database access
- **React Hook Form** + **Zod** for form validation
- **Nodemailer** for email notifications
- **shadcn/ui** for UI components

## Getting Started

First, install dependencies:

\`\`\`bash
npm install
\`\`\`

Then, set up your environment variables:

\`\`\`bash
cp .env.example .env
\`\`\`

Edit `.env` and add your `DATABASE_URL` and email configuration.

Run Prisma migrations to set up your database:

\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

Then, run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup

1. Create a PostgreSQL database
2. Update `DATABASE_URL` in `.env`
3. Run migrations: `npx prisma migrate dev`
4. Generate Prisma Client: `npx prisma generate`

## Email Configuration

To enable email notifications:

1. Set up an SMTP provider (Gmail, SendGrid, etc.)
2. Add SMTP credentials to `.env`
3. For Gmail: Use [App Passwords](https://support.google.com/accounts/answer/185833)

## Deployment

Your project is live at:

**[https://vercel.com/multidataelectronik-6047s-projects/v0-hello](https://vercel.com/multidataelectronik-6047s-projects/v0-hello)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/MgSYQg0TFNM](https://v0.app/chat/MgSYQg0TFNM)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
