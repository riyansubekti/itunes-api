import React from 'react'
import PropTypes from 'prop-types';
import coinSVG from '../assets/currency-dollar.svg'
import './Card.css'

const Card = ({ title, image, artist, badge, coin }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} />
      <div className="card-content">
        <div className="card-artist">{artist}</div>
        <div className="card-title">{title}</div>
        <div className="card-footer">
          <div className="card-badge">
            {badge}
          </div>
          <div className="card-coin">
            <img src={coinSVG} alt="coin" />
            <span>{coin}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  artist: PropTypes.string,
  badge: PropTypes.string,
  coin: PropTypes.string,
};

Card.defaultProps = {
  title: 'Title',
  image: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/100x100bb.jpg',
  artist: 'Artist',
  badge: 'Pop',
  coin: '1.0',
};

export default Card