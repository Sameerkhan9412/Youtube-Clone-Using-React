import React from 'react'
import { CiHome } from "react-icons/ci";
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  // early return pattern
  if(!isMenuOpen) return null;
  
  return (
    <div className='p-5 shadow-lg col-span-1'>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar