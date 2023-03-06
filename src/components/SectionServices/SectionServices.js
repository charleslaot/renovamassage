import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./SectionServices.module.css";
import img1 from "../../assets/img27.jpeg";
import img2 from "../../assets/img28.jpeg";
import img3 from "../../assets/img29.jpeg";
import img4 from "../../assets/img30.jpeg";

function SectionServices() {
  const { t } = useTranslation();

  return (
    <section className={styles.sectionServices}>
      <div className={styles.header}>
        <h1>{t("services.header")}</h1> <br />
        <h2>
          Here is a wide range of services
          <br />
          <span>we provide</span>
        </h2>
        <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </p>
      </div>
      <div className={styles.cards_container}>
        <img src={img1} alt="Massage1" />
        <img src={img2} alt="Massage2" />
        <img src={img3} alt="Massage3" />
        <img src={img4} alt="Massage4" />
      </div>
    </section>
  );
}

export default SectionServices;
