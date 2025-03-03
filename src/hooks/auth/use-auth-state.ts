import { useSession } from "next-auth/react";
import type { CustomUser } from "@/lib/auth/types";

export function useAuthState() {
  const { data: session, status } = useSession();
  const user = session?.user as CustomUser | undefined;

  return {
    user,
    isAuthenticated: !!user?.id,
    isLoading: status === "loading",
  };
}