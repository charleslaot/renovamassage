import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeaderHero from '../HeaderHero/HeaderHero'
import styles from './SectionHeader.module.css'

function SectionHeader() {
  return (
    <header className={styles.sectionHeader}>
        <NavBar />
        
    </header>
  )
}

export default SectionHeader