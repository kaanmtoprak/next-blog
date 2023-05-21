"use client"
import { Input } from 'antd'
import Link from 'next/link'
import React from 'react'
import './header.scss'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    
    <header className='header'>
        <div className='header__logo'>
            <span>
                BLOG
            </span>
        </div>
        <div className='header__nav'>
            <Link href="/">Home</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div className='header__search-bar'>
        <Input placeholder="Search..." suffix={<SearchOutlined />} />
        </div>
        <div className='header__hamburger'>
        <MenuOutlined />
        </div>
    </header>
  )
}

export default Header