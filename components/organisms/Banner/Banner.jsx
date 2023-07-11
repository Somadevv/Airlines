import React from "react";
import styles from "./banner.module.scss";

import { Container } from "@/components/atoms/Container/Container";

export const Banner = ({ title, bannerBackground, body, children }) => {
  return (
    <Container
      type="content"
      className={styles.banner}
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), url(${bannerBackground.src}) 80% center / cover no-repeat`,
      }}
    >
      <div className={styles.banner_cta}>
        <div className={styles.banner_cta_intro}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>

      {children && children}
    </Container>
  );
};
