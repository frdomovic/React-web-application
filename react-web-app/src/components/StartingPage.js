import classes from './StartingPage.module.css';
import { Link } from "react-router-dom";

function StartingPage() {
  return (
    <body>
      <div className={classes.mainContainer}>
        <Link to="/UserStartPage">
          <button className={classes.btnKlijent}>
            <span className={classes.txtKlijent}>ulaz klijent</span>
          </button>
        </Link>
        <Link to="/WorkerLoginPage">
          <button className={classes.btnLogin}>
            <span className={classes.txtLogin}>prijava djelatnici</span>
          </button>
        </Link>
        <div className={classes.cloudShape}>
          <div className={classes.cs1}></div>
          <div className={classes.cs2}></div>
          <div className={classes.cs3}></div>
          <span className={classes.txtCloud}>Red u Red</span>
        </div>
      </div>
    </body>
  );
}

export default StartingPage;
