import React from "react";
import { homePageButtonNameList } from "../utils/helper";
import { Link } from "react-router-dom";

const ButtonList = () => {
  return (
    <div className="flex text-sm overflow-scroll custom-scrollbar2 " >
      <Link to={`/`}>
            <div>
          <button className="px-4 py-1 whitespace-nowrap  bg-gray-200 rounded-lg hover:bg-gray-300">
            All
          </button>
        </div>
          </Link>
      {homePageButtonNameList.map((item,index) => (
        <Link to={`/result/?search_query=${item}`} key={index}>
            <div>
          <button className="mx-2 px-4 py-1 whitespace-nowrap  bg-gray-200 rounded-lg hover:bg-gray-300">
            {item}
          </button>
        </div>
          </Link>
      ))}
    </div>
  );
};

export default ButtonList;
