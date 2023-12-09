import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard,{AdvstVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const api_key=process.env.REACT_APP_YOUTUBE_KEY;
  const [videos,setVideo]=useState([]);
  useEffect(()=>{
    getVideo();
  },[]);
  const getVideo=async()=>{
    const data=await fetch(YOUTUBE_VIDEO_API+api_key);
    const json=await data.json();
    setVideo(json.items);
  }
  return (
    <div className='h-[calc(100vh-7.8rem)]  overflow-y-scroll custom-scrollbar1 grid  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' >
      {videos[0] && <AdvstVideoCard info={videos[9]}/>}
      {
        videos.map((video)=>(
          <Link to={`/watch?v=${video.id}`}  key={video.id}> <VideoCard key={video.id} info={video}/></Link>
        ))
      }
    </div>
  )
}

export default VideoContainer