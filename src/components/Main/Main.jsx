import { Card } from "../Card";
import classes from "./Main.module.scss";
import { projects } from "../../mocks/data";

export const Main = () => {
  return (
    <div className={classes.root}>
      <h2 className={classes.horizontalLine}>
        <span>PROJECTS</span>
      </h2>
      <div className="grid grid-cols-2 gap-14">
        {projects.map((data) => {
          return <Card key={data?.id} {...data} />;
        })}
      </div>
    </div>
  );
};
