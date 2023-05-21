"use client"
import React from 'react'
import './banner-card.scss'
import Badge from '../Badge'
const BannerCard = () => {
  return (
    <div className='banner-card'>
        <Badge size="big" category="travel">travel</Badge>
        <h1 className='text--h1'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
        <div>
        <figure>
          <img src='images/profiles/pp-1.png'/>
        </figure>
        <span className='text--dark-04 text--base'>Jason Franco</span>
        <span className='text--dark-04 text--base'>August 20, 2022</span>
        </div>

    </div>
  )
}

export default BannerCard