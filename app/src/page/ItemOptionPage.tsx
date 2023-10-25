import Checkbox from "../component/CheckBox";
import ShoppingCartNavbars from "../component/ShoppingCartNavbars";
import TestFoodCard from "../component/TestFoodCard";
import styles from "./ItemOptionPage.module.css";
import { useFoodOption } from "../API/menuAPI";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clear_staging_area, optionDataType } from "../slice/shoppingCartSlice";

export function ItemOptionPage() {
  const { state } = useLocation();
  const {
    itemId,
    foodPrice,
    foodName,
    itemObj,
    foodItemId,
    foodItemOptions,
    priority,
  } = state;

  console.log(`ItemOptionPage`, foodItemOptions);
  const foodOptions = useFoodOption(itemId, itemObj);
  const navigate = useNavigate();

  // console.log("it show foodOptions", foodOptions);
  // console.log("it is menu_id", menu_id);
  // console.log("it is state", state);

  const [checkedItems, setCheckedItems] = useState<optionDataType[]>([]);

  const handleCheckboxChange = (
    option_name: string,
    option_id: number,
    option_price: number,
    isChecked: boolean
  ) => {
    if (isChecked) {
      console.log("checked passed", option_id, option_name);

      setCheckedItems([
        ...checkedItems,
        {
          option_id: option_id,
          option_name: option_name,
          option_price: option_price,
        },
      ]);
    } else {
      setCheckedItems(
        checkedItems.filter(
          (item: optionDataType) => item.option_id !== option_id
        )
      );
    }
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.title}>
        <button
          className={styles.returnButton}
          type="button"
          onClick={() => {
            dispatch(clear_staging_area());
            navigate(-2);
          }}
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
          <h1>附加要求</h1>
          {/* <h1> {itemId}</h1> */}
        </div>
        <div className={styles.foodOption}>
          {foodItemOptions
            ? foodItemOptions.map((option: any, index: any) => (
                <div key={index} className={styles.optionItem}>
                  <div className={styles.option}>
                    <p>{option.name}</p>
                    <div className={styles.checkbox}>
                      <Checkbox
                        option_name={option.name}
                        option_id={option.id}
                        option_price={option.price}
                        trackHandler={handleCheckboxChange}
                      />
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>

        {/* <div>
          {checkedItems.map((entry) => (
            <h2>{entry.option_name}</h2>
          ))}
        </div> */}
        <div className={styles.shoppingCarNavbars}>
          <ShoppingCartNavbars
            menu_price={foodPrice}
            item_id={itemId}
            item_name={foodName}
            checked_item={checkedItems}
            itemObj={itemObj}
            choices={checkedItems}
          />
        </div>
      </div>
    </>
  );
}
