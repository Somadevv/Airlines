import React from "react";
import styles from "./flightsearch.module.scss";

export const FlightSearch = () => {
  return (
    <div className={styles.flightSearch}>
      <div className={styles.flightSearch_tripTypes}></div>
      <div className={styles.flightSearch_options}></div>
    </div>
  );
};
