import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Blog.module.css'
import { Link } from 'react-router-dom'

export default function BlogItem({ title, blogImg, descr, blogDate,author }) {
    return (
        <Col lg={4} md={4} sm={6} xs={12} className={`${styles.blogShadow}`}>
            <Link to="/404" className={`${styles.blogContent} ${styles.blogHover} wow fadeInUp`} data-wow-delay="0.4s">
                <div className={`${styles.blogImage}`}>
                    <img src={blogImg} alt='Blog Image' />
                </div>
                <h2 className={`${styles.blogTitle}`}>{title}</h2>
                <p>{descr} </p>
                <span className={`${styles.blogInfo}`}>{author} {blogDate} </span>
            </Link>
        </Col>
    )
}
