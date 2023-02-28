import React from "react";
import styles from "./SectionServices.Module.css";
import { useTranslation } from "react-i18next";

function SectionServices() {
  const { t } = useTranslation();

  return (
    <section className={styles.sectionServices}>
      <span>Our Services</span> <br />
      <span>Here is a wide range of services</span> <br />
      <span>we provide</span>
      <p>
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English.
      </p>
    </section>
  );
}

export default SectionServices;
