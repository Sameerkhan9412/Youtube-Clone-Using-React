import React from "react";
import { homePageButtonNameList } from "../utils/helper";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ButtonList = () => {
  const isDark=useSelector(store=>store.theme.isDark);

  return (
    <div className="flex text-sm overflow-scroll custom-scrollbar2 " >
      <Link to={`/`}>
            <div>
          <button className={`px-4 py-1 whitespace-nowrap ${isDark?"bg-gray-500":"bg-gray-400"} rounded-lg hover:bg-gray-700`}>
            All
          </button>
        </div>
          </Link>
      {homePageButtonNameList.map((item,index) => (
        <Link to={`/result/?search_query=${item}`} key={index}>
            <div>
          <button className={`mx-2 px-4 py-1 whitespace-nowrap  ${isDark?"bg-gray-500":"bg-gray-400"} hover:${isDark?"bg-gray-400":"bg-gray-500"}  rounded-lg`}>
            {item}
          </button>
        </div>
          </Link>
      ))}
    </div>
  );
};

export default ButtonList;
