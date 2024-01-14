import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { GiOldMicrophone } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition'
import { BsSignStop } from "react-icons/bs";
const VoiceSearchModal = ({data}) => {
  const isDark = useSelector((store) => store.theme.isDark);
  const {setSearchQuery,setVoiceSearchModal}=data;
  const [searchText,setSearchText]=useState("Listening....");
  const {transcript,browserSupportsSpeechRecognition} = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({ continuous: true});
  const navigate=useNavigate();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const stopListeningVoice=()=>{
    const tmp=SpeechRecognition.stopListening;
    setSearchQuery(transcript);
    navigate("/result/?search_query=" + transcript);
    setVoiceSearchModal(false);
  }

  return (
    <div className='h-[300px] w-[400px] absolute z-50 right-0 translate-x-[-100%] translate-y-[100%] flex flex-col justify-between ' style={{background:isDark?"var(--dark-theme-bgcolor)":"var(--light-theme-bgcolor)",border:isDark?"2px solid var(--light-theme-bgcolor)":"2px solid var(--dark-theme-bgcolor)",color:isDark?"var(--dark-theme-text)":"var(--light-theme-text"}}>
      <h1 className='text-2xl'>Start Listening</h1>
      <div className='text-2xl h-2'>{transcript}</div>
      <div className='text-4xl mx-auto flex gap-4 my-3'>
        <button className='border-2  border-gray-400 p-2 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-200 ' onClick={stopListeningVoice} ><GiOldMicrophone className=''/></button>
      </div>
    </div>
  )
}

export default VoiceSearchModal