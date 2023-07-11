import React from "react";
import styles from "./flightsearch.module.scss";
import { Button } from "@/components/atoms/Button/Button";

export const FlightSearch = () => {
  return (
    <div className={styles.flightSearch}>
      <div className={styles.flightSearch_tripTypes}>
        <Button type="button" label="Return"></Button>
        <Button type="button" label="One way"></Button>
        <Button type="button" label="Multi-city"></Button>
        <input type="checkbox" className="toggle" checked />
      </div>
      <div className={styles.flightSearch_options}></div>
    </div>
  );
};
