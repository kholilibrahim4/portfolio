import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Services.module.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ServicesSingle({icon, title, descri}) {
    return (
        <Col md={12} className={`${styles.area} ${styles.item}`}>
            <div className={`${styles.icon}`}> 
                <i className={`${styles.faIcon} ${icon}`}></i>
            </div>
            <div className={`${styles.text}`}>
                <h6>{title}</h6>
                <p>{descri}</p>
            </div>
        </Col>
    )
}
