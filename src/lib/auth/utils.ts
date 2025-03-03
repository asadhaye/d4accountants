import { getServerSession } from "next-auth/next";
import { authOptions } from "./config";
import type { CustomUser } from "./types";

export async function getCurrentUser(): Promise<CustomUser | null> {
  const session = await getServerSession(authOptions);
  return session?.user as CustomUser || null;
}

export function isAuthenticated(user: CustomUser | null): boolean {
  return !!user?.id;
}