import classes from "./workerLP.module.css";
import showlogo from "./showlogo.png";
import { Link } from "react-router-dom";
import React from "react";

function WorkerLoginPage(elm) {
  
  const [show, setShow] = React.useState(false)
  return (
    <div className={classes.containerPage}>
      <span className={classes.titlePrijava}>Prijava za djelatnike </span>

      <div className={classes.circle1}></div>
      <div className={classes.circle2}></div>
      <div className={classes.circle3}></div>

      <div className={classes.name}></div>
      <div className={classes.name}></div>

      <input
        className={classes.titleKorisnickoime}
        type="text"
        id="username"
        name="fname"
        hint="Korisničko ime"
        placeholder="Korisničko ime"
      ></input>
      <div className={classes.underline}></div>
      <input
        className={classes.titlepass}
        type={show ? "text" : "password"}
        id="upassword"
        name="upassword"
        autoComplete={false}
        placeholder="Lozinka"
      ></input>
      <div className={classes.underline2}></div>

      <div className={classes.containerPW}>
        <img src={showlogo} alt="show password" onClick={() => setShow(!show)}>
        </img>
      </div>
      <Link to="/WorkerStartPage">
        <div className={classes.btnLogindiv}>
          <button className={classes.loginbtn}>NASTAVI</button>
        </div>
      </Link>

      <div className={classes.containerbottom}>
        <div className={classes.recoverydiv}>
          <span className={classes.txtForgot}>Zaboravljena </span>
          <span className={classes.txtRecover}>lozinka?</span>
        </div>
      </div>
    </div>
  );
}

export default WorkerLoginPage;
