import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import moment from "moment-timezone";

const prisma = new PrismaClient();

export async function POST(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const {
    name,
    address,
    phoneNumber,
    relationship,
    invitationStatus,
    wishes,
    rsvp,
  } = await request.json();

  try {
    const data = await prisma.user.update({
      where: {
        userId: id,
      },
      data: {
        guest: {
          create: {
            guestId: moment().unix(),
            crated_at: moment().toISOString(),
            updated_at: moment().toISOString(),
            name,
            address,
            phoneNumber,
            relationship,
            invitationStatus,
            wishes,
            rsvp,
          },
        },
      },
    });
    return NextResponse.json({ message: "Successfully added guest.", name });
  } catch (error) {
    return NextResponse.json({ message: "Cannot find user with this id" });
  }
}

export async function PUT(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const guestId = url.searchParams.get("guestId");
  const {
    name,
    address,
    phoneNumber,
    relationship,
    invitationStatus,
    wishes,
    rsvp,
  } = await request.json();

  try {
    const data = await prisma.user.update({
      where: {
        userId: id,
      },
      data: {
        guest: {
          update: {
            where: {
              guestId: Number(guestId),
            },
            data: {
              updated_at: moment().toISOString(),
              name,
              address,
              phoneNumber,
              relationship,
              invitationStatus,
              wishes,
              rsvp,
            },
          },
        },
      },
    });
    return NextResponse.json({ message: "Successfully updated guest.", name });
  } catch (error) {
    return NextResponse.json({ message: "Please Check userId and guestId" });
  }
}

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Id is required" });
  } else {
    const res = await prisma.user.findUnique({
      where: {
        userId: id,
      },
      include: {
        guest: true,
      },
    });
    return NextResponse.json(res.guest);
  }
}
