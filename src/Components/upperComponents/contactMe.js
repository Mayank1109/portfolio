import classes from "./contactMe.module.css";
import appContext from "../app_context";
import { useContext } from "react";

const ContactMe = () => {
  const ctx = useContext(appContext);

  const contactHandler = () => {
    ctx.onContactClick();
  };
  return (
    <div className={classes.contact}>
      <h1>Feel free to reach out!!</h1>
      <div className={classes.btn_div} onClick={contactHandler}>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default ContactMe;
