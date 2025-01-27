import { type NextRequest, type NextResponse } from "next/server";
export default async function middleware(req: NextRequest, res: NextResponse) {
    console.log("middleware", req.url);
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.svg$).*)"], 
}
