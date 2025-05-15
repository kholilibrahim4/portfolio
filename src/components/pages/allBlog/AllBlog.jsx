import React, { useEffect } from 'react'
import OtherPageNav from '../otherPageNav/OtherPageNav'
import Footer from '../../footer/Footer'
import Blog from '../home/blog/Blog'

export default function AllBlog() {
    useEffect(()=>{
        window.scroll(0,0)
      },[])
    return (
        <>
            <OtherPageNav pageTitle='All Works' />
            <Blog allDataShow={true}/>
            <Footer />
        </>
    )
}
