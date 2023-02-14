import React from 'react'
import logo from '../../../public/logo5.png'
import styles from './MobileHeader.module.css'


function MobileHeader() {
  return (
    <div className={styles.mobileHeader}>
        <img src={logo.src} alt="Logo" className={styles.logo}/>        
    </div>
  )
}

export default MobileHeader