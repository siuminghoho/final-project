// import { useNavigate } from "react-router-dom";
import Cards from "../component/Cards";
import Modals from "../component/Modals";
import { useMenu } from "../API/menuAPI";
import "./HomePage.css";
import ShoppingNavbars from "../component/ShoppingNavbars";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUuid } from "../slice/uuidSlice";
// import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch();

  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const uuid = url.searchParams.get("uuid");

    if (uuid) {
      dispatch(setUuid(uuid));
    }
  }, [dispatch]);

  return (
    <>
      <Modals />
      <div onClick={handleClick} className="navbarControl">
        <h1>茶。餐廳</h1>
        {clickCount >= 5 ? (
          <button className="武器" onClick={() => navigate("/admin/scan")}>
            Admin
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="cardContainer">
        {menus.data?.map((menu) => (
          <Cards
            menu_name={menu.name}
            menu_id={menu.id}
            menu_img={menu.menuimg}
            key={menu.id}
          ></Cards>
        ))}
      </div>
      <div className="homepage-shoppingNavbars">
        <ShoppingNavbars />
      </div>
    </>
  );
}
