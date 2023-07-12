import classes from "./NavigationBar.module.scss";
import telephone from "../../assets/telephone.png";
import mail from "../../assets/mail.png";
import { Link } from "react-router-dom";
import hamburgerMenu from "../../assets/hamburger.svg";
import cx from "classnames";
import { useState } from "react";

export const NavigationBar = () => {
  const [open, setOpen] = useState(false);
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
          <img src="" alt="brand image" />
          <h3>Fredo Engineering</h3>
          <p>Engineering Excellence in Motion.</p>
        </div>
        <div className={classes.mobile} onClick={() => setOpen(!open)}>
          <figure>
            <img src={hamburgerMenu} alt="hamburger menu" />
          </figure>
          {open && (
            <div className={classes.dropdown}>
              <h1>This is a baller</h1>
            </div>
          )}
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
