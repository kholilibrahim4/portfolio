import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import styles from './OtherPageNav.module.css'
import { Link } from 'react-router-dom'


export default function OtherPageNav({pageTitle}) {
  return (
    <section id="home">
        <div className={`${styles.homeBack}`}>
            <Container>
                <Row>
                    <Col md={12}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>{pageTitle}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}
