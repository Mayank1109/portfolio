import SkillData from "./skillData";
import Name from "./name";
import Img from "./img";
import classes from "./img.module.css";
const ImgaData = () => {
  return (
    <div className={classes.image}>
      <Img />
      <div className={classes.side}>
        <Name />
        <SkillData />
      </div>
    </div>
  );
};

export default ImgaData;
