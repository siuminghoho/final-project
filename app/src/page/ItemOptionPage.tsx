import Checkbox from "../component/CheckBox";
import ShoppingCarNavbars from "../component/ShoppingCarNavbars";
import TestFoodCard from "../component/TestFoodCard";
import styles from "./ItemOptionPage.module.css";
import { useFoodOption } from "../API/menuAPI";
import { useLocation } from "react-router-dom";

export function ItemOptionPage() {
  const { state } = useLocation();
  const { menu_id, menu_price } = state;
  const foodOptions = useFoodOption(menu_id);

  // console.log("it show foodOptions", foodOptions);
  // console.log("it is menu_id", menu_id);
  // console.log("it is state", state);

  return (
    <div className={styles.container}>
      <TestFoodCard />
      <div className={styles.foodTitle}>
        <h1>食品要求</h1>
      </div>
      <div className={styles.foodOption}>
        {foodOptions.data
          ? foodOptions.data.map((option) => (
              <div key={option.id} className={styles.optionItem}>
                <p>{option.name}</p>
                <div className={styles.checkbox}>
                  <Checkbox />
                </div>
              </div>
            ))
          : null}
      </div>

      <div className={styles.shoppingCarNavbars}>
        <ShoppingCarNavbars menu_price={menu_price} />
      </div>
    </div>
  );
}

{
  /* <div className={styles.foodOption}>
        <div className={styles.optionLeft}>
          <h1>少飯</h1>
        </div>
        <div className={styles.optionRight}>
          <Checkbox />
        </div>
      </div>
      <h1 className={styles.foodTitle}>飲品</h1>

      <div className={styles.foodOption}>
        <div className={styles.optionLeft}>
          <h1>熱檬茶</h1>
        </div>
        <div className={styles.optionRight}>
          <Checkbox />
        </div>
      </div>

      <div className={styles.foodOption}>
        <div className={styles.optionLeft}>
          <h1>凍奶茶</h1>
        </div>
        <div className={styles.optionRight}>
          <Checkbox />
        </div>
      </div> */
}
