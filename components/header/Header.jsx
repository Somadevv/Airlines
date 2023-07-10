import { useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "../../public/assets/images/logos/alternative-airlines.jpg";
import menu from "../../public/assets/icons/menu.svg";

export const Header = () => {
  const [menuEnabled, setMenuEnabled] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <Image src={logo} alt="Alternative Airlines" />
      </div>

      <div className={styles.header_navigation}>
        <Image src={menu} alt="Alternative Airlines" />
      </div>
    </div>
  );
};
