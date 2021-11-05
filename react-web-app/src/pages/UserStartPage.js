/*import cls from "./userstartpage.module.css";*/
import OdjelList from "../components/Odjeli/OdjelList";
/*
mainPageContainer - unutar njega su svi elementi ekrana koje koristimo
listContainer - unutar njega su liste odjela 
*/
const DUMMY_DATA = [
  {
    id: "m1",
    logo_pic: "./v12_35.png",
    titleOdjel: "Odjel A",
    descOdjel: "Optužbe",
    longDesc: "Ovaj odjel se bavi optuzbama i zahtjevima",
  },
  {
    id: "m2",
    logo_pic: "./v12_36.png",
    titleOdjel: "Odjel B",
    descOdjel: "Uhljebništvo",
    longDesc: "Ovaj odjel se bavi optuzbama i zahtjevima",
  },
];
function UserStartPage() {
  return (
    <div>
        <section>
            <OdjelList items={DUMMY_DATA} />
        </section>
    </div>
  );
}

export default UserStartPage;
