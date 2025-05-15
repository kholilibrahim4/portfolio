import React, { useContext, useEffect } from 'react'
import OtherPageNav from '../otherPageNav/OtherPageNav'
import Footer from '../../footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
// import blogImage from '../../../../public/blogImg/blog-1.jpg'
import { DataContext } from '../../contextApi/DataContext'


export default function SingleBlog() {
    const {blogs:{blogItems}} = useContext(DataContext)
    let singleBlogData = blogItems[0]
    console.log(blogItems[0].title);
    

    useEffect(()=>{
        window.scroll(0,0)
      },[])
  return (
    <>
        <OtherPageNav pageTitle='Single Work' />
            <Container className="padtop_120">
                <Row>
                    <Col lg={9}>
                        <img src={''} alt='blog image'/>
                        <h2>{singleBlogData.title}</h2>
                        <p>{singleBlogData.descr2}</p>
                    </Col>
                    <Col lg={3}>
                    </Col>
                </Row>
            </Container>
        <Footer />
    </>
  )
}
