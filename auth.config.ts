import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProducts = nextUrl.pathname.startsWith("/products");
      if (isOnProducts) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } 
      else if (isLoggedIn) {
        // return Response.redirect(new URL("/products/list", nextUrl));
        return true
        // return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
