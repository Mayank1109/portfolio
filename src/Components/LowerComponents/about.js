import classes from "./about.module.css";

const About = () => {
  return (
    <div className={classes.outer_about}>
      <div className={classes.about_head}>
        <h3>About</h3>
        <button>
          <a
            href="https://drive.google.com/file/d/1VM0sTm2VDdsdf-fFtYQVMjfi6nsoNO1X/view?usp=sharing"
            download
          >
            Resume
          </a>
        </button>
      </div>
      <div className={classes.inner_about}>
        <p>
          I am a front-end developer with a passion for creating clean ,
          maintainable and creative websites. I have a strong understanding of
          coding principles and work closely with designers to bring their
          designs to life. I've had an opportunity to work with a startup for 6
          months and striving to improve my skills and stay up-to-date to the
          latest trends.
        </p>
      </div>
    </div>
  );
};

export default About;
