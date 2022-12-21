import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import webLogo from "../../assets/logo.svg";
const Widget = () => {
  return (
    <div className={styles.page__container}>
      {/* <div className={styles.container}> */}
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
        currency="usd"
        background-color="#ffffff"
        locale="en"
      ></coingecko-coin-price-marquee-widget>
      {/* </div> */}
    </div>
  );
};

export default Widget;
