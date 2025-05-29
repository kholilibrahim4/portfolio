import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './SeeOrReadMoreBtn.module.css'
import LinkComp from '../link/Link'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'


export default function SeeOrReadMoreBtn({ link, text }) {

    // converted each text first letter to uppercase
    let splitStr = text.toLowerCase().split(' ')
    let splitStrLength = splitStr.length
    for (let i = 0; i < splitStrLength; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)
    }
    let newSpliStr = splitStr.join(' ');



    return (
        <Col md={12}>
            <div className={`${styles.projectBtn} text-center top_45`}>
                <LinkComp linkAdd={link}>
                    {newSpliStr}
                    <FontAwesomeIcon icon={faAngleRight} className={`${styles.icon}`}/> 
                </LinkComp>
            </div>
        </Col>
    )
}
