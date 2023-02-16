import React from 'react'
import Link from 'next/link'
import styles from "./HeaderHero.module.css"

function Hero() {
  return (
    <section className={styles.section}>  
      <h1>Give yourself a moment <span>of relaxation</span></h1>      
      <Link href="/">Schedule an appointmen</Link>
    </section>
  )
}

export default Hero