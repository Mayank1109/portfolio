import classes from "./lowerPage.module.css";
import About from "../Components/LowerComponents/about";
import Work from "../Components/LowerComponents/Work";
const LowerPage = () => {
  return (
    <div className={classes.lower}>
      <div className={classes.lower_left}>
        <Work />
      </div>
      <div className={classes.lower_right}>
        <About />
      </div>
    </div>
  );
};

export default LowerPage;
