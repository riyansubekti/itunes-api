import React, { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Content from './components/Content'
import { HomeContext } from './context'
import './App.css'

const App = () => {
  const [activeHome, setActiveHome] = useState(true);
  const [activeSearch, setActiveSearch] = useState(true);
  const loadMore = 5;
  return (
    <div className="container">
      <HomeContext.Provider value={{ loadMore, activeHome, setActiveHome, activeSearch, setActiveSearch }}>
        {
          activeHome ? 
            <Home />
          : 
          <>
            <Header />
            <Content />
          </>
        }
      </HomeContext.Provider>
    </div>
  )
}

export default App