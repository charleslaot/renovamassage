import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./SectionHeader.module.css";
import { useTranslation } from "react-i18next";

function SectionHeader() {
  const { t } = useTranslation();

  return (
    <header className={styles.sectionHeader}>
      <NavBar />
      <section className={styles.hero}>
        <span>{t("hero.header")}</span> <br />
        <span>{t("hero.subheader")}</span>
        <br />
        <a href="/">
          <button>{t("hero.button")}</button>
        </a>
      </section>
    </header>
  );
}

export default SectionHeader;
