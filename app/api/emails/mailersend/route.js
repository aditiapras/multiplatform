// import { Resend } from "resend";
// import { EmailTemplate } from "@/components/emails/email";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
  async function main() {
    const transporter = nodemailer.createTransport({
      host: "mail.lettre.id",
      secure: true,
      port: 465,
      auth: {
        user: "admin@lettre.id",
        pass: "P@ssw0rd",
      },
    });

    const info = await transporter.sendMail({
      from: "Admin <admin@lettre.id>",
      to: "aditiapras97@gmail.com",
      subject: "Account Verification",
      html: "<strong>Hello, thank you for signin up in lettre.id. Please Verify your account by clicking on the link below.</strong>",
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json(info);
  }

  main().catch(console.error);
  return NextResponse.json({
    message: "console message",
  });
}
