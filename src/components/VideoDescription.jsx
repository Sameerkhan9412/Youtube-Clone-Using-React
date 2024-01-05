
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { calculateTimeAgo,formatNumber } from "../utils/constants";
import {
  HiThumbDown,
  HiThumbUp,
  HiOutlineThumbDown,
  HiOutlineThumbUp,
} from "react-icons/hi";
import { BiSolidBellRing } from "react-icons/bi";
import { MdFileDownload } from "react-icons/md";
import { downloadVideoFunc } from "../services/donwloadVideo";

export const VideoDescription = ({ info, channelInfo,videoId }) => {
  const [showDescription, setShowDescription] = useState(false);
  const {
    snippet: { channelTitle, title, description, publishedAt } = {},
    statistics: { viewCount, likeCount } = {},
  } = info ?? {};

  /*/info ?? {} uses the nullish coalescing operator (??) 
  to ensure that if info is null or undefined, an empty object {} 
  is used as a fallback. This prevents potential "Cannot read property '...' 
  of null" or "Cannot read property '...' of undefined" errors when 
  destructuring the object.*/
  const [issubscribe, setIsSubscribe] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);
  const [vidQuality,setVidQuality]=useState("18");
  const isDark=useSelector(store=>store.theme.isDark);
  

  const truncatedDescription = showDescription
  ? description
    : `${description?.substring(0, 200)}...`;

  const { snippet: { thumbnails } = {}, statistics: { subscriberCount } = {} } =
    channelInfo ?? {};

    const videoDownload=(videoId,quality)=>{
      downloadVideoFunc(videoId,quality);
    }
  //optional chaining is very important
  return (
    <div className="">
      <div className="">
        <p className="font-extrabold text-xl">{title}</p>
        <div className="flex items-center  mb-3 mt-1 justify-between">
          <div className="w-1/2 flex items-center p-2 justify-evenly" >
            <img
              className="rounded-full h-12"
              src={thumbnails?.high?.url}
              alt="Avtaar"
            />
          <div className="ml-1">
            <p className="font-bold">{channelTitle}</p>
            <p className="text-gray-500 text-sm">
              {formatNumber(subscriberCount) + " subscribers"}
            </p>
          </div>
          <div>
            {issubscribe ? (
              <div className="flex font-semibold rounded-full items-center px-4 ml-2 " style={{background:isDark?"var(--light-theme-bgcolor)":"var(--dark-theme-bgcolor)",color:isDark?"var(--light-theme-text)":"var(--dark-theme-text"}}>
                <BiSolidBellRing className="text-xl mt-0" />
                <button className="ml-1 py-1 " onClick={() => setIsSubscribe(false)}>
                  Subscribed
                </button>
              </div>
            ) : (
              <button
                className="font-semibold w-32 py-1 rounded-full ml-2" style={{background:isDark?"var(--light-theme-bgcolor)":"var(--dark-theme-bgcolor)",color:isDark?"var(--light-theme-text)":"var(--dark-theme-text"}}
                onClick={() => setIsSubscribe(true)}
              >
                Subscribe
              </button>
            )}
          </div>
          </div>
          <div className="flex font-normal rounded-full items-center py-1 px-3" style={{background:isDark?"var(--light-theme-bgcolor)":"var(--dark-theme-bgcolor)",color:isDark?"var(--light-theme-text)":"var(--dark-theme-text"}}>
            {isLike ? (
              <button
                onClick={() => {
                  setIsLike(false);
                }}
                className="text-2xl ml-2"
              >
                <HiThumbUp />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLike(true);
                  setIsDisLike(false);
                }}
                className="ml-2 text-2xl"
              >
                <HiOutlineThumbUp />
              </button>
            )}
            <p className="text-sm font-semibold ml-1">
              {formatNumber(likeCount)}
            </p>
            {isDisLike ? (
              <button
                className="text-2xl ml-3"
                onClick={() => {
                  setIsDisLike(false);
                }}
              >
                <HiThumbDown />
              </button>
            ) : (
              <button
                className="text-2xl ml-3"
                onClick={() => {
                  setIsDisLike(true);
                  setIsLike(false);
                }}
              >
                <HiOutlineThumbDown />
              </button>
            )}
          </div>
          <div className=" flex font-normal rounded-full py-1 px-2 " style={{background:isDark?"var(--light-theme-bgcolor)":"var(--dark-theme-bgcolor)",color:isDark?"var(--light-theme-text)":"var(--dark-theme-text"}}>
            <select  value={vidQuality} onChange={(e)=>setVidQuality(e.target.value)}  className=" outline-none mx-1 border-r-2 border-white" style={{background:isDark?"var(--light-theme-bgcolor)":"var(--dark-theme-bgcolor)",color:isDark?"var(--light-theme-text)":"var(--dark-theme-text"}}>
              <option value="137">1080p</option>
              <option value="136">720p</option>
              <option value="135">480p</option>
              <option value="18">360</option>
              <option value="140">mp3</option>
            </select>
            <p className="text-2xl">
              <MdFileDownload />
            </p>
            <button className="font-semibold ml-2" onClick={()=>videoDownload(videoId,vidQuality)}>Download</button>
          </div>
        </div>
      </div>
      <div className=" m-2 p-2 \ bg-slate-100 text-black rounded-md">
        <div className="flex font-semibold ">
          <p>{formatNumber(viewCount)}</p>
          <p className="ml-3">{calculateTimeAgo(publishedAt)}</p>
        </div>
        <div>
          <p>{truncatedDescription}</p>
          <button
            className="font-bold"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;