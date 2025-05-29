import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import styles from './ScrollTop.module.css'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUpLong  } from '@fortawesome/free-solid-svg-icons'




export default function ScrollTop() {
    const [scrollTopActive, setScrollTopActive] = useState(false)
     
    function activeFun(){
        if(window.scrollY> 300){
            setScrollTopActive(true)
        }else{
            setScrollTopActive(false)
        }
    }

    window.addEventListener('scroll', activeFun)
    return (
        <div className={`${styles.scrollTopArea}`}>
            <HashLink smooth to="#home" className={scrollTopActive ? `${styles.scrollup} ${styles.scrollupActive}` : `${styles.scrollup} `}  >
                {/*^
                <i class="fa fa-long-arrow-up"></i>
                */}
                <FontAwesomeIcon icon={faUpLong} className={`${styles.faIcon}`} />
            </HashLink>
        </div>
    )
}
