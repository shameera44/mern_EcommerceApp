
import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

  const { data } = await axios.post(
    "https://mern-ecommerceapp-czkg.onrender.com/auth/login",
    {
      email,
      password,
    }
  );

  console.log(data);

  if (data.token) {

    dispatch(loginSuccess(data));

    localStorage.setItem(
      "token",
      data.token
    );

    alert("Login Success");

    navigate("/");

  } else {

    alert(
      data.message ||
      "Login Failed"
    );

  }

} catch (error) {

  console.log(error);

  alert("Invalid Email or Password");

}
  }
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={submitHandler}
          className="shadow-xl p-8 rounded-xl w-[350px]"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">
            Login
          </h1>

          <input
            type="email"
            placeholder="Enter Email"
            className="border w-full p-3 rounded-lg mb-4"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="border w-full p-3 rounded-lg mb-4"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button className="bg-black text-white w-full py-3 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;