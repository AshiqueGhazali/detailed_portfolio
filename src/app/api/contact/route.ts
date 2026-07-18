import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Simple backend validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields (name, email, message) are missing." },
        { status: 400 }
      );
    }

    // In production, you would configure Resend, SendGrid, or nodemailer here:
    // e.g., await resend.emails.send({ ... })
    
    console.log("CONTACT FORM INQUIRY:", { name, email, subject, message });

    // Simulate database / mail sending latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: "Inquiry successfully recorded." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error in contact form handler:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
