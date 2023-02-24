import React from "react";
import styles from "./NavBar.module.css";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "../MobileMenu/MobileMenu";
import ClassicMenu from "../ClassicMenu/ClassicMenu";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const Menu = isMobile ? MobileMenu : ClassicMenu;

  return (
    <nav className={styles.navbar}>
      <Menu />
      <LanguageSwitch className={styles.switch} />
    </nav>
  );
}

export default NavBar;
