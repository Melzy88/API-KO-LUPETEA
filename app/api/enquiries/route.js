import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.json();

    const enquiry = await Enquiry.create(data);

    return NextResponse.json({
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error submitting enquiry",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    return NextResponse.json(enquiries);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching enquiries",
        error: error.message,
      },
      { status: 500 }
    );
  }
}