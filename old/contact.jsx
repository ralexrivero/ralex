import React from "react";
import "tailwindcss/tailwind.css";

const ContactForm = () => {
  return (
    <form className="flex flex-col">
      <label className="font-bold mb-4">Contact Us</label>
      <input
        type="text"
        placeholder="Name"
        className="px-4 py-2 border border-gray-300 rounded-lg mb-4"
      />
      <input
        type="email"
        placeholder="Email"
        className="px-4 py-2 border border-gray-300 rounded-lg mb-4"
      />
      <textarea
        placeholder="Message"
        className="px-4 py-2 border border-gray-300 rounded-lg h-36 resize-none mb-4"
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 rounded-lg text-white font-bold hover:bg-indigo-600 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
