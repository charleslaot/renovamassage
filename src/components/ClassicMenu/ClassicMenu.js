import styles from './ClassicMenu.module.css'
import logo from '../../assets/logo4.png'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

function ClassicMenu() {
  return (    
    <ul className={styles.navbarMenu}>
        <img src={logo} alt="Logo" className={styles.logo}/>
        <div className={styles.navbarContainer}>
            <li className={styles.navbarItem}>
                <a className={styles.navbarLink} href="#home">
                    Home
                </a>
            </li>
            <li className={styles.navbarItem}>
                <a className={styles.navbarLink} href="#service">
                    Services
                </a>            
            </li>
            <li className={styles.navbarItem}>
                <a className={styles.navbarLink} href="#contact">
                    Contact
                </a>
            </li>
            <li className={styles.navbarItem}>
                <a className={styles.navbarLink} href="#about">
                    About
                </a>
            </li>
        </div>
        <LanguageSwitch />
    </ul>    
  );
}

export default ClassicMenu;
