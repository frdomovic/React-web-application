import classes from "./workerLP.module.css";
import showlogo from "./showlogo.png";
function WorkerLoginPage() {
  return (
    <div className={classes.containerPage}>
      <span className={classes.titlePrijava}>Prijava za djelatnike </span>

      <div className={classes.circle1}></div>
      <div className={classes.circle2}></div>
      <div className={classes.circle3}></div>

      <div className={classes.name}></div>
      <div className={classes.name}></div>

      <span className={classes.titleKorisnickoime}>Korisničko ime</span>
      <div className={classes.underline}></div>
      <span className={classes.titlepass}>Lozinka</span>
      <div className={classes.underline2}></div>

      <div className={classes.containerPW}>
        <img src={showlogo} alt="show password"></img>
      </div>

      <div className={classes.btnLogindiv}>
        <div className={classes.btnLogin}>
          <span className={classes.txtLogin}>NASTAVI</span>
        </div>
      </div>
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
