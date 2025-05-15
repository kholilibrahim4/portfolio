import React, {
    useState,
    useContext,
    useEffect
} from 'react'
import ServicesSingle from './ServicesSingle'
import styles from './Services.module.css'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { DataContext } from '../../../contextApi/DataContext'

/*import {
    faGear,
    faDesktop
} from '@fortawesome/free-solid-svg-icons'

*/



export default function Services() {

    const { services } = useContext(DataContext)

    const [owlItems,
        setOwlItems] = useState('3')

    function windowSize() {
        if (window.innerWidth < 600) {
            setOwlItems('1')
        } else if(window.innerWidth < 768) {
            setOwlItems('2')
        }else{
            setOwlItems('3')
        }
    }

    useEffect(() => {
        windowSize()
    }, [])



    window.addEventListener('resize', windowSize)

    return (
        <OwlCarousel className={`owl-theme ${styles.workAreas} top_120 wow fadeInUp `} loop margin={10} items={owlItems} autoplay={true} dots={false}>

            {services.map((item) => {
                return (
                    <ServicesSingle
                        key={Math.random()}
                        icon={item.icon}
                        title={item.title}
                        descri={item.desc}
                    />
                )
            })}
            {/*<ServicesSingle
            icon={faDesktop}
            icon={services.icon}
            title={services.title}
            descri={services.desc}
            />
        <ServicesSingle
            icon={faGear}
            title={'Branding Identity'}
            descri={'Cloud agency follows the latest design standards to deliver a beautiful and functional digital product.'}
            />*/}
        </OwlCarousel>
    )
}