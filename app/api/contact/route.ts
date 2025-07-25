// app/api/contact/route.ts
import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()
  const { firstname, lastname, email, phone, subject, message } = data

  if (!subject || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "contact@espace-musset.com",
      subject: `${subject}, ${firstname} ${lastname}`,
      reply_to: email,
      text: `
${message}

---

${firstname} ${lastname}
Email : ${email}
Téléphone : ${phone || "Non précisé"}
      `.trim()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
