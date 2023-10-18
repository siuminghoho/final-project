// import { useNavigate } from "react-router-dom";
import Cards from "../component/Cards";
import Modals from "../component/Modals";
import { useMenu } from "../API/menuAPI";
import "./HomePage.css";
// import { useQueryClient } from "@tanstack/react-query";

export function HomePage() {
  // const menusDummyData = [
  //   {
  //     menu_id: 1,
  //     menu_name: "早餐",
  //     menu_img: "breakfast.jpg",
  //   },
  //   {
  //     menu_id: 2,
  //     menu_name: "午餐",
  //     menu_img: "lunch.jpg",
  //   },
  //   {
  //     menu_id: 3,
  //     menu_name: "晚餐",
  //     menu_img: "dinner.jpg",
  //   },
  //   { menu_id: 4, menu_name: "飲品", menu_img: "drink.jpg" },
  // ];
  const menus = useMenu();
  // const queryClient = useQueryClient();
  return (
    <>
      <Modals />
      <div className="navbarControl">
        <h1>damcham</h1>
      </div>
      <div className="cardContainer">
        {menus.data?.map((menu) => (
          <Cards
            menu_name={menu.name}
            menu_id={menu.id}
            menu_img={menu.img}
            key={menu.id}
          ></Cards>
        ))}
      </div>
    </>
  );
}
