import React from "react";

const Form = () => {
  return (
    <section className="w-64 mt-5">
      <form className="flex flex-col gap-5">
        <label>
          <span>Name</span>
          <input
            placeholder="your name..."
            required
            className="ml-3 border-solid border-black outline-0"
          />
        </label>

        <label>
          <span>Email</span>
          <input
            placeholder="your email..."
            required
            className="ml-3 border-solid border-black outline-0"
          />
        </label>

        <button className="px-5 py-1 bg-lime-600 rounded-full text-white">
          subscribe
        </button>
      </form>
    </section>
  );
};

export default Form;
