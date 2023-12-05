import React from 'react'
import { FaUser } from 'react-icons/fa'

const ChatMessage = ({name,message}) => {

  return (
    <div className='flex items-center bg-green-50 p-2 m-1 '>
        <FaUser/>
        <span className='font-bold mr-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage