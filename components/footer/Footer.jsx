import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import webLogo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className={styles.page__container}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo_style}
            src={webLogo}
            alt="app_img"
            //   objectFit="contain"
          />
        </div>
        <div className={styles.text}>
          <span>
            {" "}
            AI Tokenomics Limited company no. 700834 registered address Suite
            304, 9 Pembroke Street Upper, Dublin 2 DO2 KR83 Ireland.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
