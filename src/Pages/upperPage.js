import Grades from "../Components/upperComponents/grades";
import Headline from "../Components/upperComponents/headline";
import classes from "./upperPage.module.css";
import ContactMe from "../Components/upperComponents/contactMe";
import ImgaData from "../Components/upperComponents/imgaData";
const UpperPage = () => {
  return (
    <div className={classes.upper}>
      <div className={classes.upper_left}>
        <ContactMe />
        <div className={classes.grades}>
          <Grades />
        </div>
      </div>
      <div className={classes.upper_right}>
        <Headline />
        <ImgaData />
      </div>
    </div>
  );
};

export default UpperPage;
