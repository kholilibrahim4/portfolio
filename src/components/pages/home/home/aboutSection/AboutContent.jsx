import React, {useContext} from 'react'


import { Col, Row } from 'react-bootstrap'
// import aboutImg from '../../../../../../public/about.jpg'
// import aboutImg from '/about.jpg'

import styles from './About.module.css'

import {DataContext} from '../../../../contextApi/DataContext'



export default function AboutContent() {
    const {about:{title,aboutImg,desc}} = useContext(DataContext)
    
    return (
        <Row>
            <Col md={4} sm={12} className={`${styles.aboutImage} top_30 wow fadeInUp`} data-wow-delay="0.4s">
                <img src={aboutImg} alt="" />
            </Col>
            <Col md={7} sm={12} className={`${styles.mdOffset1} ${styles.aboutText} wow fadeInUp`} data-wow-delay="0.6s">
                <div className={`${styles.sectionTitle} dleft bottom_30`}>
                    <h2>{title}</h2>
                </div>
                {desc.map((item)=>{
                    return <p key={Math.random()}>{item}</p>
                })}
                
                
            </Col>
        </Row>
    )
}
