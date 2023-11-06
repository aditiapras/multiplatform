import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, token } = await req.json();
  return NextResponse.json({ name });
}
