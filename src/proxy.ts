import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";

// 1. Define routes that do NOT require authentication
const publicRoutes = ["/auth/login", "/auth/signup", "/", "/about"];

// 2. Define routes that MUST require authentication
// (Any route starting with these will be protected)
const protectedRoutes = ["/dashboard", "/profile", "/settings"];

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- AUTHENTICATION LOGIC ---

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // 1. Read the token specifically from the "session" cookie
    const token = request.cookies.get("session")?.value;

    // 2. Verify the session
    const session = await verifySession(token);

    // 3. If invalid or missing, redirect to login
    if (!session) {
      const loginUrl = new URL("/auth/login", request.url);
      
      // Optional: Add redirect param so you can send them back after login
      loginUrl.searchParams.set("redirect", pathname);
      
      return NextResponse.redirect(loginUrl);
    }
    
    // Optional: If valid, you can set headers here for the server components
    // request.headers.set('x-user-id', session.userId);
  }
  
  // If we passed the Auth check (or it was a public route), continue the request
  return NextResponse.next();
}

export const config = {
  // Skip all internal Next.js paths, API routes, and static files
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
