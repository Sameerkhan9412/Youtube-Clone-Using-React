import React from 'react'
import { FaUser } from 'react-icons/fa'

const ChatMessage = ({name,message}) => {

  return (
    <div className='flex items-center my-[2px] '>
        <img className='mr-2 w-8 h-8 rounded-full ' src={name.logo}/>
        <span className='font-bold text-gray-500 mr-2'>{name.name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage