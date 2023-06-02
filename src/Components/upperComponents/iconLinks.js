import colorClasses from "../../UI/colorChange.module.css";
import classes from "./iconsLinks.module.css";
import LinkedInIcon from "../../UI/LinkedInIcon";
import InstagramIcon from "../../UI/instagramIcon";
import GithubIcon from "../../UI/githubIcon";
import GmailIcon from "../../UI/GmailIcon";
const IconLinks = () => {
  return (
    <div className={classes.icon_outer}>
      <div className={classes.btn_dec}>
        <button className={colorClasses.btn}>
          <LinkedInIcon />
        </button>
      </div>
      <div className={classes.btn_dec}>
        <button className={colorClasses.btn}>
          <InstagramIcon />
        </button>
      </div>
      <div className={classes.btn_dec}>
        <button className={colorClasses.btn}>
          <GithubIcon />
        </button>
      </div>
      <div className={classes.btn_dec}>
        <button className={colorClasses.btn}>
          <GmailIcon />
        </button>
      </div>
    </div>
  );
};

export default IconLinks;
