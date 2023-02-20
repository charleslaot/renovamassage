import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import { useTranslation, Trans } from 'react-i18next';


const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
};

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleMenu() {
    setIsOpen(!isOpen);
  }   

  const { i18n } = useTranslation();
  
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
          <div>
            {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
          <li onClick={toggleMenu}>
            <a href="#home">
              <Trans i18nKey="menu.home">
                Home
              </Trans>
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#services">
              <Trans i18nKey="menu.services">
                Services
              </Trans>
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#contact">
              <Trans i18nKey="menu.contact">
                Contact
              </Trans>
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#about">
              <Trans i18nKey="menu.about">
                About
              </Trans>
            </a>
          </li>
        </ul>        
      </nav>
    </div>
  );
}

export default HamburgerMenu;
