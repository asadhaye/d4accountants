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
  
    // Successfully captures a valid lead with all required fields
    it('should successfully capture a lead with all required fields', async () => {
      const validLead = {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "9876543210",
        message: "I need help with my taxes",
        serviceInterest: "tax-planning",
      };
  
      const request = new NextRequest("http://localhost:3000/api/leads", {
        method: "POST",
        body: JSON.stringify(validLead),
      });
  
      const response = await POST(request);
      const data = await response.json();
  
      expect(response.status).toBe(201);
      expect(data).toEqual(
        expect.objectContaining({
          message: "Lead captured successfully",
        })
      );
  
      // Verify security headers are present
      expect(response.headers.get('Content-Security-Policy')).toBe("default-src 'self'");
      expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');
      expect(response.headers.get('X-Frame-Options')).toBe('DENY');
    });
  
     // Rejects requests with invalid email format
     it('should reject requests with invalid email format', async () => {
      const invalidLead = {
        name: "John Doe",
        email: "not-an-email", // Invalid email format
        phone: "1234567890",
        message: "Test message",
        serviceInterest: "tax-planning",
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
          error: "Validation failed",
          details: expect.arrayContaining([
            expect.objectContaining({
              path: expect.arrayContaining(["email"])
            })
          ])
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