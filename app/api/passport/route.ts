import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const passportId = request.nextUrl.searchParams.get("id");

    if (!passportId) {
      return NextResponse.json(
        { error: "Missing id parameter" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      id: passportId,
      identity_type: "human",
      status: "active",
      trust_score: 0.95,
      issued_at: new Date().toISOString(),
      expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      verification_count: 42,
    });
  } catch (error) {
    console.error("Passport retrieval error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
