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
          subscription: {
            include: {
              features: true,
            },
          },
          WeddingDetail: {
            include: {
              pictures: true,
            },
          },
          guest: true,
        },
      });
      const data = res.map((user) => ({
        userId: user.userId,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        passwordless: user.passwordless,
        oAuth: user.oAuth,
        oAuthType: user.oAuthType,
        isVerified: user.isVerified,
        phoneNumber: user.phoneNumber,
        placeOfBirth: user.placeOfBirth,
        dateOfBirth: user.dateOfBirth,
        subscription: user.subscription,
        weddingDetail: user.WeddingDetail,
        guest: user.guest,
      }));
      return NextResponse.json(data);
    } else {
      const user = await prisma.user.findUnique({
        where: {
          userId: id,
        },
        include: {
          subscription: {
            include: {
              features: true,
            },
          },
          WeddingDetail: {
            include: {
              pictures: true,
            },
          },
          guest: true,
        },
      });
      const data = {
        userId: user.userId,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        passwordless: user.passwordless,
        oAuth: user.oAuth,
        oAuthType: user.oAuthType,
        isVerified: user.isVerified,
        phoneNumber: user.phoneNumber,
        placeOfBirth: user.placeOfBirth,
        dateOfBirth: user.dateOfBirth,
        subscription: user.subscription,
        weddingDetail: user.WeddingDetail,
        guest: user.guest,
      };
      return NextResponse.json(data);
    }
  } catch (error) {
    console.log(error);
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
    wedding_location,
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
    isVerified,
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
              akad_date: moment(akad_date).toISOString(),
              akad_time,
              wedding_date: moment(wedding_date).toISOString(),
              wedding_time,
              wedding_location,
              bridesName,
              groomsName,
              brides_fathers_name,
              brides_mothers_name,
              grooms_fathers_name,
              grooms_mothers_name,
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
          isVerified,
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
          passwordless: true,
          isVerified: true,
        },
      });
      return NextResponse.json({
        message: "Successfully set password.",
      });
    } else if (section == "domain") {
      const checkExist = await prisma.user.findMany({
        where: {
          WeddingDetail: {
            domain,
          },
        },
        include: {
          WeddingDetail: true,
        },
      });
      if (checkExist.length > 0) {
        return NextResponse.json({
          message: "Domain already exist",
          isUpdated: false,
        });
      } else {
        const data = await prisma.user.update({
          where: {
            userId: id,
          },
          data: {
            weddingsDetail: {
              update: {
                domain: domainName,
              },
            },
          },
        });
        return NextResponse.json({
          message: "Successfully updated domain.",
        });
      }
    } else {
      return NextResponse.json("error");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Cannot find user with id " + id + ", Please check userId",
    });
  }
}
