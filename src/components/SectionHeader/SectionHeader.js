import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./SectionHeader.module.css";

function SectionHeader() {
  return (
    <header className={styles.sectionHeader}>
      <NavBar />
      <section className={styles.hero}>
        {/*<h1>Give yourself a moment <span>of relaxation</span></h1>      
          <a href="#">Schedule an appointmen</a>*/}
      </section>
    </header>
  );
}

export default SectionHeader;
