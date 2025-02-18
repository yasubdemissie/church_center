import { NextResponse, type NextRequest } from "next/server";

export { auth as middleware } from "@/auth";

export default async function middleware(req: NextRequest) {
  const nextUrl = req.nextUrl;
  const publicPath = ["/"];
  const searchParams = new URLSearchParams(nextUrl.searchParams);

  if (publicPath.includes(nextUrl.pathname) && !searchParams.has("form")) {
    return NextResponse.redirect(req.url + "?form=login");
  }

  console.log("middleware", nextUrl.pathname, searchParams.toString());
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.jpg$|.*\\.svg$).*)",
  ],
};
