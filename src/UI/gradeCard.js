import classes from "./gradeCard.module.css";
const GradeCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.inner}>
        <h1>{props.main}</h1>
        <h4>
          {props.desc1} <br />
          {props.desc2}
        </h4>
      </div>
    </div>
  );
};

export default GradeCard;
