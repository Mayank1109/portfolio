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
          <a href="https://www.linkedin.com/in/maycha1109">
            <LinkedInIcon />
          </a>
        </button>
      </div>
      <div className={classes.btn_dec}>
        <button className={colorClasses.btn}>
          <a href="https://instagram.com/m11since02?igshid=NGExMmI2YTkyZg==">
            <InstagramIcon />
          </a>
        </button>
      </div>
      <div className={classes.btn_dec}>
        <button className={colorClasses.btn}>
          <a href="https://github.com/Mayank1109">
            <GithubIcon />
          </a>
        </button>
      </div>
      <div className={classes.btn_dec}>
        <button className={colorClasses.btn}>
          <a href="mailTo:maycha1109@gmailcom">
            <GmailIcon />
          </a>
        </button>
      </div>
    </div>
  );
};

export default IconLinks;
