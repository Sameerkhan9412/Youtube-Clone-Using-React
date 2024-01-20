import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { PiMicrophone } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition'
import { BsSignStop } from "react-icons/bs";
import {RxCross1} from 'react-icons/rx'
const VoiceSearchModal = ({data}) => {
  const navigate=useNavigate();
  const isDark = useSelector((store) => store.theme.isDark);
  const {setSearchQuery,setVoiceSearchModal}=data;
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  useEffect(()=>{
    SpeechRecognition.startListening();
  },[]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const stopListeningVoice=()=>{
    SpeechRecognition.stopListening();
    setSearchQuery(transcript);
    navigate("/result/?search_query=" + transcript);
    setVoiceSearchModal(false);
  }

  return (
    <div className="absolute h-screen w-screen  flex flex-col justify-end items-center">
    <div className=' w-[90%] md:w-96 h-72 flex flex-col rounded-lg text-center justify-between translate-y-1/2 ' style={{background:isDark?"var(--dark-theme-bgcolor)":"var(--light-theme-bgcolor)",border:isDark?"2px solid var(--light-theme-bgcolor)":"2px solid var(--dark-theme-bgcolor)",color:isDark?"var(--dark-theme-text)":"var(--light-theme-text"}}>
      <h1 className='text-2xl'>{listening?"Start Listening":"Stop Listening"}</h1> 
      <RxCross1 className=' text-2xl absolute  right-2 top-2 cursor-pointer' onClick={()=>setVoiceSearchModal(false)}/>
      <div className='text-2xl mt-3'>{transcript}</div>
      <div className='text-4xl mx-auto flex gap-4 my-3  rounded-full relative bottom-0 w-20 h-20'>
        <button className='border-2  border-gray-400 p-2 bg-red-700 rounded-full hover:bg-red-500 transition-all duration-200 w-16 h-16 mx-auto my-auto   voice-animation' title='voice search' onClick={stopListeningVoice} ><PiMicrophone className='m-auto'/></button>
      </div>
    </div>
    </div>
  )
}

export default VoiceSearchModal