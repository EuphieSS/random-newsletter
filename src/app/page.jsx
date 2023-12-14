import React from "react";
import Form from "@/components/Form";

const Home = () => {
  return (
    <section className="w-1/2 h-3/4 flex flex-col justify-center items-center bg-stone-50	rounded-2xl">
      <img
        src="https://i.redd.it/9jk969nuxt331.jpg"
        alt="A Happy Duck ^_^"
        className="object-contain rounded-2xl"
        style={{ width: 320 }}
      />
      <div className="text-center text-2xl mt-5 font-bold">
        GET A DOSE OF QUACK!
      </div>
      <div className="text-center text-lg mt-7">
        Send yourself or a friend a duck to brighten the day!
      </div>
      <Form />
    </section>
  );
};

export default Home;
