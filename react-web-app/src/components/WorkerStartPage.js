import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

import classes from "../css/workerStartPage.module.css";

function WorkerStartPage() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory()
  async function handleLogout() {
    setError('')
    try{
        await logout()
        history.push('/')
    }catch{
        setError('Failed to log out')
    }
  }

  return (
    <div className={classes.pageContainer}>
      <span className={classes.usernameWorker}>DJELATNIK:  {currentUser.email}</span>
      <Button className={classes.btnExit} onClick={handleLogout}>
        <span className={classes.btnExitTxt}>IZLAZ</span>
      </Button>

      <div className={classes.name}></div>
      <div className={classes.v20_225}></div>
      <span className={classes.v20_226}>VAŠ ŠALTER : </span>
      <span className={classes.v20_227}>S2</span>
      <span className={classes.v20_228}>U REDU</span>
      <span className={classes.v20_229}>POSLUŽUJEM</span>
      <div className={classes.name}></div>
      <div className={classes.name}></div>

      <div className={classes.v20_233}></div>

      <div className={classes.v20_234}></div>
      <div className={classes.v20_235}></div>

      <button className={classes.btnNext}>DALJE</button>

      <span className={classes.v20_240}>A153 A512 A157 A34 A87</span>
      <span className={classes.v20_241}>A105</span>
      <span className={classes.v20_242}>PROSJEĆNO VRIJEME POSLUŽIVANJA</span>
      <div className={classes.v20_243}></div>
      <div className={classes.v20_246}></div>
      <div className={classes.v20_247}></div>
      <div className={classes.v20_249}></div>
      <div className={classes.v20_250}></div>
      <div className={classes.v20_251}></div>
      <span className={classes.v20_253}>Odjel A: 10min</span>
      <span className={classes.v20_254}>Odjel B: 7min</span>
      <span className={classes.v20_255}>Odjel C: 12min</span>
      <span className={classes.v20_256}>Odjel D: 3min</span>
      <span className={classes.v20_257}>Odjel E: 13min</span>
      <span className={classes.v20_258}>Odjel F: 5min</span>
    </div>
  );
}

export default WorkerStartPage;
