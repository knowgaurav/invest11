import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../redux/features/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(loginApi(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  return (
    <form className="w-96" onSubmit={handleSubmit}>
      <div className="text-2xl font-bold mb-8">Welcome Back</div>
      <div className="flex flex-col gap-5">
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
        <button
          type="submit"
          className="bg-black text-white rounded-md w-full mt-4 p-2"
        >
          Log in
        </button>
        <div className="flex justify-center text-gray-400 text-xs font-medium">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="ml-1 text-black hover:underline cursor-pointer hover:text-black text-gray-500">
              Register
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
