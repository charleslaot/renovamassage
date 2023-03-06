import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./SectionPricing.module.css";

function SectionPricing() {
  const { t } = useTranslation();

  return (
    <section className={styles.sectionPricing}>
      <div className={styles.header}>
        <span>{t("pricing.header")}</span> <br />
        <span>Our Price Table</span>
      </div>
      <div className={styles.cards_container}>
        <div className={styles.card}>
          <div className={styles.top}>
            <p>Basic</p>
            <p>
              For the beguinners <br />
              <span>$100</span>
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottom_left}>
              <ul>
                <li>Relaxing Massage</li>
                <li>Body Polish</li>
                <li>Signature Finish</li>
                <li>Massage Lavander</li>
                <li>Massage Stone</li>
              </ul>
            </div>
            <div className={styles.bottom_right}>
              <ul>
                <li>$10</li>
                <li>$25</li>
                <li>$68</li>
                <li>$47</li>
                <li>$56</li>
              </ul>
            </div>
          </div>
          <a href="/" className={styles.bottom_btn}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionPricing;
