import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { identity_id, identity_type } = body;

    if (!identity_id || !identity_type) {
      return NextResponse.json(
        { error: "Missing required parameters: identity_id, identity_type" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      identity_id,
      identity_type,
      is_trusted: true,
      trust_score: 0.92,
      last_verified: new Date().toISOString(),
      passport_active: true,
    });
  } catch (error) {
    console.error("Trust check error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
