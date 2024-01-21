import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { toggleTheme } from "../Slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Theme = () => {

  const dispatch = useDispatch();
  const isDark = useSelector((store) => store.theme.isDark);

  const darkthemeToast=()=>{
    toast('Hello Darkness!',
  {
    icon: '🌙',
    style: {
      borderRadius: '10px',
      background: '#000',
      color: '#fff',
    },
  });
  }

  const lightThemeToast=()=>{
    toast('Hello Lightness',
  {
    icon: '☀️',
    style: {
      borderRadius: '10px',
      background: '#fff',
      color: '#333',
    },
  }
);
  }

  const changeTheme = () => {
    dispatch(toggleTheme());
    !isDark?darkthemeToast():lightThemeToast();
  };
  return (
    <div
      className=" border rounded-lg shadow-lg shadow-gray-500 cursor-pointer p-1  "
      title="theme"
      onClick={changeTheme}
    >
      {isDark ? <MdSunny className="text-yellow-500 text-2xl " /> : <FaMoon />}
    </div>
  );
};

export default Theme;
