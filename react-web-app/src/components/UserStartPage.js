/*import cls from "./userstartpage.module.css";*/
/*
mainPageContainer - unutar njega su svi elementi ekrana koje koristimo
listContainer - unutar njega su liste odjela 
*/
import "../css/userStartPage.module.css"
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
        USER START PAGE
    </div>
  );
}

export default UserStartPage;
