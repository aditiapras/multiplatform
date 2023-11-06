import { Resend } from "resend";
import { EmailTemplate } from "@/components/emails/email";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
  async function main() {
    const transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      secure: true,
      port: 465,
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
      },
    });

    const info = await transporter.sendMail({
      from: "Lettre.id <noreply@lettre.id>",
      to: "test-n428ve6ux@srv1.mail-tester.com",
      subject: "Account Verification",
      html: "<strong>Hello, thank you for signin up in lettre.id. Please Verify your account by clicking on the link below.</strong>",
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
  return NextResponse.json({
    message: "success",
  });
}
