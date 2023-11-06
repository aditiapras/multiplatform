import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";
const prisma = new PrismaClient();
export async function GET(req) {
  const url = new URL(req.url);
  const domain = url.searchParams.get("name");

  if (!domain) {
    const data = await prisma.user.findMany({
      include: {
        WeddingDetail: true,
      },
    });
    const res = data.map((user) => ({
      userId: user.userId,
      username: user.username,
      domains: user.WeddingDetail.domain,
    }));
    return NextResponse.json(res);
  } else {
    const data = await prisma.user.findMany({
      where: {
        WeddingDetail: {
          domain,
        },
      },
      include: {
        WeddingDetail: true,
      },
    });
    if (data.length > 0) {
      const res = data.map((user) => ({
        userId: user.userId,
        username: user.username,
        domains: user.WeddingDetail.domain,
      }));
      return NextResponse.json(res[0]);
    }
    return NextResponse.json({ message: "no domain found", isListed: false });
  }
}
