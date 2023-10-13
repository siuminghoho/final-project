import { useLocation } from "react-router-dom";
import Navbars from "../component/Navbars";

import React, { useState } from "react";
import { Subcategories } from "../component/SubCategories";

export function MenuPage() {
  const { state } = useLocation();
  const { menu_name, menu_id } = state;
  const menus = [
    {
      menu_id: 1,
      menu_name: "早餐",
      sub_categories: [
        { sub_category_id: 1, sub_category_name: "是日推薦" },
        { sub_category_id: 2, sub_category_name: "脆邊煎雙蛋系列" },
        { sub_category_id: 3, sub_category_name: "香嫩炒滑蛋系列" },
        { sub_category_id: 4, sub_category_name: "至抵推薦" },
      ],
    },
    {
      menu_id: 2,
      menu_name: "午餐",
      sub_categories: [
        { sub_category_id: 1, sub_category_name: "是日推薦" },
        { sub_category_id: 2, sub_category_name: "咖喱系列" },
        { sub_category_id: 3, sub_category_name: "燒味系列" },
        { sub_category_id: 4, sub_category_name: "168減肥推薦" },
      ],
    },
    {
      menu_id: 3,
      menu_name: "晚餐",
      sub_categories: [
        { sub_category_id: 1, sub_category_name: "是日推薦" },
        { sub_category_id: 2, sub_category_name: "168減肥推薦" },
        { sub_category_id: 3, sub_category_name: "燒味系列" },
      ],
    },
    {
      menu_id: 4,
      menu_name: "飲品",
      sub_categories: [
        { sub_category_id: 1, sub_category_name: "熱飲" },
        { sub_category_id: 2, sub_category_name: "凍飲" },
      ],
    },
  ];

  // const [selected_sub_categories, setSelected_sub_categories] = useState({
  //   sub_category_name: menus[menu_id - 1].sub_categories[0].sub_category_name,
  //   sub_category_id: menus[menu_id - 1].sub_categories,
  // });
  const [selected_sub_categories, setSelected_sub_categories] = useState({
    sub_category_name: menus[menu_id - 1].sub_categories[0].sub_category_name,
    sub_category_id: menus[menu_id - 1].sub_categories[0].sub_category_id,
  });
  const onChange = (subCategoryId: number, subCategoryName: string) => {
    setSelected_sub_categories({
      sub_category_name: subCategoryName,
      sub_category_id: subCategoryId,
    });
  };
  return (
    <>
      <div>
        {
          <Navbars
            onClick={onChange}
            menu_id={menus[menu_id - 1].menu_id}
            sub_categories={menus[menu_id - 1].sub_categories}
            key={menus[menu_id - 1].menu_id}
          ></Navbars>
        }
      </div>

      <h1>{menu_name}</h1>
      <h2>{selected_sub_categories.sub_category_name}</h2>
      <Subcategories
        sub_categories={menus[menu_id - 1].sub_categories.map(
          (subcategory) => ({ sub_category_id: subcategory.sub_category_id })
        )}
      />
    </>
  );
}
