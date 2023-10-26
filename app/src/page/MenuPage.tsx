import { useLocation, useNavigate } from "react-router-dom";
import Navbars from "../component/Navbars";

import React, { useEffect, useState } from "react";
import { Subcategories } from "../component/SubCategories";
import { ItemDetailPage } from "./ItemDetailPage";
import styles from "./MenuPage.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { useSubcat } from "../API/menuAPI";
import ShoppingNavbars from "../component/ShoppingNavbars";


export function MenuPage() {
  const { state } = useLocation();
  const { menu_name, menu_id } = state;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const subcat = useSubcat(menu_id);

  const [selected_sub_category, setSelected_sub_category] = useState({
    sub_category_name: "",
    sub_category_id: 0,
  });
  useEffect(() => {
    if (subcat.data && subcat.data.length > 0) {
      const defaultSubCategory = subcat.data[0];
      onChange(defaultSubCategory.id, defaultSubCategory.name);
    }
  }, [subcat.data]);
  const onChange = (subCategoryId: number, subCategoryName: string) => {
    setSelected_sub_category({
      sub_category_name: subCategoryName,
      sub_category_id: subCategoryId,
    });

    queryClient.invalidateQueries({
      queryKey: ["SubcatMenu", menu_id, subCategoryName],
    });
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

      <div>
        {
          <Navbars
            onClick={onChange}
            menu_id={menu_id}
            sub_categories={subcat.data || []}
          ></Navbars>
        }
      </div>

      <h1>{menu_name}</h1>
      {/* <h2>{selected_sub_category.sub_category_name}</h2> */}
      <Subcategories
        menu_id={menu_id}
        sub_category_id={selected_sub_category.sub_category_id}
        sub_category_name={selected_sub_category.sub_category_name}
      ></Subcategories>
      <ShoppingNavbars />
    </>
  );
}

// const menusDummyData = [
//   {
//     menu_id: 1,
//     menu_name: "早餐",
//     sub_categories: [
//       { sub_category_id: 1, sub_category_name: "是日推薦" },
//       { sub_category_id: 2, sub_category_name: "脆邊煎雙蛋系列" },
//       { sub_category_id: 3, sub_category_name: "香嫩炒滑蛋系列" },
//       { sub_category_id: 4, sub_category_name: "至抵推薦" },
// { sub_category_id: 5, sub_category_name: "test" },
// { sub_category_id: 6, sub_category_name: "test2" },
// { sub_category_id: 7, sub_category_name: "test3" },
// { sub_category_id: 8, sub_category_name: "test4" },
// { sub_category_id: 9, sub_category_name: "test5" },
// { sub_category_id: 10, sub_category_name: "test6" },
// { sub_category_id: 11, sub_category_name: "test7" },
// { sub_category_id: 12, sub_category_name: "test8" },
// { sub_category_id: 13, sub_category_name: "test9" },
// { sub_category_id: 14, sub_category_name: "test10" },
//     ],
//   },
//   {
//     menu_id: 2,
//     menu_name: "午餐",
//     sub_categories: [
//       { sub_category_id: 1, sub_category_name: "是日推薦" },
//       { sub_category_id: 2, sub_category_name: "咖喱系列" },
//       { sub_category_id: 3, sub_category_name: "燒味系列" },
//       { sub_category_id: 4, sub_category_name: "168減肥推薦" },
//     ],
//   },
//   {
//     menu_id: 3,
//     menu_name: "晚餐",
//     sub_categories: [
//       { sub_category_id: 1, sub_category_name: "是日推薦" },
//       { sub_category_id: 2, sub_category_name: "168減肥推薦" },
//       { sub_category_id: 3, sub_category_name: "燒味系列" },
//     ],
//   },
//   {
//     menu_id: 4,
//     menu_name: "熱飲",
//     sub_categories: [
//       { sub_category_id: 1, sub_category_name: "熱飲" },
//       { sub_category_id: 2, sub_category_name: "凍飲" },
//     ],
//   },
//   {
//     menu_id: 5,
//     menu_name: "凍飲",
//     sub_categories: [
//       { sub_category_id: 1, sub_category_name: "熱飲" },
//       { sub_category_id: 2, sub_category_name: "凍飲" },
//     ],
//   },
// ];

// const [selected_sub_categories, setSelected_sub_categories] = useState({
//   sub_category_name: menus[menu_id - 1].sub_categories[0].sub_category_name,
//   sub_category_id: menus[menu_id - 1].sub_categories,
// });
