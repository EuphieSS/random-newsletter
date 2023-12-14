// import { parentPort } from "node:worker_threads";
// import process from "node:process";

// const sendMail = async () => {
//   try {
//     const fetchDuck = await fetch("/api/fetchDuck");
//     const duckImg = await fetchDuck.json();
//     console.log(`This is the FORM ----- ${duckImg}`);

//     const mailList = await mailCreator(duckImg);
//     console.log(`This is the MAILLIST ----- ${mailList[0].to}`);

//     for (let i = 0; i < mailList.length; i++) {
//       await fetch("/api/mailer", {
//         method: "POST",
//         body: JSON.stringify(mailList[i]),
//       });
//     }
//   } catch (error) {
//     console.log(`Failed to send email + ${error}`);
//   }
// };

// // signal to parent that the job is done
// if (parentPort) parentPort.postMessage("done");
// else process.exit(0);
