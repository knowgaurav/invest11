import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProfileForm = () => {
  const { username, email, profile } = useSelector((state) => state.auth.user);
  const [data, setData] = useState({
    username: username,
    email: email,
    profile: profile,
  });
  return (
    <form className="flex flex-col gap-5 text-gray-500">
      <div className="flex items-center justify-between w-full gap-5">
        <div className="w-1/3 font-medium">Username</div>
        <input
          type="text"
          disabled
          name="username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          className="border border-gray-200 py-1.5 px-2 outline-none rounded-md grow"
        />
      </div>
      <div className="flex items-center justify-between w-full gap-5">
        <div className="w-1/3 font-medium">Email address</div>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="border border-gray-200 py-1.5 px-2 outline-none rounded-md grow"
        />
      </div>
    </form>
  );
};

export default ProfileForm;
