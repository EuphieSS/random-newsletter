import { NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  try {
    const body = await req.json();

    const msg = {
      to: body.formData.email, // Change to your recipient
      from: "samma118@hotmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "This is a test email",
      html: `<strong>Hi, ${body.formData.username} This is a test email.</strong>`,
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: "Email sent!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
