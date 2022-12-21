import Footer from "../components/footer/Footer";
import Table from "../components/table/Table";
import styles from "./styles.module.scss";
import Image from "next/image";
import bubble from "../assets/gbub.png";
import Banner from "../components/banner/Banner";
import Payment from "../components/payment/payment";
import Widget from "../components/head/head";
import Head from "next/head";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IMPT Token Official Arbitrage</title>
        <meta name="description" content=">IMPT Token Official Arbitragex" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
      </Head>
      <Widget />
      <Banner />
      <Payment />
      <Table />
      <div className={styles.bubbles}>
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

      <div className={styles.FC}>
        <Footer />
      </div>
    </div>
  );
}
