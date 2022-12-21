import React from "react";
import styles from "./styles.module.scss";
import webLogo from "../../assets/ic.svg";
import Image from "next/image";
import { FaGift } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { RxDoubleArrowRight } from "react-icons/rx";
const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner_container}>
        <div className={styles.instruction}>
          <div className={styles.specialOffer}>
            <h2>
              <FcIdea className={styles.h2Icon} />
              SPECIAL REWARD
            </h2>
            <li>
              <FaGift className={styles.liGift} />{" "}
              <span> 200,000 IMPT + = 30% BONUS</span>{" "}
            </li>
            <li>
              {" "}
              <FaGift className={styles.liGift} />{" "}
              <span> 300,000 IMPT + = 30% BONUS</span>{" "}
            </li>
            <li>
              {" "}
              <FaGift className={styles.liGift} />{" "}
              <span> 500,000 IMPT + = 40% BONUS</span>{" "}
            </li>
            <li>
              {" "}
              <FaGift className={styles.liGift} />{" "}
              <span> 1,000,000 IMPT + = 50% BONUS</span>{" "}
            </li>
            <li>
              {" "}
              <FaGift className={styles.liGift} />{" "}
              <span> 1,500,000 IMPT + = 50% BONUS</span>{" "}
            </li>
            <li>
              {" "}
              <FaGift className={styles.liGift} />{" "}
              <span> 2,000,000 IMPT + = 50% BONUS</span>{" "}
            </li>
          </div>
          <div className={styles.transaction}>
            <h2>
              {" "}
              <FcIdea className={styles.h2Icon} />
              How to Participate
            </h2>
            <li>
              <RxDoubleArrowRight className={styles.h2Icon} />
              <span>
                If you send 50,000 IMPT, you will be IMPT 75,000 IMPT back.
              </span>
            </li>
            <li>
              <RxDoubleArrowRight className={styles.h2Icon} />
              <span>
                If you send 100,000 IMPT, you will be IMPT 150,000 IMPT back.
              </span>
            </li>
            <li>
              <RxDoubleArrowRight className={styles.h2Icon} />
              <span>
                If you send 200,000 IMPT, you will be IMPT 300,000 IMPT back.
              </span>
            </li>
            <li>
              <RxDoubleArrowRight className={styles.h2Icon} />
              <span>
                If you send 300,000 IMPT, you will be IMPT 450,000 IMPT back
              </span>
            </li>
            <li>
              <RxDoubleArrowRight className={styles.h2Icon} />
              <span>
                If you send 500,000 IMPT, you will be IMPT 750,000 IMPT back
              </span>
            </li>
            <li>
              <RxDoubleArrowRight className={styles.h2Icon} />
              <span>
                If you send 1,000,000 IMPT, you will be IMPT 1,500,000 IMPT
                back.
              </span>
            </li>
            <li>
              <RxDoubleArrowRight className={styles.h2Icon} />
              <span>
                If you send 1,500,000 IMPT, you will be IMPT 2,250,000 IMPT back
              </span>
            </li>
          </div>
        </div>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.logo_style}
            src={webLogo}
            alt="app_img"
            //   objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
