'use client'

import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import ClassicMenu from './ClassicMenu'
import styles from './NavBar.module.css'


function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.mobile}>
        <HamburgerMenu />
      </div>
      <div className={styles.desktop}>
        <ClassicMenu />
      </div>
    </nav>
    
  )
}

export default NavBar