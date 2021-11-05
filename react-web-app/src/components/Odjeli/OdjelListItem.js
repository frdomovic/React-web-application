import cls from "./odjelListItem.module.css";

function OdjelListItem(props) {
  return (
    <li>
      <div className={cls.cardcontainer}>
        <img src={props.logo_pic} alt="odjel logo" className={cls.logo_pic} />
        <span className={cls.titleOdjel}>{props.titleOdjel}</span>
        <span className={cls.descOdjel}>{props.descOdjel}</span>

        <div className={cls.btnlinecontainer}>
          <div className={cls.btnline}></div>
          <span className={cls.btnlinetxt}>STANI U RED</span>
        </div>
      </div>
    </li>
  );
}

export default OdjelListItem;
