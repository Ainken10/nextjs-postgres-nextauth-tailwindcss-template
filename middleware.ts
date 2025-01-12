// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req :any) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // Paths to exclude from middleware
  const publicPaths = ["/api", "/_next/static", "/_next/image", "/favicon.ico", "/robots.txt", "/sitemap.xml,", "/login"];
  const isPublicPath = publicPaths.some((path) => req.nextUrl.pathname.startsWith(path));

  // Allow public paths to proceed without authentication
  if (isPublicPath) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to /login
  if (!token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  // Allow authenticated users to proceed
  return NextResponse.next();
}

// Apply middleware to all routes except excluded paths
export const config = {
  matcher: "/:path*", // Matches all routes
};