import FoodCards from "./FoodCards";
import { useSubcatMenu } from "../menuAPI";
export function Subcategories(props: {
  menu_id: number;
  sub_category_id: number;
  sub_category_name: string;
}) {
  const subcategoriesFoodData = useSubcatMenu(
    props.menu_id,
    props.sub_category_name
  );
  // const subcategoriesFoodDummyData = [
  //   {
  //     menu_id: 1,
  //     menu_name: "早餐",
  //     sub_categories: [
  //       {
  //         sub_category_id: 1,
  //         sub_category_name: "是日推薦",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "豬扒米" },
  //           { sub_category_food_id: 2, sub_category_food_name: "雞扒米" },
  //         ],
  //       },
  //       {
  //         sub_category_id: 2,
  //         sub_category_name: "脆邊煎雙蛋系列",
  //         sub_category_food: [
  //           {
  //             sub_category_food_id: 1,
  //             sub_category_food_name: "脆邊煎雙蛋+火腿+英式多士+飲品",
  //           },
  //           {
  //             sub_category_food_id: 2,
  //             sub_category_food_name: "脆邊煎雙蛋+餐肉+英式多士+飲品",
  //           },
  //         ],
  //       },

  //       {
  //         sub_category_id: 3,
  //         sub_category_name: "香嫩炒滑蛋系列",
  //         sub_category_food: [
  //           {
  //             sub_category_food_id: 1,
  //             sub_category_food_name: "香嫩炒滑蛋+火腿湯通粉+牛油厚多士+飲品",
  //           },
  //           {
  //             sub_category_food_id: 2,
  //             sub_category_food_name:
  //               "香嫩炒滑蛋+雪菜肉絲湯米粉+牛油厚多士+飲品",
  //           },
  //         ],
  //       },
  //       {
  //         sub_category_id: 4,
  //         sub_category_name: "至抵推薦",
  //         sub_category_food: [
  //           {
  //             sub_category_food_id: 1,
  //             sub_category_food_name: "烚蛋+牛奶燕麥 (無糖)+牛油厚多士",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     menu_id: 2,
  //     menu_name: "午餐",
  //     sub_categories: [
  //       {
  //         sub_category_id: 1,
  //         sub_category_name: "是日推薦",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "叉燒荷葉飯" },
  //           { sub_category_food_id: 2, sub_category_food_name: "鴨腿湯飯" },
  //         ],
  //       },
  //       {
  //         sub_category_id: 2,
  //         sub_category_name: "咖喱系列",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "咖喱牛腩飯" },
  //           { sub_category_food_id: 2, sub_category_food_name: "咖喱豬扒飯" },
  //         ],
  //       },
  //       {
  //         sub_category_id: 3,
  //         sub_category_name: "燒味系列",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "叉燒飯+飲品" },
  //           { sub_category_food_id: 2, sub_category_food_name: "油雞飯+飲品" },
  //         ],
  //       },
  //       {
  //         sub_category_id: 4,
  //         sub_category_name: "168減肥推薦",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "雞腿紅米飯" },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     menu_id: 3,
  //     menu_name: "晚餐",
  //     sub_categories: [
  //       {
  //         sub_category_id: 1,
  //         sub_category_name: "是日推薦",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "叉燒荷葉飯" },
  //           { sub_category_food_id: 2, sub_category_food_name: "鴨腿湯飯" },
  //         ],
  //       },
  //       {
  //         sub_category_id: 2,
  //         sub_category_name: "168減肥推薦",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "雞腿紅米飯" },
  //         ],
  //       },
  //       {
  //         sub_category_id: 3,
  //         sub_category_name: "燒味系列",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "叉燒飯+飲品" },
  //           { sub_category_food_id: 2, sub_category_food_name: "油雞飯+飲品" },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     menu_id: 4,
  //     menu_name: "飲品",
  //     sub_categories: [
  //       {
  //         sub_category_id: 1,
  //         sub_category_name: "熱飲",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "奶茶" },
  //           { sub_category_food_id: 2, sub_category_food_name: "咖啡" },
  //         ],
  //       },
  //       {
  //         sub_category_id: 2,
  //         sub_category_name: "凍飲",
  //         sub_category_food: [
  //           { sub_category_food_id: 1, sub_category_food_name: "檸茶" },
  //           { sub_category_food_id: 2, sub_category_food_name: "可樂" },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  // const category = subcategories[0];
  // const subcategory = category.sub_categories[0];

  return (
    <>
      {subcategoriesFoodData.data && (
        <FoodCards
          menu_id={props.menu_id}
          sub_category_id={props.sub_category_id}
          sub_categories_food={subcategoriesFoodData.data}
        />
      )}
    </>
  );
}

//database subcat item_id missing
