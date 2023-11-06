import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const { email } = await request.json();
  try {
    const user = await prisma.user.findMany({
      where: {
        email,
      },
    });
    if (email == user[0].email) {
      return NextResponse.json(user[0]);
    }
  } catch (error) {
    return NextResponse.json({
      message: "failed",
      data: "Oops! Wrong Email or Password",
    });
  }
}
