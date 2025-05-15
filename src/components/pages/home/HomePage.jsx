import React from 'react'
import NavBar from '../../nav/NavBar'
import Home from "./home/Home";
import Portfolio from './portfolio/Portfolio';
import SeeOrReadMoreBtn from '../../seeMoreBtn/SeeOrReadMoreBtn';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Footer from '../../footer/Footer';
import ScrollTop from '../../scrollTop/ScrollTop';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Home />
      <Portfolio>
        <SeeOrReadMoreBtn link='/allPortfolio' text='See more' />
      </Portfolio>
      <Blog>
        <SeeOrReadMoreBtn link='/allBlog' text='Read more' />
      </Blog>
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  )
}
