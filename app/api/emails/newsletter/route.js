import { Resend } from "resend";
import { EmailTemplate } from "@/components/emails/email";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req) {
  const { name } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Lettre.id <noreply@lettre.id>",
      to: "test-3pe278x42@srv1.mail-tester.com",
      subject: "Test Email",
      react: EmailTemplate({ name }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      message: "failed",
      data: "Oops! Something went wrong",
      error,
    });
  }
}
