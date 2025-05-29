
import React, {useState,useContext, useEffect} from 'react'

import styles from './HomeHero.module.css'
import SocialMedia from '../../../../socialMedia/SocialMedia'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown  } from '@fortawesome/free-solid-svg-icons'
import {useTypewriter,Cursor } from 'react-simple-typewriter'
import {DataContext} from '../../../../contextApi/DataContext'
import { HashLink } from 'react-router-hash-link'


export default function HomeHero() {
    const {heroText} = useContext(DataContext)
    
    
    const [windowSizeActive,setWindowSizeActive]=useState(false)
    useEffect(()=>{
        windowSize()
    },[])
    
    // this for mobile line break
    function windowSize(){
        if(window.innerWidth<768){
            setWindowSizeActive(true)
        }else{
            setWindowSizeActive(false)
        }
    }
    window.addEventListener('resize',windowSize)
    
    
    
    const [text] = useTypewriter({
        words:heroText,
        loop:{},
        typeSpeed:150,
            deleteSpeed:70,
            delaySpeed:2000,
    })
    return (

        // <!--HOME-->
        <section className={styles.home} id="home">
            <div className={styles.homeContent}>
                <div className="container">
                    <h1>I'm {' '}{windowSizeActive? <br/> :''}
                    <span className={styles.element}>
                    {text}
                   
                    </span>
                     <Cursor cursorColor='#DFDFDF' cursorStyle='_'/>
                    </h1>
                    
                   <SocialMedia />
                    
                   
                    <HashLink smooth className={`${styles.homeDown} ${styles.bounce}`} to="#about">
                     <FontAwesomeIcon icon={faAngleDown}/>
                         
                     </HashLink>
                    {/*<FontAwesomeIcon icon={faEnvelope}/>*/}
                </div>
            </div>
  
                       
            
            <svg className={`${styles.diagonal} ${styles.homeLeft}`} width="21%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 100 L100 100 L0 10 Z"></path>
            </svg>
            <svg className={`${styles.diagonal} ${styles.homeRight}`} width="80%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 100 L100 100 L100 10 Z"></path>
            </svg>
        </section>
    )
}




/*import styles from './HomeHero.module.css'
import {useTypewriter,Cursor } from 'react-simple-typewriter'





export default function HomeHero() {
    return (

        // <!--HOME-->
        <section className={styles.home} id="home">
            <div className={styles.homeContent}>
                <div className="container">
                    <h1>I'm <span className={styles.element}>Nayan</span></h1>
                    <div className={styles.social}>
                        <a href="https://www.facebook.com/md.nayan.h" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/kholilibrahim41" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.behance.net/kholilibra321f" target="_blank"><i className="fa fa-behance" aria-hidden="true"></i></a>
                        <a href="https://codepen.io/mdnayan" target="_blank"><i className="fa fa-codepen" aria-hidden="true"></i></a>
                        <a href="https://dribbble.com/mdnayan" target="_blank"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                    </div>
                    <a className={`${styles.homeDown} ${styles.bounce}`} href="#about">^<i className="fa fa-angle-down"></i></a>
                </div>
            </div>
            <svg className={`${styles.diagonal} ${styles.homeLeft}`} width="21%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 100 L100 100 L0 10 Z"></path>
            </svg>
            <svg className={`${styles.diagonal} ${styles.homeRight}`} width="80%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 100 L100 100 L100 10 Z"></path>
            </svg>
        </section>
    )
}
*/