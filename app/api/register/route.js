import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import moment from "moment-timezone";
import { PrismaClient } from "@prisma/client";
import ShortUniqueId from "short-unique-id";

const prisma = new PrismaClient();
const uid = new ShortUniqueId();

export async function POST(request) {
  const uidWithTimestamp = uid.stamp(32);
  const { username, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const checkUser = await prisma.user.findMany({
      where: {
        email,
      },
    });

    const userExist = checkUser.length;

    if (userExist > 0) {
      return NextResponse.json({
        message: "User Already Exist",
        isRegistered: false,
      });
    } else {
      const user = await prisma.user.create({
        data: {
          userId: uidWithTimestamp,
          username,
          email,
          password: hashedPassword,
          passwordless: false,
          oAuth: false,
          oAuthType: null,
          isVerified: false,
          subscription: {
            create: {
              plans: "Basic",
              prices: 0,
              activePeriods: 3,
              features: {
                create: {
                  customSongs: false,
                  maxImages: 6,
                  whatsappSend: false,
                  videos: false,
                  unlimitedGuests: false,
                  totalGuests: 500,
                  loveStory: false,
                  personalized: false,
                  themes: false,
                },
              },
            },
          },
          WeddingDetail: {
            create: {
              created_at: moment().toISOString(),
            },
          },
        },
      });
      return NextResponse.json({
        message: "Successfully registered.",
        isRegistered: true,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Something Went Wrong",
      error: error.message,
    });
  }
}
