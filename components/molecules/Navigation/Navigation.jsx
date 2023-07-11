import React, { useState } from "react";

import styles from "./navigation.module.scss";

const NavigationItem = ({ item }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (item) => {
    setActiveDropdown(activeDropdown === item.label ? null : item.label);
  };

  const dropdownIconClass = item.sublinks
    ? activeDropdown === item.label
      ? styles.dropdownIcon_disabled
      : styles.dropdownIcon_enabled
    : "";
  return (
    <li
      key={item.label}
      className={dropdownIconClass}
      onClick={() => item.sublinks && handleDropdownClick(item)}
    >
      {item.label}
      {item.sublinks && activeDropdown === item.label && (
        <ul className={styles.dropdown_container}>
          {item.sublinks.map((link, index) => (
            <li key={index}>
              <a href={item.url}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export const Navigation = ({ links }) => {
  return (
    <ul className={styles.navigation}>
      {links.primary?.map((link) => (
        <NavigationItem item={link} key={link.url} />
      ))}
    </ul>
  );
};
