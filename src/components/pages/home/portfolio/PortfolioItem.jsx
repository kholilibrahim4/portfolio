import React, { useState } from 'react'
import { Col, Modal } from 'react-bootstrap'
import styles from './Portfolio.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faLink } from '@fortawesome/free-solid-svg-icons'




export default function PortfolioItem({ categories, portfolioImg, title, tagline, hrefLink, handleShow, workType }) {

    let splitStr = categories.toLowerCase().split(' ')
    let splitStrLength = splitStr.length
    for (let i = 0; i < splitStrLength; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)
    }
   
    // remove word ('all') from portfolio item work type
    splitStr.filter((item)=>{
         if(item =='All'){
              return splitStr.pop()
        }
    })

    let newSpliStr = splitStr.join(', ');

    return (
        <>
            <Col md={4} sm={4} className={categories}>
                <div className={`${styles.singleProjectItem}`}>
                    <figure>
                        <img src={portfolioImg} alt="" />
                    </figure>
                    <div className={`${styles.projectOvellay}`}>
                        <a className="popup" onClick={() => handleShow(portfolioImg)}>
                            <FontAwesomeIcon icon={faPlus} />


                            {/* <i className="fa fa-plus"></i> */}
                        </a>
                        <a href={hrefLink} className={`${styles.siteLink}`} target="_blank">

                            <FontAwesomeIcon icon={faLink} />

                            {/*<i className="fa fa-link"></i>*/}
                        </a>
                        <h4>
                            {title}
                            <span> {tagline}
                                <br />
                                <span>
                                    {workType}{newSpliStr}
                                </span>
                            </span>
                        </h4>

                    </div>
                </div>
            </Col>

        </>
    )
}
