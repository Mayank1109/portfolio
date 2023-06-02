import classes from "./headline.module.css";

const Headline = () => {
  return (
    <div className={classes.headline}>
      <div className={classes.my}>
        <h3>My</h3>
      </div>
      <div>
        <h3>Portfolio</h3>
      </div>
    </div>
  );
};

export default Headline;
