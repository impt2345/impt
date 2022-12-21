import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import webLogo from "../../assets/qr.jpeg";
import Spinner from "../Loader/loader";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
const Payment = () => {
  const [value, setValue] = useState(
    "0x47E4AA46603b101D9eB5D19F9126c48EcbCb9f99"
  );

  const [copied, setCopied] = useState(false);
  const onCopy = React.useCallback(() => {
    setCopied(true);
    toast.success("copied to clipboard");
  }, []);
  return (
    <div className={styles.payment__container}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.textT}>
            <h2>Payment Address</h2>
            You can send <span>IMPT</span> to the following address:
            <span>0x47E4AA46603b101D9eB5D19F9126c48EcbCb9f99</span>
            <CopyToClipboard onCopy={onCopy} text={value}>
              <button>Copy Address to clipboard</button>
            </CopyToClipboard>
          </div>

          <div className={styles.barCode}>
            <Image
              className={styles.logo_style}
              src={webLogo}
              alt="bar_img"
              // objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.loader}>
          <Spinner />
          <span>Waiting for payment</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
