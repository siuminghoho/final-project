// import { useNavigate } from "react-router-dom";
import Cards from "../component/Cards";
import Modals from "../component/Modals";
import "./HomePage.css";

export function HomePage() {
  const menusDummyData = [
    {
      menu_id: 1,
      menu_name: "早餐",
      menu_img: "breakfast.jpg",
    },
    {
      menu_id: 2,
      menu_name: "午餐",
      menu_img: "lunch.jpg",
    },
    {
      menu_id: 3,
      menu_name: "晚餐",
      menu_img: "dinner.jpg",
    },
    { menu_id: 4, menu_name: "飲品", menu_img: "drink.jpg" },
  ];

  return (
    <>
      <Modals />
      <div className="navbarControl">
        <h1>damcham</h1>
      </div>
      <div className="cardContainer">
        {menusDummyData.map((menu) => (
          <Cards
            menu_name={menu.menu_name}
            menu_id={menu.menu_id}
            menu_img={menu.menu_img}
            key={menu.menu_id}
          ></Cards>
        ))}
      </div>
    </>
  );
}
