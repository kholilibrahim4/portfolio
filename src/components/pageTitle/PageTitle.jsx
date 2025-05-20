import React from 'react'
import styles from './PageTitle.module.css'



export default function PageTitle({title}) {
    return (
        <div className={`${styles.pageTitle}`}>
            <h5>{title}</h5>
        </div>
    )
}
