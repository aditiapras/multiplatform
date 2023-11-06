import { NextResponse } from "next/server";
import moment from "moment-timezone";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  try {
    if (!id) {
      const res = await prisma.user.findMany({
        include: {
          subscription: true,
          WeddingDetail: true,
          guest: true,
        },
      });
      const data = res.map((user) => ({
        userId: user.userId,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        accountVerified: user.accountVerified,
        connectWithGoogle: user.connectWithGoogle,
        phoneNumber: user.phoneNumber,
        placeOfBirth: user.placeOfBirth,
        dateOfBirth: user.dateOfBirth,
        subscription: user.subscription,
        WeddingDetail: user.WeddingDetail,
        guest: user.guest,
      }));
      return NextResponse.json(data);
    } else {
      const res = await prisma.user.findUnique({
        where: {
          userId: id,
        },
        include: {
          subscription: true,
          WeddingDetail: true,
          guest: true,
        },
      });
      const data = {
        userId: res.userId,
        username: res.username,
        email: res.email,
        avatar: res.avatar,
        accountVerified: res.accountVerified,
        connectWithGoogle: res.connectWithGoogle,
        phoneNumber: res.phoneNumber,
        placeOfBirth: res.placeOfBirth,
        dateOfBirth: res.dateOfBirth,
        subscription: res.subscription,
        WeddingDetail: res.WeddingDetail,
        guest: res.guest,
      };
      return NextResponse.json(data);
    }
  } catch (error) {
    return NextResponse.json({
      message: "Cannot find user with id " + id,
    });
  }
}

export async function PUT(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const section = url.searchParams.get("section");

  const {
    akad_date,
    akad_time,
    wedding_date,
    wedding_time,
    weddingLocation,
    bridesName,
    groomsName,
    brides_fathers_name,
    brides_mothers_name,
    grooms_fathers_name,
    grooms_mothers_name,
    domain,
    phoneNumber,
    placeOfBirth,
    dateOfBirth,
    password,
  } = await request.json();

  try {
    if (section == "wedding") {
      const data = await prisma.user.update({
        where: {
          userId: id,
        },
        data: {
          WeddingDetail: {
            update: {
              updated_at: moment().toISOString(),
              akad_date,
              akad_time,
              wedding_date,
              wedding_time,
              weddingLocation,
              bridesName,
              groomsName,
              brides_fathers_name,
              brides_mothers_name,
              grooms_fathers_name,
              grooms_mothers_name,
              domain,
            },
          },
        },
      });
      return NextResponse.json({
        message: "Successfully updated wedding details.",
      });
    } else if (section == "profile") {
      const data = await prisma.user.update({
        where: {
          userId: id,
        },
        data: {
          phoneNumber,
          placeOfBirth,
          dateOfBirth,
        },
      });
      return NextResponse.json({
        message: "Successfully updated profile details.",
      });
    } else if (section == "setpassword") {
      const hashedPassword = await bcrypt.hash(password, 10);
      const data = await prisma.user.update({
        where: {
          userId: id,
        },
        data: {
          password: hashedPassword,
          accountVerified: true,
        },
      });
      return NextResponse.json({
        message: "Successfully set password.",
      });
    } else {
      return NextResponse.json("error");
    }
  } catch (error) {
    return NextResponse.json({
      message: "Cannot find user with id " + id + ", Please check userId",
    });
  }
}
