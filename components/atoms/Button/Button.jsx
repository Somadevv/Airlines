import React, { useState } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

export const Button = ({ type, label, onClick, className }) => {
  const [isActive, setIsActive] = useState(false);

  const classes = cn(styles.button, className, {
    [styles.active]: isActive,
  });

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
    onClick();
  };

  return (
    <button type={type} onClick={handleClick} className={classes}>
      {label}
    </button>
  );
};
