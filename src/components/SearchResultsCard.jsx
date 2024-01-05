import { calculateTimeAgo } from "../utils/constants";
import React from "react";
// import { calculateTimeAgo, formatNumber } from "../Utils/constants";
import { BsDot } from "react-icons/bs";

const SearchResultsCard = ({ info }) => {
  const { snippet} = info;
  const {title,thumbnails,channelTitle,description,publishedAt}=snippet;
  return (
    <div className="space-y-2 mb-2 md:h-52 md:m-2 md:my-3 flex-col md:flex-row flex cursor-pointer p-1 rounded-lg">
      <div className="flex bg-cover">
        <img
          className=" md:w-fit w-full rounded-xl bg-cover"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <div className="ml-4">
          <p className="font-extrabold">{title}</p>
          <p className="flex mt-4 items-center text-sm font-semibold text-gray-700">
            {channelTitle} <BsDot />
             {calculateTimeAgo(publishedAt)}{" "}
          </p>
          <p className="mt-4 font-medium text text-gray-600 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const WatchPageSearchResultsCard = ({ info }) => {
  const { snippet} = info;
  const {title,thumbnails,channelTitle,description,publishedAt}=snippet;
  return (
    <div className="w-full h-1/2 grid grid-cols-2 items-center mt-2">
        <img
          className="bg-cover object-cover rounded-lg"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <div className="ml-4">
          <p className="font-bold">{title}</p>
          <p className="flex mt-4 items-center text-sm font-semibold text-gray-700">
            {channelTitle} <BsDot />
          </p>
        </div>
      </div>
  );
};
export default SearchResultsCard;