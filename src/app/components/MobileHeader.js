import React from 'react'
import logo from '../../../public/favicon.png'
import styles from './MobileHeader.module.css'


function MobileHeader() {
  return (
    <div className={styles.mobileHeader}>
        <img src={logo.src} alt="Logo" className={styles.logo}/>
        <h1 className={styles.header}>Renova Massage</h1>
    </div>
  )
}

export default MobileHeader