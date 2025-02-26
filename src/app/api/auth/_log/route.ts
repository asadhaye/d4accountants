import { NextResponse } from "next/server";
import Logger from "@/lib/logger";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, message, details } = body;

    if (!type || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    Logger.info(`auth-${type}`, message, details);

    return NextResponse.json(
      { message: "Log recorded successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Auth logging error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}