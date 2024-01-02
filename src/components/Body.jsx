import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'

const Body = () => {
  const isDark=useSelector(store=>store.theme.isDark);
  return (
    <div className="grid grid-cols-6 overflow-hidden" style={{background:isDark?"var(--dark-theme-bgcolor)":"var(--light-theme-bgcolor)",color:isDark?"var(--dark-theme-text)":"var(--light-theme-text"}}>
      <div className="col-span-6"><Header/></div>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body