
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] =
    useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !message) {
      return alert("All fields required");
    }

    alert("Message Sent");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={submitHandler}
        className="shadow-lg p-8 rounded-lg w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="border p-3 w-full mb-4 rounded"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <textarea
          placeholder="Enter Message"
          className="border p-3 w-full mb-4 rounded"
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button className="bg-black text-white w-full py-3 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;