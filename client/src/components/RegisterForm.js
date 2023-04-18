import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { registerApi } from "../redux/features/authSlice";
import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    profile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(registerApi(data))
      .unwrap()
      .then(() => {
        toast.success("Profile created", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        navigate("/login");
      });
  };

  return (
    <form className="w-3/4 sm:w-full" onSubmit={handleSubmit}>
      <Link to="/login">
        <div className="absolute top-10 left-10 font-medium hover:underline flex items-center gap-1">
          <ChevronLeftIcon className="w-4 h-4" />
          Back
        </div>
      </Link>
      <div className="mb-8">
        <div className="text-2xl font-bold">Get Started Now!</div>
        <div className="text-gray-500 font-medium">
          Fill in your details below
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-medium text-xs">Username</div>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              className="border-2 border-gray-200 w-full p-2 rounded-md outline-none text-gray-500 font-medium"
            />
          </div>
          <div>
            <div className="font-medium text-xs">Password</div>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="border-2 border-gray-200 w-full p-2 rounded-md outline-none text-gray-500 font-medium"
            />
          </div>
          <div>
            <div className="font-medium text-xs">Email</div>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="border-2 border-gray-200 w-full p-2 rounded-md outline-none text-gray-500 font-medium"
            />
          </div>
          <div>
            <div className="font-medium text-xs">First Name</div>
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              className="border-2 border-gray-200 w-full p-2 rounded-md outline-none text-gray-500 font-medium"
            />
          </div>
          <div>
            <div className="font-medium text-xs">Last Name</div>
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              className="border-2 border-gray-200 w-full p-2 rounded-md outline-none text-gray-500 font-medium"
            />
          </div>
          <div>
            <div className="font-medium text-xs">Mobile</div>
            <input
              type="text"
              name="mobile"
              value={data.mobile}
              onChange={(e) => setData({ ...data, mobile: e.target.value })}
              className="border-2 border-gray-200 w-full p-2 rounded-md outline-none text-gray-500 font-medium"
            />
          </div>
          <div>
            <div className="font-medium text-xs">Address</div>
            <input
              type="text"
              name="address"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              className="border-2 border-gray-200 w-full p-2 rounded-md outline-none text-gray-500 font-medium"
            />
          </div>
          <div>
            <div className="font-medium text-xs">Profile</div>
            <input
              type="text"
              name="profile"
              value={data.profile}
              onChange={(e) => setData({ ...data, profile: e.target.value })}
              className="border-2 border-gray-200 w-full p-2 rounded-md outline-none text-gray-500 font-medium"
            />
          </div>
        </div>
        <div className="w-1/2">
          <button
            type="submit"
            className="bg-black text-white rounded-md w-full mt-4 p-2"
          >
            Register
          </button>
          {/* <div className="flex justify-center text-gray-400 text-xs font-medium mt-3">
            Don't have an account?{" "}
            <span className="ml-1 text-black hover:underline cursor-pointer hover:text-black text-gray-500">
              Sign up
            </span>
          </div> */}
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
