import classes from "./WorkCard.module.css";

const WorkCard = (props) => {
  return (
    <div className={classes.work}>
      <img src={props.src} key={props.id} />
    </div>
  );
};

export default WorkCard;
