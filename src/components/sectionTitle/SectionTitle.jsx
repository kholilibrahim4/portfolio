import React from 'react'
import styles from './SectionTitle.module.css'

export default function SectionTitle({title, otherClasses}) {
  return (
    <div className={`${styles.sectionTitle} ${otherClasses}`}>
      <h2 >{title}</h2>
    </div>
  )
}
