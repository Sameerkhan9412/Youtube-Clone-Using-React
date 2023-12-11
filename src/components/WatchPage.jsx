import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Slices/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoInfo from "./VideoInfo";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" col-span-7 grid grid-cols-7 gap-3 px-12 pt-3">
    <div className="col-span-4 ">
      <iframe
        src={`https://www.youtube.com/embed/`+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full aspect-video rounded-md"
      ></iframe>
      <VideoInfo/>
      <CommentsContainer/>
      </div>
      <div className="col-span-3">
        <LiveChat/>
      </div>
    </div>
  );
};

export default WatchPage;
