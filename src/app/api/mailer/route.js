import { NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(`This is the mailer >>>>> ${body}`);

    await sgMail.send(body);
    return NextResponse.json({ message: "Email sent!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
