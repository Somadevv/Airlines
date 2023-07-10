import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./header.module.scss";

import { Container } from "../../atoms/Container/Container";
import logo from "../../../public/assets/images/logos/alternative-airlines.jpg";
import menu from "../../../public/assets/icons/menu.svg";
import close from "../../../public/assets/icons/close.png";

// Navigation menu items,
import data from "../../../data/navigation.json";

export const Header = () => {
  const [menuEnabled, setMenuEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1439); // Adjust the breakpoint as needed
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
  const handleDropdownClick = (item) => {
    if (activeDropdown === item.label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item.label);
    }
  };
  return (
    <Container type="global" className={styles.header}>
      <div className={styles.header_logo}>
        <Image src={logo} alt="Alternative Airlines" />
      </div>
      <div className={styles.header_navigation_menu}>
        {(!isMobile || (isMobile && menuEnabled)) && (
          <ul>
            {data.primary?.map((item) => (
              <li
                key={item.label}
                className={item.sublinks && styles.dropdownIcon}
                onClick={() => item.sublinks && handleDropdownClick(item)}
              >
                {item.label}
                {item.sublinks && activeDropdown === item.label && (
                  <ul className={styles.dropdown_container}>
                    {item.sublinks.map((dropdownItem, index) => (
                      <li key={index}>
                        <a href={item.url}>{dropdownItem}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
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
      </div>
    </Container>
  );
};
