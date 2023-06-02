import Skills from "./skills";
import IconLinks from "./iconLinks";
import classes from "./skills.module.css";
const SkillData = () => {
  return (
    <div className={classes.outer_skill}>
      <div className={classes.skill_icon}>
        <Skills />
        <IconLinks />
      </div>
      <div className={classes.copyright}>
        <p>This Project is copyright of Mayank Chauhan</p>
      </div>
    </div>
  );
};

export default SkillData;
