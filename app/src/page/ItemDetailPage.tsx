import { useLocation, useNavigate } from "react-router";
import ShoppingCarNavbars from "../component/ShoppingCartNavbars";
import TestFoodCard from "../component/TestFoodCard";
import styles from "./ItemDetailPage.module.css";
import { FoodOption, useFoodOption } from "../API/menuAPI";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_record, clear_staging_area } from "../slice/shoppingCartSlice";

export function ItemDetailPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();

  // sub_category_food_id: food.id,
  // isSet: false,
  // sub_category_food_name: food.name,
  // menu_price: food.price,
  const {
    sub_category,
    itemObj,
    sub_category_food_name,
    menu_price,
    sub_category_food_id,
    priority,
    food_img,
    itemId,
    set_id,
    set_name,
    price,
  } = state;

  const foodOptions = useFoodOption(itemId, itemObj);

  const [currentPriority, setCurrentPriority] = useState(priority || 1);

  console.log("hi foodOptions", foodOptions);

  const result = foodOptions.data?.reduce(
    (acc: any[], { priority, listName, id, name, options }) => {
      const existingEntry = acc.find((entry) => entry.priority === priority);

      if (existingEntry) {
        existingEntry.items.push({ id, name, options });
      } else {
        const newEntry = {
          priority,
          listName,
          items: [{ id, name, options }],
        };
        acc.push(newEntry);
      }

      return acc;
    },
    []
  );

  console.log("this is result", result);

  const handleShoppingCart = (item_id: number, item_name: string) => {
    if (!itemObj) {
      dispatch(
        add_record({
          set_choices: [
            {
              item_id: item_id,
              item_name: item_name,
            },
          ],
          price: price,
        })
      );
    }
  };
  return (
    <>
      <div className={styles.title}>
        <button
          className={styles.returnButton}
          type="button"
          onClick={() => {
            dispatch(clear_staging_area());
            navigate(-1);
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
        <TestFoodCard
          food_price={menu_price}
          food_img={food_img}
          food_name={sub_category_food_name}
        />
        <div className={styles.foodTitle}>
          <h1>食品選擇</h1>
        </div>

        <div className={styles.foodOption}>
          <div className={styles.optionLeft}>
            {itemObj && (
              <h5
                className={styles.foodOption}
                onClick={() => {
                  if (result![0].items.length > 0) {
                    navigate("/itemOption", {
                      state: {
                        itemId: itemId,
                        foodPrice: menu_price,
                        itemObj: itemObj,
                        // result: result,
                        priority: currentPriority,
                        foodItemId: itemId,
                        foodItemOptions: result![0].items,
                        foodName: sub_category_food_name,
                      },
                    });
                  } else {
                  }
                }}
              >
                {sub_category_food_name}
              </h5>
            )}

            {!itemObj && result && (
              <div>
                <ul>
                  {result[currentPriority - 1].items.map((item: any) => (
                    <h5
                      className={styles.option}
                      key={item.id}
                      onClick={() => {
                        if (item.options.length > 0) {
                          navigate("/itemOption", {
                            state: {
                              itemId: itemId,
                              foodPrice: menu_price,
                              itemObj: itemObj,
                              // result: result,
                              priority: currentPriority,
                              foodItemId: item.id,
                              foodItemOptions: item.options,
                              foodName: item.name,
                            },
                          });
                          //handleShoppingCart();
                        } else {
                          handleShoppingCart(item.id, item.name);
                          setCurrentPriority(currentPriority + 1);
                        }
                      }}
                    >
                      {item.name}
                    </h5>
                  ))}
                </ul>
              </div>
            )}

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
