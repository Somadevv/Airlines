import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";
import { Container } from "@/components/atoms/Container/Container";

export const Banner = ({ title, bannerBackground, body, image, children }) => {
  const { src, alt, caption } = image;

  return (
    <Container
      type="content"
      className={styles.banner}
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%), url(${bannerBackground.src}) center bottom / cover no-repeat`,
      }}
    >
      <div className={styles.banner_cta}>
        <div className={styles.banner_cta_intro}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
        {src && <Image src={src} alt={alt} />}
        {caption && (
          <div className={styles.banner_cta_imageCaption}>{caption}</div>
        )}
      </div>

      {children && children}
    </Container>
  );
};
