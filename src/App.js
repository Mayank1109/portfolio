import classes from "./App.module.css";
import UpperPage from "./Pages/upperPage";
import LowerPage from "./Pages/lowerPage";
function App() {
  return (
    <div className={classes.complete}>
      <div className={classes.upper}>
        <UpperPage />
      </div>
      <div className={classes.lower}>
        <LowerPage />
      </div>
    </div>
  );
}

export default App;
