import { calculateTimeAgo } from "../utils/constants";
import React from "react";
// import { calculateTimeAgo, formatNumber } from "../Utils/constants";
import { BsDot } from "react-icons/bs";

const SearchResultsCard = ({ info }) => {
  const { snippet} = info;
  const {title,thumbnails,channelTitle,description,publishedAt}=snippet;
  return (
    <div className="">
      <div className="bg-cover flex flex-col grid-cols-5 items-center gap-2 md:grid ">
        <img
          className="w-full md:col-span-2 rounded-xl bg-cover aspect-video mx-auto"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <div className="w-full md:col-span-3">
          <p className="font-bold text-lg line-clamp-2">{title}</p>
          <p className="flex md:mt-2 items-center text-sm font-extralight">
            {channelTitle} <BsDot />
             {calculateTimeAgo(publishedAt)}{" "}
          </p>
          <p className="mt-2 text-sm line-clamp-2 hidden md:visible">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const WatchPageSearchResultsCard = ({ info }) => {
  const { snippet} = info;
  const {title,thumbnails,channelTitle,description,publishedAt}=snippet;
  return (
    <div className="w-full h-1/2 flex flex-col md:grid grid-cols-2  mt-2 gap-2 md:items-center ">
        <img
          className="bg-cover object-cover rounded-lg w-full"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <div className="">
          <p className="font-bold line-clamp-2">{title}</p>
          <p className="flex  items-center text-sm font-semibold text-gray-700">
            {channelTitle} <BsDot /> {calculateTimeAgo(publishedAt)}{" "}
          </p>
        </div>
      </div>
  );
};
export default SearchResultsCard;