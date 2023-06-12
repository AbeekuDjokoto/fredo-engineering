import classes from "./NavigationBar.module.scss";
import telephone from "../../assets/telephone.png";
import mail from "../../assets/mail.png";
import { Link } from "react-router-dom";
import hamburgerMenu from "../../assets/hamburger.svg";

export const NavigationBar = () => {
  return (
    <nav className={classes.root}>
      <div className={classes.nav__top}>
        <Link to="tel:0208219820">
          <img src={telephone} alt="telephone number" />
          <p>0208219820</p>
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
        <div className="flex gap-3 text-[var(--horizontalLine)] items-center">
          <p>Services</p>
          <p>Projects</p>
          <p>Recommendation</p>
          <p>Contact Us</p>
        </div>
        <div>
          <figure>
            <img src={hamburgerMenu} alt="hamburger menu" />
          </figure>
        </div>
      </div>
    </nav>
  );
};
