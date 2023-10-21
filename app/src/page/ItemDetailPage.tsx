import { useLocation, useNavigate } from "react-router";
import ShoppingCarNavbars from "../component/ShoppingCartNavbars";
import TestFoodCard from "../component/TestFoodCard";
import styles from "./ItemDetailPage.module.css";

export function ItemDetailPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // sub_category_food_id: food.id,
  // isSet: false,
  // sub_category_food_name: food.name,
  // menu_price: food.price,
  const {
    sub_category,
    isSet,
    sub_category_food_name,
    menu_price,
    sub_category_food_id,
    food_img,
  } = state;

  return (
    <>
      <div className={styles.title}>
        <button
          className={styles.returnButton}
          type="button"
          onClick={() => navigate(-1)}
        >
          返回
        </button>
        <div className={styles.menuTitle}>
          <h1>茶。餐廳</h1>
        </div>
        <div className={styles.spacer}></div>
      </div>
      <div className={styles.container}>
        <TestFoodCard
          food_price={menu_price}
          food_img={food_img}
          food_name={sub_category_food_name}
        />
        <div className={styles.foodTitle}>
          <h1>食品選擇</h1>
        </div>

        <div className={styles.foodOption}>
          <div
            className={styles.optionLeft}
            onClick={() =>
              navigate("/itemOption", {
                state: {
                  itemId: sub_category_food_id,
                  foodPrice: menu_price,
                  foodName: sub_category_food_name,
                },
              })
            }
          >
            <h5 className={styles.foodOption}>{sub_category_food_name}</h5>
            {/* <h4>{sub_category_food_id}</h4>
          <h4>{isSet.toString()}</h4>
          <h4>{menu_price}</h4> */}
          </div>
          <div className={styles.optionRight}>{/* <Checkbox /> */}</div>
        </div>

        <div className={styles.shoppingCarNavbars}>
          {/* <ShoppingCarNavbars
          menu_price={menu_price}
          item_id={sub_category_food_id}
          item_name={sub_category_food_name}
        /> */}
        </div>
      </div>
    </>
  );
}
