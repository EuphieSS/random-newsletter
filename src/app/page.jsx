import React from "react";
import Form from "@/components/Form";

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="text-center">Subscribe!</h1>
      <p className="text-center">
        We will send a quokka once a week to brighten your day! :3
      </p>
      <Form />
    </section>
  );
};

export default Home;
