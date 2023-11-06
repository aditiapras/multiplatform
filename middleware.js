import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req) {
  const url = req.nextUrl;

  const hostname = req.headers
    .get("host")
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  const searchParams = req.nextUrl.searchParams.toString();

  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  const subdomain = hostname.split(".")[0];

  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    const session = await getToken({ req });
    if (!session && path == "/dashboard") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.rewrite(
      new URL(`/home${path === "/" ? "" : path}`, req.url)
    );
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_URL}/domains?name=${subdomain}`
  ).then((res) => {
    return res.json();
  });

  if (data.isListed === false) {
    return NextResponse.redirect("https://lettre.id");
  } else {
    return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
  }
}
