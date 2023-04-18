import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import DeleteAccount from "./components/DeleteAccount";
import ProfileForm from "./components/ProfileForm";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../../redux/features/mobileSidebarSlice";

const Settings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="w-1/2 sm:w-full sm:mx-auto bg-white rounded-lg p-5 flex items-center justify-center">
      <div className="w-96 sm:w-11/12 flex flex-col items-center gap-12">
        <div className="relative w-fit">
          <img
            alt="profile"
            className="w-28 h-28 rounded-full"
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
          />
          <div className="absolute right-0 bottom-0.5 w-8 h-8 bg-black rounded-full cursor-pointer flex items-center justify-center border">
            <Icon.Edit3 size={18} className="text-white" />
          </div>
        </div>
        <ProfileForm />
        <div className="flex gap-5">
          <button className="bg-blue-800 font-medium text-white py-2 px-3 rounded-md text-xs">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
