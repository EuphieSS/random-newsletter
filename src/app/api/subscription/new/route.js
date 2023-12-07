import Subscription from "@/models/subscription";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const subscriptionData = body.formData;
    await Subscription.create(subscriptionData);

    return NextResponse.json(
      { message: "New Subscription Added" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
