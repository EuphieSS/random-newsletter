import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://random-d.uk/api/v2/random", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data.url);

    return NextResponse.json({ data });
  } catch (error) {
    console.log(`Fetching duck unsuccessful + ${error}`);
  }
}
