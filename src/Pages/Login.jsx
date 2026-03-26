import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { AuthContext } from "../Context/AuthContext";
import { loginUser } from "../API/authAPI";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      console.log(res.data);

      login(res.data.user);

      localStorage.setItem("token", res.data.token);

      navigate("/");

    } catch (err) {
      const message =
    err.response?.data?.message || "Login failed";

  setError(message);
    }

    if(!form.email || !form.password) {
      setError("Please fill the required details.");
      return;
    }

  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

    return (
      <>
        <div className=" w-screen h-screen flex items-center justify-center bg-[#090f1a]">
          <div className="loginCard border h-135 w-[75vw] max-w-175 flex flex-col items-center gap-10 pb-8 rounded-xl bg-[#e4e4e4]">
            <h2 className=" w-full p-5 text-blue-50 text-3xl font-semibold bg-blue-500 rounded-t-xl flex items-center justify-center">
              Log In
            </h2>

            <form onSubmit={handleLogin} className=" h-[50%] w-[80%] max-w-150 flex flex-col justify-between">
              <div className=" flex flex-col gap-1">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="e.g., avengers@mcu.com"
                  name="email"
                  onChange={handleChange}
                  className=" bg-amber-50 p-2 rounded-xl"
                />
              </div>

              <div className=" flex flex-col gap-1">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="********"
                  name="password"
                  onChange={handleChange}
                  className=" bg-amber-50 p-2 rounded-xl"
                />
              </div>

              <button type="submit" className=" p-2 bg-blue-500 text-blue-50 rounded-xl cursor-pointer active:scale-[0.95]">
                Login
              </button>
            </form>

            <div className=" flex flex-col gap-3 items-center">
              <p className=" ">Forgot password?</p>

              <p className=" ">
                New user?{" "}
                <Link to="/signup" className=" text-blue-600 border-b">
                  Sign Up
                </Link>
              </p>

              <div className=" h-1">
                {error && <p className=" text-red-500 bg-red-100 px-3 py-2 rounded-md text-sm text-center">{error}</p>}
              </div>

            </div>
          </div>
        </div>
      </>
    );
};

export default Login;
