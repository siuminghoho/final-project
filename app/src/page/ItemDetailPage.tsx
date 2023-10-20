import { useLocation, useNavigate } from "react-router";
import ShoppingCarNavbars from "../component/ShoppingCarNavbars";
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
  } = state;

  return (
    <div className={styles.container}>
      <TestFoodCard />
      <div className={styles.foodTitle}>
        <h1>食品選擇</h1>
      </div>

      <div className={styles.foodOption}>
        <div
          className={styles.optionLeft}
          onClick={() =>
            navigate("/itemOption", {
              state: { itemId: sub_category_food_id, foodPrice: menu_price },
            })
          }
        >
          <h1>{sub_category_food_name}</h1>
          <h4>{sub_category_food_id}</h4>
          <h4>{isSet.toString()}</h4>
          <h4>{menu_price}</h4>
        </div>
        <div className={styles.optionRight}>{/* <Checkbox /> */}</div>
      </div>

      <div className={styles.shoppingCarNavbars}>
        <ShoppingCarNavbars menu_price={0} />
      </div>
    </div>
  );
}
