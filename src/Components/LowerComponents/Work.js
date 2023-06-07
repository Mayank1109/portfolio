import WorkCard from "../../UI/WorkCard";
import m1 from "../../Assets/1.png";
import m2 from "../../Assets/2.png";
import m3 from "../../Assets/3.png";
import classes from "./work.module.css";
import appContext from "../app_context";
import { useContext } from "react";

const projects = [
  {
    id: "p1",
    src: m1,
  },
  {
    id: "p2",
    src: m2,
  },
  {
    id: "p3",
    src: m3,
  },
];
const Work = () => {
  const ctx = useContext(appContext);

  const workHandler = () => {
    ctx.onWorkClick();
  };
  return (
    <div className={classes.work}>
      <div className={classes.heading}>
        <h3>Works</h3>
        <div onClick={workHandler}>
          <h4>
            <a href="https://github.com/Mayank1109">See All</a>
          </h4>
        </div>
      </div>
      <div className={classes.work_img}>
        {projects.map((pro) => (
          <WorkCard key={pro.id} src={pro.src} />
        ))}
      </div>
    </div>
  );
};

export default Work;
