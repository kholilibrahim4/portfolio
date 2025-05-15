import React, { useEffect } from 'react'
import OtherPageNav from '../otherPageNav/OtherPageNav'
import Footer from '../../footer/Footer'
import Portfolio from '../home/portfolio/Portfolio'

export default function Allportfolio() {
  useEffect(()=>{
    window.scroll(0,0)
  },[])

  
  return (
    <>
        <OtherPageNav pageTitle='All Portfolios' />
        <Portfolio allDataShow={true}/>
        <Footer />
    </>
  )
}
