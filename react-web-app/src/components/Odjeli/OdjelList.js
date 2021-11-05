import cls from "./odjelList.module.css";
import OdjelListItem from "./OdjelListItem";

function OdjelList(props){
    return <ul className={cls.list}>
        {props.items.map(items =>{
            <OdjelListItem key={items.id} logo_pic={items.logo_pic} titleOdjel={props.titleOdjel} descOdjel={props.descOdjel} longDesc={props.longDesc}/>
        })}
    </ul>

}

export default OdjelList;