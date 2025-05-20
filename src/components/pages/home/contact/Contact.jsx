import React,{useContext} from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import styles from './Contact.module.css'
import ContactInfo from './ContactInfo'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import PageTitle from '../../../pageTitle/PageTitle'
import Form from '../form/Form'

import {DataContext} from '../../../contextApi/DataContext'


export default function Contact() {
    
    const {contractInfo:{secTitle,location,email,phone,leaveMsg}} = useContext(DataContext)
    
    return (
        <section className={`${styles.contact} padtop_20`} id="contract">
            <Container>
                <SectionTitle
                    title={secTitle}
                    otherClasses='dleft top_120 bottom_30'
                />
                <Row>
                    <Col md={3} className="wow fadeInUp" data-wow-delay="0.3s">
                        <ContactInfo  />                        
                    </Col>

                    <Col md={9}>
                        <div className={`${styles.mdOffset2} form top_30 bottom_90 wow fadeInUp`} data-wow-delay="0.6s">
                            <PageTitle title={leaveMsg} />
                            <Form />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
