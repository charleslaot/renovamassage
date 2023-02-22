import React from 'react'
import styles from './NavBar.module.css'
import { useMediaQuery } from 'react-responsive'
import ClassicMenu from '../ClassicMenu/ClassicMenu'
import MobileHeader from '../MobileHeader/MobileHeader'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'


function NavBar() { 

  const MobileNav = () => {
    return (
      <>
        <HamburgerMenu />
        <MobileHeader />
      </>
    );
  }

  const ClassicNav = () => {
    return (
      <>
        <ClassicMenu />        
      </>
    );
  }
  
  const isMobile = useMediaQuery({query: '(max-width: 769px)'})  
  const Menu = isMobile ? MobileNav : ClassicNav;  
  
  return (
    <nav className={styles.navbar}>
      <Menu />
      <LanguageSwitch />
    </nav>  
  )
}

export default NavBar