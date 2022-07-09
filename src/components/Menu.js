import React, { useContext } from 'react'
import { HomeContext } from '../context'
import './Menu.css'

const Menu = () => {
  const { setActiveHome, setActiveSearch } = useContext(HomeContext);
  const handleHome = () => {
    setActiveSearch(true);
    setActiveHome(prev => !prev);
  }

  return (
    <div className="home--menu">
      <div onClick={handleHome} className="menu--album">Artist / Album / Title</div>
      <div onClick={handleHome} className="menu--search">Search</div>
    </div>
  )
}

export default Menu