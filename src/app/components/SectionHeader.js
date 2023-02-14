import React from 'react'
import NavBar from './NavBar'
import HeaderHero from './HeaderHero'
import styles from './SectionHeader.module.css'

function SectionHeader() {
  return (
    <header className={styles.sectionHeader}>
        <NavBar />
        <HeaderHero />
    </header>
  )
}

export default SectionHeader