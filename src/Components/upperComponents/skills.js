import classes from "./skills.module.css";

const Skills = () => {
  return (
    <div className={classes.skills}>
      <div className={classes.skill_tag}>Skills :</div>
      <div className={classes.skill_box}>
        <div className={classes.skill_info}>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </div>
        <div className={classes.skill_info}>
          <li>Redux</li>
          <li>RestAPIs</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
