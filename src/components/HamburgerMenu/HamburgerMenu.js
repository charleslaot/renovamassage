import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import { useTranslation } from 'react-i18next';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const { t } = useTranslation();

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
          <li onClick={toggleMenu}>
            <a href="#home">
              {t('menu.home')}
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#services">
              {t('menu.services')}
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#contact">
              {t('menu.contact')}
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#about">
              {t('menu.about')}
            </a>
          </li>
        </ul>        
      </nav>
    </div>
  );
}

export default HamburgerMenu;
