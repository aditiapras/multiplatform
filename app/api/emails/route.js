import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/emails/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, userId, username } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Lettre <admin@lettre.id>",
      to: email,
      subject: "Email Verification",
      react: EmailTemplate({ username, userId }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
