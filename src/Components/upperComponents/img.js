import me from "../../Assets/me.jpg";
import classes from "./img.module.css";
const Img = () => {
  return (
    <>
      <img className={classes.change} src={me} />
    </>
  );
};

export default Img;
