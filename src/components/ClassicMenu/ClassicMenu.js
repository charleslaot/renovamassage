import logo from '../../assets/logo4.png'
import styles from './ClassicMenu.module.css'
import { useTranslation } from 'react-i18next';

function ClassicMenu() {

  const { t } = useTranslation();

  return (    
    <ul className={styles.navbarMenu}>
        <img src={logo} alt="Logo" className={styles.logo}/>
        <div className={styles.navbarContainer}>
            <li className={styles.navbarItem}>
                <a className={styles.navbarLink} href="#home">
                    {t('menu.home')}
                </a>
            </li>
            <li className={styles.navbarItem}>
                <a className={styles.navbarLink} href="#services">
                    {t('menu.services')}                   
                </a>            
            </li>
            <li className={styles.navbarItem}>
                <a className={styles.navbarLink} href="#contact">
                    {t('menu.contact')}
                </a>
            </li>
            <li className={styles.navbarItem}>
                <a className={styles.navbarLink} href="#about">
                    {t('menu.about')}
                </a>
            </li>
        </div>        
    </ul>    
  );
}

export default ClassicMenu;
