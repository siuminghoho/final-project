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
          <h1>叉燒</h1>
        </div>
        <div className={styles.optionRight}>
          <Checkbox />
        </div>
      </div>
      <div className={styles.foodOption}>
        <div className={styles.optionLeft}>
          <h1>切雞</h1>
        </div>
        <div className={styles.optionRight}>
          <Checkbox />
        </div>
      </div>
      <div className={styles.foodOption}>
        <div className={styles.optionLeft}>
          <h1>油雞</h1>
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
