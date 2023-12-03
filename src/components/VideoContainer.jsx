import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
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
    <div className='flex flex-wrap'>
      {
        videos.map((video)=>(
          <Link to={`/watch?v=${video.id}`}> <VideoCard key={video.id} info={video}/></Link>
        ))
      }
    </div>
  )
}

export default VideoContainer