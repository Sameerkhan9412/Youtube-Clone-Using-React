import React, { useState } from 'react'
import { GiOldMicrophone } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition'
import { BsSignStop } from "react-icons/bs";
const VoiceSearchModal = ({data}) => {
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
    <div className=' translate-y-1/2 h-[90vh] w-[90vw] max-sm:w-[90vw] max-lg:w-[80vw] max-xl:w-[50vw] translate-x-1/2 border-2 border-black rounded-md   bg-white absolute z-50 overflow-y-hidden flex  flex-col items-center justify-between '>
      <h1 className='text-2xl'>Start Listening</h1>
      <div className='text-2xl h-2'>{transcript}</div>
      <div className='text-4xl mx-auto flex gap-4 my-3'>
        <button className='border-2  border-gray-400 p-2 bg-red-500 rounded-full hover:bg-white transition-all duration-200 ' onClick={startListening} ><GiOldMicrophone className=''/></button>
        <button className='border-2 border-gray-400 p-2 bg-gray-500 rounded-full  hover:bg-white transition-all duration-200' onClick={stopListeningVoice}><BsSignStop/></button>
      </div>
    </div>
  )
}

export default VoiceSearchModal