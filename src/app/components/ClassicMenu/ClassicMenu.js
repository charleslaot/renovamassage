import Link from 'next/link'
import styles from './ClassicMenu.module.css'
import logo from '../../../../public/logo4.png'

function ClassicMenu() {
  return (    
    <ul className={styles.navbarMenu}>
        <img src={logo.src} alt="Logo" className={styles.logo}/>
        <div className={styles.navbarContainer}>
            <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/">
                    Home
                </Link>
            </li>
            <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/">
                    Services
                </Link>            
            </li>
            <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/">
                    Contact
                </Link>
            </li>
            <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/">
                    About
                </Link>
            </li>
        </div>
    </ul>    
  );
}

export default ClassicMenu;
