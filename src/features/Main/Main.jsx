import { Card } from "../../components/Card";
import classes from "./Main.module.scss";
import { projects, recommendations } from "../../mocks/data";
import { RecommendationCard } from "../../components";

export const Main = () => {
  return (
    <div className={classes.root} id="projects">
      <h2 className={classes.horizontalLine}>
        <span>PROJECTS</span>
      </h2>
      <div className="flex flex-wrap gap-y-14 gap-x-8 justify-center pt-14 pb-14">
        {projects.map((data) => {
          return <Card key={data?.id} {...data} />;
        })}
      </div>
      <h2 className={classes.horizontalLine} id="clients">
        <span>HAPPY CLIENTS</span>
      </h2>
      <div className="flex flex-wrap gap-y-14 gap-x-8 justify-center pt-14 pb-14">
        {recommendations.map((data) => {
          return <RecommendationCard key={data?.id} {...data} />;
        })}
      </div>
      <div className=" relative flex flex-col items-center">
        <div className={classes.cardWithText}>
          <div className="text-center">
            <h3>Поставляємо запасні частини за індивідуальним замовленням</h3>
            <h4>згідно з технічною документацією Замовника</h4>
          </div>
          <h1 className="text-red-500">
            Вага вироблених виливків від 5 до 2000 кг.
          </h1>
        </div>
        <div className={classes.greyBorder}></div>
      </div>
    </div>
  );
};
