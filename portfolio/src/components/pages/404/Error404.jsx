import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './error404.module.css'

export default function Error404() {
    return (
        <div className={styles.overFlow}>
            <Container>
                <Row>
                    <Col>
                        <h1 className={`${styles.headingClass}`}>404</h1>
                    </Col>
                </Row>
            </Container>
            <div className={`${styles.bottomDiv} text-center`}>
                <Container>
                    <Row>
                        <Col ca>
                            <h2>Sorry, Page Not Found</h2>
                            <p>The page you requested could not be found</p>
                            <Link className='btn btn-info' to='/'>GO BACK HOME</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
