import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaSearch, FaYoutube, FaMoon } from "react-icons/fa";
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
import Theme from "./Theme";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const [voiceSearchModel,setVoiceSearchModal]=useState(false);
  const isDark = useSelector((store) => store.theme.isDark);
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
    try{
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
    }
    catch(e){
      console.log(e);
    }
  };
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  const VoiceSearch=()=>{
    if(voiceSearchModel){
      setVoiceSearchModal(false);
    }
    else{
      setVoiceSearchModal(true);
    }
    console.log(voiceSearchModel);
  }
  
  
  return (
    <div className={`grid grid-flow-col h-16 p-2 shadow-lg items-center}`}>
      <div className="flex col-span-1 gap-2 items-center  ">
        <GiHamburgerMenu
          className="text-2xl text-gray-400 cursor-pointer"
          onClick={toggleMenuHandler}
          />
        <Link to={"/"} className="flex gap-1 text-lg items-center font-semibold">
        <FaYoutube className="text-red-500 text-3xl"/>
        <span>SamTube</span>
        </Link>
      </div>
      <div className="flex w-[100%]">
        <div className="w-[100%] relative">
        <form
          className="w-[100%] pl-4 border-[1px] border-gray-400 flex items-center rounded-md "
          onSubmit={(e) => {
            e.preventDefault();
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
            className="w-[90%] h-9 outline-none border-r-2 border-r-gray-400 bg-transparent"
            placeholder="search "
            />
          <Link to={"/result/?search_query=" + searchQuery} className="flex items-center w-[10%] h-9 overflow-hidden">
            <button
              className=" translate-x-2"
              title="search"
              >
              <CiSearch className="text-2xl" />
            </button>
          </Link>
        </form>
        {showSuggestions && (
                  <div className="absolute z-10  border-1 w-full" style={{background:isDark?"var(--dark-theme-bgcolor)":"var(--light-theme-bgcolor)"}}>
                    <ul>
                      {suggestions.map((s) => (
                        <li
                        key={s}
                        className="py-2 px-2 hover:bg-gray-500 font-semibold cursor-pointer"
                        onMouseDown={(e) => {
                          e.preventDefault(); // Prevent default behavior
                          setSearchQuery(s); // Set the search query
                        }}
                
                        //onClick will not work here
                        /*  */
                      >
                        <div className="flex items-center">
                          <FaSearch className="mr-3 text-lg" /> {s}
                        </div>
                      </li>
                      ))}
                    </ul>
                  </div>
                )}
        </div>
        <button className="ml-2 border-2 text-2xl h-10 aspect-square rounded-[50%] hover:bg-red-400 transition-all duration-200 hover:text-white " title="Voice search" onClick={VoiceSearch}><MdOutlineKeyboardVoice className="translate-x-[25%]" /></button>
        </div>
      <div className="col-span-1 flex justify-end items-center gap-2 pr-2 text-2xl">
        <Theme/>
        <GoDeviceCameraVideo className="text-xl"/>
        <IoIosNotificationsOutline className="text-xl"/>
        <FaUserCircle  />
      </div>
      {
        voiceSearchModel && <VoiceSearchModal data={{searchQuery,setSearchQuery,setVoiceSearchModal}}/>
      }
    </div>
  );
};

export default Header;
