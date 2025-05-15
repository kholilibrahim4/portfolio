
import styles from './SocialMedia.module.css'
import Link from '../link/Link'
import { DataContext } from '../contextApi/DataContext'
import { useContext } from 'react'



export default function SocialMedia() {
  const { socialMedia } = useContext(DataContext)
  return (
    <div className={styles.social}>

      {socialMedia.map((item, id) => {
        const { icon, link } = item
        return (
          <Link linkAdd={link} target="_blank" key={id}>
            <i className={icon}></i>
          </Link>
        )
      })}
    </div>
  )
}