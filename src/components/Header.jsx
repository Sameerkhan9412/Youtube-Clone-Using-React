import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Slices/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../Slices/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
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
  const getVideoBySearch = () => {};
  const searchVideo = () => {
    console.log("this is search query", searchQuery);
  };
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
      <div className="col-span-12 flex justify-center h-11 ">
        <div className="border border-gray-400 h-10 pl-4 py-[2px]flex  flex-col justify-center rounded-3xl w-[60%]">
          <form
            className=" flex flex-row items-center gap-2 "
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
              className="w-[90%] h-9 border-r-[1px] border-gray-400  outline-none"
              placeholder="search "
            />
            <Link to={"/result/?search_query=" + searchQuery} className="">
              <button
                className="align-middle "
                title="search"
              >
                <CiSearch className="text-2xl" />
              </button>
            </Link>
          </form>
          {showSuggestions && (
            <div className="fixed mt-9 bg-white px-5 py-2 w-1/3 shadow-lg rounded-lg">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="flex gap-2 py-[2px] items-center hover:bg-green-100 cursor-pointer"
                  >
                    <FaSearch /> {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 flex justify-end items-center pr-2">
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
