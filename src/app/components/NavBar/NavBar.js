'use client'

import React from 'react'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import ClassicMenu from '../ClassicMenu/ClassicMenu'
import MobileHeader from '../MobileHeader/MobileHeader'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <>
      <nav className={`${styles.navbar} ${styles.mobileMenu}`}>
        <HamburgerMenu />
        <MobileHeader />
      </nav>
      <nav className={`${styles.navbar} ${styles.desktopMenu}`}>
        <ClassicMenu />
      </nav>
    </>
    
  )
}

export default NavBar