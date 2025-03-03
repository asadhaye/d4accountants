import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { CustomUser, CustomToken } from "./types";

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('Please define NEXTAUTH_SECRET environment variable');
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      // ... existing authorize logic ...
    }
  })],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token as CustomToken).id = (user as CustomUser).id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as CustomUser).id = (token as CustomToken).id as string;
      }
      return session;
    }
  }
};