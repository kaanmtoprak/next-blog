import React from 'react'
import BlogCard from '../BlogCard'
import {DummyBlogs} from '@/Utilities/DummyContents'
import './blogs.scss';

const Blogs = ({index}) => {
  return (
    <div className='blogs'>
        {index && <h3 className='text--h3--700 blogs__header'> Latest Post</h3>}
        <div className='blogs__cards'>
        {
            DummyBlogs?.map((index,key)=>(
                <BlogCard blog={index} key={key}/>
            ))
        }
        </div>
    </div>
  )
}

export default Blogs