import React from 'react'
import logo from '../assets/logo.svg'
import Menu from './Menu'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        <img src={logo} alt="logo-ngmusic" />
      </div>
      <Menu />
    </div>
  )
}

export default Home