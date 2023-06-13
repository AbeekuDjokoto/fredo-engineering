import classes from "./Card.module.scss";
import PropTypes from "prop-types";

export const Card = (props) => {
  console.log(props);
  return (
    <div className={classes.root} key={props.id}>
      <div>
        <figure className="flex justify-center pt-4">
          <img src={props.img} alt={props.title} />
        </figure>
        <hr className={classes.horizontalRule} />
      </div>

      <h2 className={classes.title}>{props.title}</h2>
    </div>
  );
};

Card.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.object,
};
