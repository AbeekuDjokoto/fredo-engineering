import classes from "./NavigationBar.module.scss";
import telephone from "../../assets/telephone.png";
import mail from "../../assets/mail.png";
import { Link } from "react-router-dom";
import cx from "classnames";

export const NavigationBar = () => {
  const handleSkillsClick = (navigation) => {
    const skillsSection = document.getElementById(navigation);
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className={classes.root}>
      <div className={classes.nav__top} id="contact-us">
        <Link to="tel:0208219820">
          <img src={telephone} alt="telephone number" />
          <p>0208219820, 0249898346</p>
        </Link>
        <Link to="mail:fdjokoto@yahoo.com">
          <img src={mail} alt="mail to fredo-engineering" />
          <p>fdjokoto@yahoo.com</p>
        </Link>
      </div>
      <div className={classes.second__nav}>
        <div>
          <h3 className="text-[#F1811A]">
            FREDO ENGINEERING AND CONSULTANCY SERVICES
          </h3>
          <p className="text-white">
            Milling and Drying solutions to all Industries
          </p>
        </div>
        <div
          className={cx(
            classes.web,
            "flex gap-3 text-[var(--horizontalLine)] items-center"
          )}
        >
          <Link onClick={() => handleSkillsClick("services")}>Services</Link>
          <Link onClick={() => handleSkillsClick("projects")}>Projects</Link>
          <Link onClick={() => handleSkillsClick("clients")}>
            Recommendation
          </Link>
          <Link onClick={() => handleSkillsClick("contact-us")}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
