import React, { useRef, useState } from "react";
import { Form,Button, Alert} from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

import classes from "../css/workerLP.module.css";
import showlogo from "../media/showlogo.png";


function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [show, setShow] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/WorkerStartPage");
    } catch {
      setError("Failed to sign in!");
    }
    setLoading(false);
  }

  return (
    <div className={classes.containerPage}>
      <span className={classes.titlePrijava}>Prijava za djelatnike </span>

      <div className={classes.circle1}></div>
      <div className={classes.circle2}></div>
      <div className={classes.circle3}></div>
      <Link to="/">
        <div className={classes.exitbtn}>
          <span className={classes.extitxt}>X</span>
        </div>
      </Link>
      <div className={classes.name}></div>
      <div className={classes.name}></div>

      <div className={classes.errorMsg}>
        {error && <Alert className={classes.errTxt} variant="danger">{error}</Alert>}
      </div>
      
      <Form onSubmit={handleSubmit}>

        <Form.Group id="email">
            <Form.Control type="email" ref={emailRef} className={classes.titleKorisnickoime} placeholder="Korisničko ime" autoComplete="false" required/>
        </Form.Group>
        <div className={classes.underline}></div>

        <Form.Group id="password">
            <Form.Control type={show ? "text" : "password"} ref={passwordRef} className={classes.titlepass} autoComplete="false" placeholder="Lozinka" required/>
        </Form.Group>
        <div className={classes.underline2}></div>

        <div className={classes.containerPW}>
            <img src={showlogo} alt="show password" onClick={() => setShow(!show)}></img>
        </div>
        <div className={classes.btnLogindiv}>
          <Button disabeled={loading.toString()} className={classes.loginbtn} type="submit">NASTAVI</Button> 
        </div>    

      </Form>
      <div className={classes.containerbottom}>
        <div className={classes.recoverydiv}>
          <span className={classes.txtForgot}>Zaboravljena </span>
          <Link to="/recover" className={classes.txtRecover}>lozinka?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
