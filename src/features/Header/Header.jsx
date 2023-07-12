import classes from "./Header.module.scss";
import headerImage from "../../assets/headerImage.png";
import cx from "classnames";

export const Header = () => {
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={cx(classes.textContent, "text-[var(--white)]")}>
          <h1 className={classes.title}>
            FREDO ENGINEERING & CONSULTANCY SERVICES
          </h1>
          <p className={classes.motto}>
            MILLING AND DRYING SOLUTIONS TO ALL INDUSTRIES
          </p>
        </div>
        <figure className={classes.headerImage}>
          <img src={headerImage} alt="" />
        </figure>
      </div>
    </div>
  );
};
