import Checkbox from "../component/CheckBox";
import ShoppingCartNavbars from "../component/ShoppingCartNavbars";
import TestFoodCard from "../component/TestFoodCard";
import styles from "./ItemOptionPage.module.css";
import { useFoodOption } from "../API/menuAPI";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function ItemOptionPage() {
  const { state } = useLocation();
  const { itemId, foodPrice, foodName } = state;

  const foodOptions = useFoodOption(itemId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("it show foodOptions", foodOptions);
  // console.log("it is menu_id", menu_id);
  // console.log("it is state", state);

  const [checkedItems, setCheckedItems] = useState<any[]>([]);

  const handleCheckboxChange = (name: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, name]);
    } else {
      setCheckedItems(checkedItems.filter((item: any) => item !== name));
    }
  };

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
        {/* <TestFoodCard /> */}
        <div className={styles.foodTitle}>
          <h1>食品要求</h1>
          {/* <h1> {itemId}</h1> */}
        </div>
        <div className={styles.foodOption}>
          {foodOptions.data
            ? foodOptions.data.map((option, index) => (
                <div key={index} className={styles.optionItem}>
                  <div className={styles.option}>
                    <p>{option.name}</p>
                    <div className={styles.checkbox}>
                      <Checkbox
                        name={option.name}
                        trackHandler={handleCheckboxChange}
                      />
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>

        {/* <div>{checkedItems}</div> */}
        <div className={styles.shoppingCarNavbars}>
          <ShoppingCartNavbars
            menu_price={foodPrice}
            item_id={itemId}
            item_name={foodName}
            checked_item={checkedItems}
            checked_item_id={(foodOptions.data && foodOptions.data[0]?.id) || 0}
          />
        </div>
      </div>
    </>
  );

  // {
  //   /* <div className={styles.foodOption}>
  //         <div className={styles.optionLeft}>
  //           <h1>少飯</h1>
  //         </div>
  //         <div className={styles.optionRight}>
  //           <Checkbox />
  //         </div>
  //       </div>
  //       <h1 className={styles.foodTitle}>飲品</h1>

  //       <div className={styles.foodOption}>
  //         <div className={styles.optionLeft}>
  //           <h1>熱檬茶</h1>
  //         </div>
  //         <div className={styles.optionRight}>
  //           <Checkbox />
  //         </div>
  //       </div>

  //       <div className={styles.foodOption}>
  //         <div className={styles.optionLeft}>
  //           <h1>凍奶茶</h1>
  //         </div>
  //         <div className={styles.optionRight}>
  //           <Checkbox />
  //         </div>
  //       </div> */
  // }
}
