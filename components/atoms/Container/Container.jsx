import cn from "classnames";
import styles from "./container.module.scss";

export const Container = ({ children, className, type, style }) => {
  const classes = cn(styles.container, styles[`container_${type}`], className);

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
