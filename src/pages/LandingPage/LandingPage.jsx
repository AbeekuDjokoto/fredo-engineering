import { Header, NavigationBar, Main } from "../../components";

import classes from "./base.module.scss";

export const LandingPage = () => {
  return (
    <div className={classes.root}>
      <NavigationBar />
      <Header />
      <Main />
    </div>
  );
};
