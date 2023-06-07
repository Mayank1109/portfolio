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
        {/* <p>Work Experience</p> */}
        <div>
          <h3>Software Developer Intern</h3>
          <h4>Noetic LogistieX Pvt. Ltd.</h4>
          <h5>1/10/2021 - 31/03/2022</h5>
        </div>
        <div>
          <h3>Project Manager Intern</h3>
          <h4>Tann Mann Foundation - NGO</h4>
          <h5>10/2022 - 11/2022</h5>
        </div>
      </div>
    </div>
  );
};

export default SkillData;
