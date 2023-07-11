import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./header.module.scss";

import { Container } from "../../atoms/Container/Container";
import logo from "../../../public/assets/images/logos/alternative-airlines.jpg";
import menu from "../../../public/assets/icons/menu.svg";
import close from "../../../public/assets/icons/close.png";

import { Navigation } from "../../molecules/Navigation/Navigation";

import homeLinks from "../../../data/navigation.json";

export const Header = () => {
  const [menuEnabled, setMenuEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1439);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenu = () => {
    setMenuEnabled(!menuEnabled);
  };

  return (
    <Container type="global" className={styles.header}>
      <div className={styles.header_logo}>
        <Image src={logo} alt="Alternative Airlines" />
      </div>
      {(!isMobile || (isMobile && menuEnabled)) && (
        <div className={styles.header_navigation_menu}>
          <Navigation links={homeLinks} isMobile={isMobile} />
        </div>
      )}
      <div
        className={styles.header_navigation}
        onClick={(isMobile && handleMenu) || null}
      >
        {isMobile ? (
          <Image src={!menuEnabled ? menu : close} alt="Alternative Airlines" />
        ) : (
          <a href="/">Manage booking</a>
        )}
      </div>
    </Container>
  );
};
