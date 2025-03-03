import type { AuthError } from "./types";

export function getAuthErrorMessage(error: AuthError): string {
  switch (error) {
    case "Configuration":
      return "There is a problem with the server configuration.";
    case "AccessDenied":
      return "Access denied. You do not have permission to sign in.";
    case "Verification":
      return "The sign in link is no longer valid.";
    case "Default":
    default:
      return "Unable to sign in.";
  }
}