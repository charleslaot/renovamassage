import { useState } from 'react';
import styles from './HamburgerMenu.module.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }  

  return (
    <div className={styles.hamburgerMenu}>
      <button className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          <span className={styles.closeIcon}>X</span>
        </button>
        <ul>
          <li onClick={toggleMenu}><a href="#">Home</a></li>
          <li onClick={toggleMenu}><a href="#SectionHero">Services</a></li>
          <li onClick={toggleMenu}><a href="#">Contact</a></li>
          <li onClick={toggleMenu}><a href="#">About</a></li>
        </ul>        
      </nav>
    </div>
  );
}

export default HamburgerMenu;
