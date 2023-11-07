import { NextResponse } from "next/server";

export async function POST(req) {
  if (req.method === "POST") {
    const payload = await req.json();
    console.log(payload);
    return NextResponse.json({ message: "success" });
  }
}
