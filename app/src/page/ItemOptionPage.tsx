import Checkbox from "../component/CheckBox";
import ShoppingCarNavbars from "../component/ShoppingCarNavbars";
import TestFoodCard from "../component/TestFoodCard";
import styles from "./ItemDetailPage.module.css";

export function ItemDetailPage() {
  return (
    <div className={styles.container}>
      <TestFoodCard />
      <div className={styles.foodTittle}>
        <h1>食品要求</h1>
      </div>
      <div className={styles.foodOption}>
        <div className={styles.optionLeft}>
          <h1>多飯</h1>
        </div>
        <div className={styles.optionRight}>
          <Checkbox />
        </div>
      </div>
      <div className={styles.foodOption}>
        <div className={styles.optionLeft}>
          <h1>少飯</h1>
        </div>
        <div className={styles.optionRight}>
          <Checkbox />
        </div>
      </div>
      <h1 className={styles.foodTittle}>飲品</h1>

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
      </div>
      <div className={styles.shoppingCarNavbars}>
        <ShoppingCarNavbars />
      </div>
    </div>
  );
}
