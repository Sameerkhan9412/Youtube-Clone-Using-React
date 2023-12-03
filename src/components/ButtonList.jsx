import React from 'react'

const ButtonList = ({name}) => {
  const catList=["All","programming","computer","suhail","arbaz","sameer"];
  return (
    <div>
      <button className='px-5 py-3 p-2 bg-gray-400 rounded-lg' >{name}</button>
    </div>
  )
}

export default ButtonList