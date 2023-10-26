import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store";
import styles from "./ShoppingCartPage.module.css";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import CheckOutModal from "../component/CheckOutModal";
import { useState } from "react";
import { orderEntry } from "../slice/orderRecordSlice";
import {
  clear_shoppingCart,
  clear_staging_area,
} from "../slice/shoppingCartSlice";

export function OrderRecordPage() {
  const orderRecord = useSelector(
    (state: IRootState) => state.shoppingCart.orderRecord
  );

  // console.log("hi 9 ", JSON.stringify(orderRecord));
  console.log("this is orderRecord", orderRecord);
  const totalAmount = orderRecord.reduce((sum, order) => sum + order.price!, 0);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const goToAdmin =() => {
    navigate("/admin/orderRecord");
  }
  return (
    <>
    <div>

      
    </div>
    {/* <button onClick ={goToAdmin }>..</button> */}
      <div className={styles.title}>
        <button
          className={styles.returnButton}
          type="button"
          onClick={() => {
            dispatch(clear_staging_area());
            dispatch(clear_shoppingCart());
            navigate("/");
          }}
        >
          返回
        </button>
        <div className={styles.menuTitle}>
          <h1>訂單記錄</h1>
        </div>
        <div className={styles.spacer}></div>
      </div>
      {orderRecord.map((order: orderEntry) =>
        order.item_id ? (
          <>
            <h1>{order.item_name}</h1>
            {order.choices?.map((item_choice) => {
              return (
                <>
                  <h3>{item_choice.option_name}</h3>
                </>
              );
            })}
          </>
        ) : (
          <>
            {/* <h1>Set</h1> */}
            <h1>{order.set_name}</h1>
            {order.set_choices?.map((item_choice) => {
              return (
                <>
                  <h3>{item_choice.item_name}</h3>
                  {item_choice.option_choices?.map((option_choice) => {
                    return <h6>{option_choice.option_name}</h6>;
                  })}
                </>
              );
            })}
          </>
        )
      )}
      <div className={styles.name}>
        <h1>訂單總金額</h1>
        <h1>${totalAmount}</h1>
      </div>
    </>
  );
}
