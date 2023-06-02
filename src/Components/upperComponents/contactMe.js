import classes from "./contactMe.module.css";
const ContactMe = () => {
  return (
    <div className={classes.contact}>
      <h1>Feel free to reach out!!</h1>
      <div className={classes.btn_div}>
        <button>
          <a href="mailTo:maycha1109@gmail.com">Contact Me</a>
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
