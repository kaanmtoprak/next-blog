import React from 'react'
import './blog-card.scss'
import Badge from '../Badge'
import Link from 'next/link'

const BlogCard = ({blog}) => {
  return (
    <Link href={`/${blog?.id}`} className="blog-card">
            <figure className='blog-card__image'>
                <img src={`images/${blog.category}.jpg`}/>
            </figure>
            <Badge size="big" category={blog.category}>{blog.category}</Badge>
            <h3 className='text--h3--bold text--dark-02'>{blog.title}</h3>
            <div className='blog-card__author'>
        <figure>
          <img src={`images/profiles/${blog.pp}.png`}/>
        </figure>
        <span className='text--dark-04 text--base'>{blog.author}</span>
        <span className='text--dark-04 text--base'>August 20, 2022</span>
        </div>
    </Link>
  )
}

export default BlogCard