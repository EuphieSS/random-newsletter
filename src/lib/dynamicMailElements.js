export const getSubs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/subscription", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch subscribers");
    }

    const data = await res.json();
    console.log(`This is the frontend <<<>>> ${data[0].username}`);

    return data;
  } catch (error) {
    console.log(`Error loading subscribers + ${error}`);
  }
};

export const mailCreator = async (duck) => {
  const subs = await getSubs();
  console.log(`This is the mailCreator _____ ${subs[0].username}`);
  const mailList = [];
  console.log(`This is the mailCreator _____ ${mailList}`);

  for (let i = 0; i < subs.length; i++) {
    let msg = {
      to: subs[i].email, // Change to your recipient
      from: "samma118@hotmail.com", // Change to your verified sender
      subject: "Quack!",
      text: "Have a quacking wonderful day!",
      html: `
        <strong>Hello ${subs[i].username},</strong>
        <br><br>
        Here is a duck to wish you a wonderful day!
        <br><br>
        <img src="${duck}" />
      `,
    };

    mailList.push(msg);
  }

  return mailList;
};
