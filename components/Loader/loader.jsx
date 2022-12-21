import React from "react";
import styles from "./styles.module.scss";
import FadeLoader from "react-spinners/FadeLoader";
const Spinner = ({ color, loading }) => {
  return (
    <div className={styles.container}>
      <FadeLoader
        color="#204B12"
        loading={loading}
        // size={500}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
