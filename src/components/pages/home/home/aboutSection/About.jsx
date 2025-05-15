import React from 'react'
import { Container } from 'react-bootstrap'

import styles from './About.module.css'
import AboutContent from './AboutContent'
import AboutBottom from './AboutBottom'
import Services from '../../services/Services'


export default function About() {
  return (
    <section className={` ${styles.dgrayBg} padtop_120`} id="about">
      <div className={`${styles.about} ${styles.type1} padbot_120`}>
        <Container>
          <AboutContent />
          <Services />

        </Container>


        <AboutBottom />
      </div>
    </section>
  )
}
