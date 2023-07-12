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
      <h2 className={classes.horizontalLine}>
        <span>What we offer</span>
      </h2>
      <div className="px-11">
        <div className={classes.dotted_container}>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>Apprentice Training in mechanical and electronics engineering</p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>On the job training in design and fabrication of machines</p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>
              On the job training in Computer Aided Draughting using Solid-works
              software
            </p>
          </div>
        </div>
      </div>
      <h2 className={classes.horizontalLine}>
        <span>What we produce</span>
      </h2>
      <div className="px-11">
        <div className={classes.dotted_container}>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>Liquid filling machine, manual and semi automatic</p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>
              Cassava processing machines (e.g. starch, glucose syrup, or
              chips/pellets)
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>Floating Fishmeal extruder, pelletizer, roaster</p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>
              Cassava grater , manual press, mechanical roasters, mechanical
              presses, mechanical sifters{" "}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>
              Grains processing machines. peanut de-huller, hammer mill , multi
              - purpose mill, plate mill, air classifier mill.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>Oil palm processing machine expellers, boilers,</p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>
              Herbal medicine production machines, filling machine, crushers
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>Activated charcoal production machines</p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>
              Dryers, flash dryer, spin flash dryer cabinet dryer, belt dryer,
              bin dryer, rotary dryers, turbo dryers
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>Industrial Waste processing machine</p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>Soap making machines, mixer, plodder, cutter</p>
          </div>
          <div className="flex items-center gap-1">
            <div className={classes.dotted_thing}></div>
            <p>Fruit processing machines </p>
          </div>
        </div>
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
            <h3>
              Fredo Engineering and Consultancy Services (FESC) is a specialized
              engineering technology enterprise that is engaged in a variety of
              engineering design, equipment manufacture, engineering
              installation and commissioning, technical staff training and so
              on.
            </h3>
          </div>
          <h1 className="text-red-500">Company Information</h1>
        </div>
        <div className={classes.greyBorder}></div>
      </div>
    </div>
  );
};
