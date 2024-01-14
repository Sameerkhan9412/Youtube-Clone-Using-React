import React from 'react'
import { LuExternalLink } from "react-icons/lu";
import { videoTitleLength } from '../utils/helper';

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className=' shadow-lg rounded-lg '>
        <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg w-full object-cover aspect-video'  />
        <ul className='px-2'>
            {/* <li className='font-bold py-1 text-ellipsis'>{videoTitleLength(title,70)}</li> */}
            <li className='font-bold py-1 line-clamp-2 h-12'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}
export const AdvstVideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='shadow-lg rounded-lg'>
        <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg' />
        <ul>
          <li className='font-bold'>Advertisement</li>
          <li>{title}</li>
            <li className='py-2'><span className='font-bold'>Sponsored</span> . {channelTitle}</li>
            <li className='py-2 text-center rounded-md flex justify-center bg-[#DEF1FF] text-[rgb(33,113,217)] font-bold'><button className='flex items-center '><span>Apply Now</span><LuExternalLink/></button></li>
        </ul>
    </div>
  )
}

export default VideoCard