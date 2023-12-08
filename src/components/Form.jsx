"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscription/new", {
        method: "POST",
        body: JSON.stringify({ formData }),
      });

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
    // router.refresh(); // might not need
  };

  return (
    <section className="w-64 mt-5">
      <form
        className="flex flex-col gap-5"
        method="post"
        onSubmit={handleSubmit}
      >
        <label>
          <span>Name</span>
          <input
            placeholder="your name..."
            required
            className="ml-3 border-solid border-black outline-0"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </label>

        <label>
          <span>Email</span>
          <input
            placeholder="your email..."
            required
            className="ml-3 border-solid border-black outline-0"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>

        <button
          type="submit"
          className="px-5 py-1 bg-lime-600 rounded-full text-white"
        >
          subscribe
        </button>
      </form>
    </section>
  );
};

export default Form;