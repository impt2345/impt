import React from "react";
import bubble from "../../assets/gbub.png";
import styles from "./styles.module.scss";
import Image from "next/image";
const Bubble = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
      <Image className={styles.img_style} src={bubble} alt="bubble_img" />
    </div>
  );
};

export default Bubble;
