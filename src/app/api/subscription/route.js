import Subscription from "@/models/subscription";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const subscriptions = await Subscription.find();
    console.log(`This is GET SUBS +++++ ${subscriptions}`);

    return NextResponse.json(subscriptions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
