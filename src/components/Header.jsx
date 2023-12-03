import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {FaUserCircle,FaSearch} from "react-icons/fa"
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Slices/appSlice";

const Header = () => {
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
    console.log("i am clickd");
  }
  return (
    <div className="grid grid-flow-col  h-14 p-2 shadow-lg ">
      <div className="flex col-span-1 gap-2 items-center  ">
        <GiHamburgerMenu className="text-2xl text-gray-400 cursor-pointer" onClick={toggleMenuHandler} />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79YAV4WMPw0y1dW3op6Py1Yda92DnwHbjNYegDjZ1vQoVywt4OTUg_JA-ohD-rw4u5g&usqp=CAU"
          alt="Sam Youtube logo" className="h-8"
        />
        <div>sameer khan {process.env.SAMEER_KHAN}</div>
      </div>
      <div className="col-span-12 flex justify-center h-9 ">
        <div className="w-1/2 border border-gray-400 h-full pl-4 py-[2px] rounded-lg flex">
          <input type="text" name="" id="" className="w-[90%]   outline-none" />
          <button className="h-full w-[10%] border-l border-gray-400 " title="search"><CiSearch className="text-2xl  w-full"/></button>
        </div>
      </div>
      <div className="col-span-1 flex justify-end items-center pr-2">
      <FaUserCircle className="text-2xl"/>
      </div>
     
    </div>
  );
};

export default Header;
