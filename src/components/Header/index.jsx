"use client"
import { Input } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './header.scss'
import { CloseOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'

const Header = () => {
  const [mobileMenu,setMobilMenu] = useState(false)

  // useEffect(()=>{
  //   const body = document.getElementsByTagName("body")
  //   if (!mobileMenu) {
  //     body.style.overflow = "scroll"
  //   }else {
  //     body.style.overflow = "hidden"
  //   }
  // },[mobileMenu])
  
  return (
    
    <header className={`header${mobileMenu ? "--active" :""}`}>
        <div className={`header${mobileMenu ? "--active" :""}__logo`}>
            <Link href="/">
                BLOG
            </Link>
        </div>
        <div className={`header${mobileMenu ? "--active" :""}__nav`}>
            <Link href="/">Home</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div className={`header${mobileMenu ? "--active" :""}__search-bar`}>
        <Input placeholder="Search..." suffix={<SearchOutlined />} />
        </div>
        <div onClick={()=>setMobilMenu(!mobileMenu)} className={`header${mobileMenu ? "--active" :""}__hamburger`}>
        
        {mobileMenu ? <CloseOutlined /> : <MenuOutlined /> }
        
        </div>
    </header>
  )
}

export default Header