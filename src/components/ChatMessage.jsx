import React from 'react'
import { FaUser } from 'react-icons/fa'

const ChatMessage = ({name,message}) => {

  return (
    <div className='flex items-center my-[2px] '>
        <FaUser className='mr-2'/>
        <span className='font-bold text-gray-500 mr-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage