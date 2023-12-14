import { NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body.duckImg.data.url);

    const msg = {
      to: body.formData.email, // Change to your recipient
      from: "samma118@hotmail.com", // Change to your verified sender
      subject: "Quack!",
      text: "Have a quacking wonderful day!",
      html: `
        <strong>Hello ${body.formData.username},</strong>
        <br><br>
        Here is a duck to wish you a wonderful day!
        <br><br>
        <img src="${body.duckImg.data.url}" />
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ message: "Email sent!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
