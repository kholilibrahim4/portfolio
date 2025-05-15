import React,{useContext} from 'react'
import { Container, Row } from 'react-bootstrap'
import BlogItem from './BlogItem'
import styles from './Blog.module.css'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import {DataContext} from '../../../contextApi/DataContext'
import PaginationComp from '../../../pagination/PaginationComp'


export default function Blog({children,allDataShow}) {
    const {blogs:{secTitle,blogItems}} = useContext(DataContext)
    
        let howManyListShow = allDataShow ? blogItems : blogItems.slice(0, 3)

    return (
        <section className={`${styles.blog}`} id="work">
            <Container>
               
                    <SectionTitle title={secTitle} otherClasses='dright padtop_120 bottom_45' />
                    <Row className="bottom_90">
                        {howManyListShow.map((item, index) => {
                            const { title, blogImg, descr, blogDate,author } = item
                            return (
                                <BlogItem
                                    key={Math.random()}
                                    title={title}
                                    blogImg={(blogImg)}
                                    descr={descr}
                                    blogDate={blogDate}
                                    author={author}
                                />
                            )
                        })}

                        {children}
                        <svg className={`${styles.diagonalGray}`} width="100%" height="170" viewBox="0 0 100 102" preserveAspectRatio="none">
                            <path d="M0 0 L70 100 L100 0 Z"></path>
                        </svg>

                    </Row>

                        {/* {allDataShow && <PaginationComp />} */}
                    
                </Container>
        </section>
    )
}
