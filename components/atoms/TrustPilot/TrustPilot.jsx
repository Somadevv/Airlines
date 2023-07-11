import React from "react";
import styles from "./trustpilot.module.scss";
import Image from "next/image";
import trustPilotImage from "../../../public/assets/images/trustpilot.png";

export const TrustPilot = ({ data }) => {
  return (
    <div className={styles.trustpilot}>
      <div className={styles.trustpilot_image}>
        <Image
          src={trustPilotImage}
          objectFit="cover"
          width={107}
          height={20}
          alt="TrustPilot"
        />
      </div>
      <div className={styles.trustpilot_statistics}>
        <div className={styles.trustscore}>
          TrustScore <span> {data && data.trustscore.score}</span>
        </div>
        <div className={styles.reviews}>
          <span>{data && data.reviews.count} </span> reviews
        </div>
      </div>
    </div>
  );
};
