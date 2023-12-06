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
    <div className="flex flex-col">
    <div className="px-5 flex">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/`+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <LiveChat/>
      </div>
    </div>

    <div>
      <VideoInfo/>
    <CommentsContainer/>
    </div>
    </div>
  );
};

export default WatchPage;
