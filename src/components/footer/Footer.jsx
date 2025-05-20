import React,{useContext} from 'react'
import { Container } from 'react-bootstrap'
import styles from './Footer.module.css'

import SocialMedia from '../socialMedia/SocialMedia'

import {DataContext} from '../contextApi/DataContext'

export default function Footer() {
    const {footer:{copyRight,createdBy}} = useContext(DataContext)
    
    return (
        <footer className={styles.footer}>
            <Container>                
                <SocialMedia />

                <p>
                    {copyRight}
                    <br />
                    {createdBy}
                </p>
            </Container>
        </footer>
    )
}
