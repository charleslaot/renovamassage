import React from 'react'
import logo from '../../assets/logo5.png'
import styles from './MobileHeader.module.css'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'

function MobileHeader() {
  return (
    <div className={styles.mobileHeader}>
        <img src={logo} alt="Logo" className={styles.logo}/>  
        <LanguageSwitch />
    </div>
  )
}

export default MobileHeader