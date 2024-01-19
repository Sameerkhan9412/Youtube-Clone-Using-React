import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Slices/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useSelector } from "react-redux";
import SuggestionVideo from "./SuggestionVideo";
import VideoDescription from "./VideoDescription";
import { VIDEO_API } from "../utils/constants";
import { VideoInfoShimmer } from "./WatchPageShimmers";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isDark=useSelector(store=>store.theme.isDark);
  const api_key=process.env.REACT_APP_YOUTUBE_KEY;
  const desiredId = searchParams.get("v");

  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState([]);
  const [searchTag,setSearchTag]=useState("trending video");
  
  useEffect(() => {
    console.log("this is video data",videos);
    getVideos();
  }, [desiredId]); // Trigger getVideos when desiredId changes

  const getVideos = async () => {
    const data = await fetch(VIDEO_API +api_key+"&id="+ desiredId);
    const json = await data.json();
    setSearchTag(json.items[0].snippet.title);
    setVideos(json.items[0]);
    // Extract channelId from videos and pass it to getChannel
    const channelId = json.items[0]?.snippet?.channelId;
    if (channelId) {
      getChannel(channelId);
    }
  };
  const getChannel = async (channelId) => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${api_key}`
    );
    const json = await data.json();
    const channelInfo = json?.items?.[0] ?? null;
    setChannel(channelInfo);
  };
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  console.log("vidoe info",videos);
  return (
    <div className="col-span-7 grid grid-cols-7 gap-3 mx-auto mt-16 px-4 max-w-[1700px] h-[calc(100vh-4rem)]  overflow-hidden overflow-y-scroll custom-scrollbar1 max-md:px-2" >
    <div className="col-span-4 max-md:col-span-7 ">
      <iframe
        src={`https://www.youtube.com/embed/`+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full aspect-video rounded-md"
      ></iframe>
      {videos.length===0?<VideoInfoShimmer/>:
        <VideoDescription info={videos} channelInfo={channel} videoId={desiredId}/>
      }
      <CommentsContainer/>
      </div>
      <div className="col-span-3 max-md:col-span-7">
        <LiveChat/>
        <SuggestionVideo videoSearchTag={searchTag}/>
      </div>
    </div>
  );
};

export default WatchPage;
