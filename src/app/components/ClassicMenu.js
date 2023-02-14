import Link from 'next/link';
import styles from './ClassicMenu.module.css';

function ClassicMenu() {
  return (    
    <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/">
            Home
            </Link>
        </li>
        <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/services">
                Services
            </Link>            
        </li>
        <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/contact">
                Contact Us
            </Link>
        </li>
        <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/about">
                About
            </Link>
        </li>
    </ul>    
  );
}

export default ClassicMenu;
