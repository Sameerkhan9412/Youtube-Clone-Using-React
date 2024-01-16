import React, { useEffect, useState } from 'react'
import { CiHome, CiMusicNote1 } from "react-icons/ci";
import { useSelector } from 'react-redux';

import { GoHome, GoStopwatch, GoThumbsup, GoVideo } from "react-icons/go";
import { SiYoutubemusic, SiYoutubeshorts, SiYoutubestudio } from "react-icons/si";
import { MdOutlinePodcasts, MdOutlineUserCircle, MdSubscriptions } from "react-icons/md";
import { FaChevronRight, FaFileVideo, FaHistory, FaUser, FaViadeoSquare, FaVideo, FaYoutube } from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineNewspaper, HiOutlineSignal, HiOutlineTrophy, HiOutlineUserCircle } from "react-icons/hi2";
import {AiOutlineExclamationCircle, AiOutlineFire, AiOutlineFlag, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineShopping} from "react-icons/ai"
import {PiCoatHanger, PiFilmSlate, PiGameController} from 'react-icons/pi'
import {TbBrandYoutubeKids} from 'react-icons/tb'
import { useLocation } from 'react-router-dom';
const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  const [flag,setFlag]=useState(false);
  const location=useLocation();
  const isDark=useSelector(store=>store.theme.isDark);

  // early return pattern
  useEffect(()=>{
    setFlag(location.pathname.includes("watch"));
  },[location.pathname])
  if(!isMenuOpen) return null;
  
  return (
    <div className={`p-2 pt-0 shadow-lg col-span-1 h-[calc(100vh-4rem)] overflow-y-scroll custom-scrollbar1 mt-16 absolute bg-black ${flag?"lg:absolute":"lg:relative"} `} style={{background:isDark?"var(--dark-theme-bgcolor)":"var(--light-theme-bgcolor)",color:isDark?"var(--dark-theme-text)":"var(--light-theme-text"}}>
      <ul className='text-sm'>
        <li className='sidebarList'><GoHome className='mr-3 text-2xl'/> Home</li>
        <li className='sidebarList '><SiYoutubeshorts className='mr-3 text-2xl'/> Shorts</li>
        <li className='sidebarList '><MdSubscriptions className='mr-3 text-2xl'/> Subscriptions</li>
        <hr className='my-2' />
        <li className='sidebarList '>You <FaChevronRight className='mr-3 text-1xl'/></li>
        <li className='sidebarList'><HiOutlineUserCircle className='mr-3 text-2xl'/> Your Channel</li>
        <li className='sidebarList'><FaHistory  className='mr-3 text-2xl '/> History</li>
        <li className='sidebarList'><GoVideo  className='mr-3 text-2xl '/> Your Videos</li>
        <li className='sidebarList'><GoStopwatch  className='mr-3 text-2xl '/> Watch Later</li>
        <li className='sidebarList'><GoThumbsup  className='mr-3 text-2xl '/> Liked Videos</li>
      </ul>
      <hr className='my-2' />
      <h1 className="font-bold">Explore</h1>
      <ul>
        <li className='sidebarList'><AiOutlineFire  className='mr-3 text-2xl '/> Trending</li>
        <li className='sidebarList'><AiOutlineShopping  className='mr-3 text-2xl '/> Shopping</li>
        <li className='sidebarList'><CiMusicNote1  className='mr-3 text-2xl '/> Music</li>
        <li className='sidebarList'><PiFilmSlate  className='mr-3 text-2xl '/> Film</li>
        <li className='sidebarList'><HiOutlineSignal  className='mr-3 text-2xl '/> Live</li>
        <li className='sidebarList'><PiGameController  className='mr-3 text-2xl '/>Gaming</li>
        <li className='sidebarList'><HiOutlineNewspaper  className='mr-3 text-2xl '/> News</li>
        <li className='sidebarList'><HiOutlineTrophy  className='mr-3 text-2xl '/> Sports</li>
        <li className='sidebarList'><HiOutlineLightBulb  className='mr-3 text-2xl '/> Learing</li>
        <li className='sidebarList'><MdOutlinePodcasts  className='mr-3 text-2xl '/> Podcasts</li>
      </ul>
      <hr className='my-2' />
      <h1>More from Youtube</h1>
      <ul className='text-sm'>
        <li className='sidebarList'><FaYoutube  className='mr-3 text-2xl  text-red-500 '/> Youtube Premium</li>
        <li className='sidebarList'><SiYoutubestudio  className='mr-3 text-2xl  text-red-500'/> Youtube Studio</li>
        <li className='sidebarList'><SiYoutubemusic  className='mr-3 text-2xl  text-red-500 '/> Youtube Music</li>
        <li className='sidebarList'><TbBrandYoutubeKids  className='mr-3 text-2xl  text-red-500 '/> Youtube Kids</li>
      </ul>
      <hr className='my-2' />
      <ul className='text-sm'>
        <li className='sidebarList'><AiOutlineSetting  className='mr-3 text-2xl '/> Settings</li>
        <li className='sidebarList'><AiOutlineFlag  className='mr-3 text-2xl '/>Request history</li>
        <li className='sidebarList'><AiOutlineQuestionCircle  className='mr-3 text-2xl '/> Help</li>
        <li className='sidebarList'><AiOutlineExclamationCircle  className='mr-3 text-2xl '/> Send Feedback</li>

      </ul>
    </div>
  )
}

export default Sidebar