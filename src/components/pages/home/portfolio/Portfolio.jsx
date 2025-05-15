// import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Modal } from 'react-bootstrap'
import PortfolioItem from './PortfolioItem'
import styles from './Portfolio.module.css'
import { useState, useContext } from 'react'

import { DataContext } from '../../../contextApi/DataContext'
import PaginationComp from '../../../pagination/PaginationComp'


export default function Portfolio({ children, allDataShow }) {

    const { portfolio: { filtersMenu, portfolioItems } } = useContext(DataContext)



    let howManyListShow = allDataShow ? portfolioItems : portfolioItems.slice(0, 9)


    const [imgFilters, setImgFilters] = useState(howManyListShow)
    const [menuActive, setMenuActive] = useState('all')
    const [modalShow, setModalShow] = useState(false)
    const [imgShow, setImgShow] = useState()

    // for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [displayPerPage, setDisplayPerPage] = useState(9)

    const lastPagePagination = currentPage * displayPerPage
    const firstPagePagination = lastPagePagination - displayPerPage
    const currentPageDis = portfolioItems.slice(firstPagePagination, lastPagePagination)

    



    const handelClickFilter = (cate) => {
        const finalData = portfolioItems.filter((value) => {
            setMenuActive(cate)

            return (
                // cate == 'all' ?  portfolioItems: value.categories.includes(cate) 
                value.categories.includes(cate)

                // allDataShow? portfolioItems : value.categories.includes(cate)

            )
        })

        setImgFilters(finalData)

    }





    const handleShow = (img) => {
        setModalShow(true)
        setImgShow(img)
    }
    const handleClose = () => setModalShow(false)


    return (


        <section className={`${styles.sectionPadding} portfolio-section`} id="portfolio">
            <Container>
                <Row>
                    <Col md={12}>

                        <ul className={`${styles.projectTile} position-relative`}>
                            {filtersMenu.map((cateItem, ind, array) => {
                                return <li
                                    key={Math.random()}
                                    onClick={() => handelClickFilter(cateItem)}
                                    className={menuActive == cateItem ? `${styles.active} position-relative` : 'position-relative'}

                                >
                                    {cateItem.charAt(0).toUpperCase() + cateItem.slice(1)}
                                   <span className={`${styles.badgeActive} badge bg-secondary position-absolute`}>
                                        { menuActive=='all' ? portfolioItems.length : imgFilters.length}
                                    </span>
                                </li>
                            })}

                            <p className={styles.portTotal}>Total: {portfolioItems.length}</p>
                        </ul>



                        <Row className=" project-list wow fadeInUp" data-wow-delay=".8s">

                            {imgFilters.map((item) => {
                                const { categories, portfolioImg, title, tagline, hrefLink, id, workType } = item

                                return (
                                    <PortfolioItem
                                        key={Math.random()}
                                        categories={categories}
                                        portfolioImg={portfolioImg}
                                        title={title}
                                        tagline={tagline}
                                        hrefLink={hrefLink}
                                        handleShow={handleShow}
                                        id={id}
                                        workType={workType}
                                    />


                                )
                            })}


                            <Modal className='popupMedia' show={modalShow} onHide={handleClose}>
                                <Modal.Header closeButton />
                                <Modal.Body>
                                    <img src={imgShow} alt="" />
                                </Modal.Body>
                            </Modal>


                            {children}


                        </Row>
                    </Col>
                </Row>
            </Container>


        </section>
    )
}
