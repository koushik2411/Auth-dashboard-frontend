import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { signupUser } from '../API/authAPI'

const Signup = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await signupUser(form);
      console.log(res.data);

      navigate("/login");

    } catch (err) {
      const message = err.response?.data?.message || "Something is wrong";
      console.log(message);
    }
  }

  return (
    <>
      <div className=" w-screen h-screen flex items-center justify-center bg-[#090f1a]">
        <div className="loginCard border h-135 w-[75vw] max-w-175 flex flex-col items-center gap-10 pb-8 rounded-xl bg-[#e4e4e4]">
          <h2 className=" w-full p-5 text-blue-50 text-3xl font-semibold bg-blue-500 rounded-t-xl flex items-center justify-center">
            Sign Up
          </h2>

          <form onSubmit={handleSignup} className=" h-[60%] w-[80%] max-w-150 flex flex-col justify-between">

           <div className=" flex flex-col gap-1">
              <label>Name</label>
              <input
                type="text"
                placeholder="e.g., Avenger"
                onChange={handleChange}
                name="name"
                className=" bg-amber-50 p-2 rounded-xl"
              />
            </div>

            <div className=" flex flex-col gap-1">
              <label>Email</label>
              <input
                type="email"
                placeholder="e.g., avengers@mcu.com"
                onChange={handleChange}
                name="email"
                className=" bg-amber-50 p-2 rounded-xl"
              />
            </div>

            <div className=" flex flex-col gap-1">
              <label>Password</label>
              <input
                type="password"
                placeholder="********"
                onChange={handleChange}
                name="password"
                className=" bg-amber-50 p-2 rounded-xl"
              />
            </div>

            <button onSubmit={handleSignup} type='submit' className=" mt-2 p-2 w-55 self-center bg-blue-500 text-blue-50 rounded-xl cursor-pointer active:scale-[0.95]">Sign Up</button>

          </form>

          <p className=' mb-2'>
            Already signed up? <Link to="/login" className=' text-blue-600 border-b'>Login</Link>
          </p>

        </div>
      </div>
    </>
  )
}

export default Signup