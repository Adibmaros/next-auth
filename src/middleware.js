import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });

  const isAuthenticated = !!token;

  const authenticatedPage = req.nextUrl.pathname.startsWith("/dashboard");

  if (authenticatedPage && !isAuthenticated) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
}
