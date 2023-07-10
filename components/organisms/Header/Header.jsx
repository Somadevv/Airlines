import React, { useEffect, useState } from "react";

import styles from "./header.module.scss";

import Image from "next/image";
import logo from "../../../public/assets/images/logos/alternative-airlines.jpg";
import menu from "../../../public/assets/icons/menu.svg";
import close from "../../../public/assets/icons/close.png";

// Navigation menu items,
import data from "../../../data/navigation.json";

export const Header = () => {
  const [menuEnabled, setMenuEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
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
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <Image src={logo} alt="Alternative Airlines" />
      </div>

      <div
        className={styles.header_navigation}
        onClick={isMobile && handleMenu}
      >
        {isMobile ? (
          <Image src={!menuEnabled ? menu : close} alt="Alternative Airlines" />
        ) : (
          <a href="/">Manage booking</a>
        )}
        {menuEnabled && (
          <div className={styles.header_navigation_menu}>
            {data.primary?.map((item) => (
              <ul key={item.label}>
                <li>{item.label}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
