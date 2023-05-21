import React from 'react'
import BannerCard from '../BannerCard'
import './banner.scss';

const Banner = () => {
  return (
    <div className='banner'>
        <figure className='banner__image'>
            <img src='images/header.png'/>
        </figure>
        <div className="banner__card">
        <BannerCard/>
        </div>

    </div>
  )
}

export default Banner