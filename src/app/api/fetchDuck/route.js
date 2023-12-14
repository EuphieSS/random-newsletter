import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://random-d.uk/api/v2/random", {
      method: "GET",
    });
    const data = await res.json();
    const duckImg = data.url;
    console.log(`This is the api +++++ ${duckImg}`);

    return NextResponse.json(duckImg);
  } catch (error) {
    console.log(`Fetching duck unsuccessful + ${error}`);
  }
}
