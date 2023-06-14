import classes from "./base.module.scss";
import PropTypes from "prop-types";

export const RecommendationCard = (props) => {
  return (
    <div className={classes.root} key={props.id}>
      <div className="flex flex-col gap-5">
        <h3 className={classes.name}>{props.name}</h3>
        <h3 className={classes.paragraphy}>{props.paragraphy}</h3>
      </div>
      <div className={classes.textBg}>
        <h2 className={classes.title}>{props.fullName}</h2>
      </div>
    </div>
  );
};

RecommendationCard.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.object,
};
