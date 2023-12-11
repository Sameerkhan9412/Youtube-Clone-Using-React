import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Slices/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../Slices/searchSlice";
import { Link } from "react-router-dom";
import { MdKeyboardVoice, MdOutlineKeyboardVoice } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import VoiceSearchModal from "./VoiceSearchModal";

// {showSuggestions && (
//   <div className="fixed mt-9 bg-white px-5 py-2 w-1/3 shadow-lg rounded-lg">
//     <ul>
//       {suggestions.map((s) => (
//         <li
//         key={s}
//         className="py-2 px-2 hover:bg-gray-100 font-semibold"
//         onMouseDown={(e) => {
//           e.preventDefault(); // Prevent default behavior
//           setSearchQuery(s); // Set the search query
//         }}

//         //onClick will not work here
//         /*  */
//       >
//         <div className="flex items-center">
//           <FaSearch className="mr-3 text-lg" /> {s}
//         </div>
//       </li>
//       ))}
//     </ul>
//   </div>
// )}

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const [voiceSearchModel,setVoiceSearchModal]=useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // API CALLS
    // make an api call after every key press
    // but if the difference between two api callls is <200ms
    // descline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);
    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchVideo = () => {
    console.log("this is search query", searchQuery);
  };

  const VoiceSearch=()=>{
    console.log(voiceSearchModel);
    if(voiceSearchModel){
      setVoiceSearchModal(false);
    }
    else{
      setVoiceSearchModal(true);
    }
    console.log(voiceSearchModel);
  }


  return (
    <div className="grid grid-flow-col h-16 p-2 shadow-lg items-center">
      <div className="flex col-span-1 gap-2 items-center  ">
        <GiHamburgerMenu
          className="text-2xl text-gray-400 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <Link to={"/"}><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79YAV4WMPw0y1dW3op6Py1Yda92DnwHbjNYegDjZ1vQoVywt4OTUg_JA-ohD-rw4u5g&usqp=CAU"
          alt="Sam Youtube logo"
          className="h-8"
        />
        </Link>
      </div>
      <div className="flex w-[100%] ">
        <form
          className="w-[90%] pl-4 border-[1px] border-gray-400 flex items-center rounded-md "
          onSubmit={(e) => {
            e.preventDefault();
            searchVideo();
          }}
        >
          <input
            type="text"
            name=""
            id=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-[90%] h-9 outline-none border-r-2 border-r-gray-400"
            placeholder="search "
          />
          <Link to={"/result/?search_query=" + searchQuery} className="flex items-center w-[10%] bg-gray-400 h-9 overflow-hidden">
            <button
              className=" translate-x-2"
              title="search"
            >
              <CiSearch className="text-2xl" />
            </button>
          </Link>
        </form>
        <button className="ml-2 border-2 text-2xl h-10 aspect-square rounded-[50%] bg-gray-400  " onClick={VoiceSearch}><MdOutlineKeyboardVoice className="translate-x-[25%]" /></button>
        </div>
      <div className="col-span-1 flex justify-end items-center gap-2 pr-2 text-2xl">
        <GoDeviceCameraVideo className="text-xl"/>
        <IoIosNotificationsOutline className="text-xl"/>
        <FaUserCircle  />
      </div>
      {
        voiceSearchModel && <VoiceSearchModal/>
      }
    </div>
  );
};

export default Header;
