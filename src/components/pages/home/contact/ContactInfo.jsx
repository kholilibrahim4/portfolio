import styles from './Contact.module.css'
import { DataContext } from '../../../contextApi/DataContext'
import { useContext } from 'react'




export default function ContactInfo() {
  const {contractInfo:{info}} = useContext(DataContext)
    return <ul className={`${styles.contactInfo}`}>
      {info.map((item,index)=>{
        return(
          <li key={index}>
            <i className={item.icon}></i>
            {item.desc}
          </li>
        )
      })}


    </ul>


}
