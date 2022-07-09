import axios from 'axios';
import React, { useContext, useState } from 'react'
import { HomeContext } from '../context'
import Card from './Card';
import './Content.css'

const Content = () => {
  const { setActiveSearch, activeSearch } = useContext(HomeContext);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [music, setMusic] = useState(false);
  const handleChange = e => setSearch(e.target.value);
  const handleSubmit = () => {
    if (search === '') return;
    setLoading(true);
    axios.get(`https://itunes.apple.com/search?term=${search}`)
      .then(res => {
        setMusic(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setLoading(false);
      });
    setActiveSearch(false);
  }

  return (
    <div className="content">
      <div className="content-container">
        {
          activeSearch ? 
            <div className="group-input">
                <input onChange={handleChange} value={search} type="text" placeholder="Search..." id="Search" />
                <div onClick={handleSubmit} className="btn-input">GO</div>
            </div>
          :
            <p>Search result for : <span>{search === '' ? 'Not Found' : search}</span></p>
        }
        {
          loading ? <label>Loading...</label> :
            !music ? <label>Search data first</label>
              : music.length > 0 ?
                  music.map(items => (
                    <Card
                      badge={items.primaryGenreName}
                      coin={items.trackPrice}
                      title={items.collectionName}
                      image={items.artworkUrl100}
                      artist={items.artistName} />
                  ))
                  : <label>Search not found!</label>
        }
      </div>
    </div>
  )
}

export default Content