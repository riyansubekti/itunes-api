import React, { useContext } from 'react'
import menu from '../assets/menu.svg'
import ngmusic from '../assets/ngmusic.svg'
import search from '../assets/search.svg'
import { HomeContext } from '../context'
import './Header.css'

const Result = () => {
  const { setActiveHome, setActiveSearch } = useContext(HomeContext);
  const handleHome = () => setActiveHome(prev => !prev);
  const handleSearch = () => setActiveSearch(prev => !prev);

  return (
    <div className="heading-bar">
      <div className="group-bar">
        <div onClick={handleHome} className="menu-bar">
          <img src={menu} alt="menu" />
        </div>
        <div className="logo-bar">
          <img src={ngmusic} alt="ngmusic" />
        </div>
        <div onClick={handleSearch}  className="search-bar">
          <img src={search} alt="search" />
        </div>
      </div>
    </div>
  )
}

export default Result