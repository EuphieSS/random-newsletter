"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { mailCreator } from "@/lib/dynamicMailElements";

const Form = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fetchDuck = await fetch("/api/fetchDuck");
      const duckImg = await fetchDuck.json();
      // console.log(`This is the FORM ----- ${duckImg}`);

      // const mailList = await mailCreator(duckImg);
      // console.log(`This is the MAILLIST ----- ${mailList[0].to}`);

      // for (let i = 0; i < mailList.length; i++) {
      //   await fetch("/api/mailer", {
      //     method: "POST",
      //     body: JSON.stringify(mailList[i]),
      //   });
      // }

      const res = await fetch("/api/mailer", {
        method: "POST",
        body: JSON.stringify({ formData, duckImg }),
      });

      // const res = await fetch("/api/subscription/new", {
      //   method: "POST",
      //   body: JSON.stringify({ formData }),
      // });

      if (res.ok) {
        router.push("/"); // add subscription success page?
      }
    } catch (error) {
      console.log(`Failed to subscribe + ${error}`);
    } finally {
      setFormData({
        username: "",
        email: "",
      });
    }
  };

  return (
    <section className="w-64 mt-5">
      <form
        className="flex flex-col gap-5"
        method="post"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-medium">Name</span>
          <input
            placeholder=" your name..."
            required
            className="ml-3 rounded outline-0"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </label>

        <label>
          <span className="font-medium">Email</span>
          <input
            placeholder=" your email..."
            required
            className="ml-3 rounded outline-0"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>

        <button
          type="submit"
          className="px-5 py-1 bg-lime-600 rounded-full text-white text-sm"
        >
          SEND A DUCK
        </button>
      </form>
    </section>
  );
};

export default Form;
