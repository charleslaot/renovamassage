'use client'

import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import ClassicMenu from './ClassicMenu'
import MobileHeader from './MobileHeader'
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