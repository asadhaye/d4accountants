import { POST } from "./route";
import { NextRequest } from "next/server";

jest.mock("@/lib/db/connect", () => ({
  clientPromise: Promise.resolve({
    model: jest.fn().mockImplementation(() => ({
      save: jest.fn().mockResolvedValue({ _id: "test-id" }),
    })),
  }),
}));

describe("POST /api/leads", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("successfully captures a valid lead", async () => {
    const validLead = {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      message: "Test message",
      serviceInterest: "tax-planning", // Added to match schema
    };

    const request = new NextRequest("http://localhost:3000/api/leads", {
      method: "POST",
      body: JSON.stringify(validLead),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201); // Updated to match route.ts
    expect(data).toEqual(
      expect.objectContaining({
        message: "Lead captured successfully",
      })
    );
  });

  it("returns an error for invalid data", async () => {
    const invalidLead = {
      name: "", // Empty name should fail validation
      email: "invalid-email", // Invalid email format
      phone: "123", // Too short phone number
    };

    const request = new NextRequest("http://localhost:3000/api/leads", {
      method: "POST",
      body: JSON.stringify(invalidLead),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual(
      expect.objectContaining({
        error: expect.any(String),
      })
    );
  });

  it("handles database connection errors", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue(new Error("Network error")); // Simulate fetch failure

    const validLead = {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      message: "Test message",
      serviceInterest: "tax-planning",
    };

    const request = new NextRequest("http://localhost:3000/api/leads", {
      method: "POST",
      body: JSON.stringify(validLead),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual(
      expect.objectContaining({
        error: "Internal server error",
      })
    );

    jest.restoreAllMocks(); // Cleanup mock
  });
});