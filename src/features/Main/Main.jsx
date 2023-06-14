import { Card } from "../../components/Card";
import classes from "./Main.module.scss";
import { projects, recommendations } from "../../mocks/data";
import { RecommendationCard } from "../../components";

export const Main = () => {
  return (
    <div className={classes.root}>
      <h2 className={classes.horizontalLine}>
        <span>PROJECTS</span>
      </h2>
      <div className="flex flex-wrap gap-y-14 gap-x-8 justify-center pt-14 pb-14">
        {projects.map((data) => {
          return <Card key={data?.id} {...data} />;
        })}
      </div>
      <h2 className={classes.horizontalLine}>
        <span>HAPPY CLIENTS</span>
      </h2>
      <div className="flex flex-wrap gap-y-14 gap-x-8 justify-center pt-14 pb-14">
        {recommendations.map((data) => {
          return <RecommendationCard key={data?.id} {...data} />;
        })}
      </div>
    </div>
  );
};
