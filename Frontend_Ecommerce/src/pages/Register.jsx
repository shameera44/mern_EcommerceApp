
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://mern-ecommerceapp-czkg.onrender.com/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Register Success");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={submitHandler}
        className="shadow-lg p-8 rounded-lg w-[350px]"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="border p-3 w-full mb-4 rounded"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-3 w-full mb-4 rounded"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="border p-3 w-full mb-4 rounded"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button className="bg-black text-white w-full py-3 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;