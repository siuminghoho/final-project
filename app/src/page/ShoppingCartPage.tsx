import { useSelector } from "react-redux";
import { IRootState } from "../store";
import styles from "./ShoppingCartPage.module.css";
import { useNavigate } from "react-router";

export function ShoppingCartPage() {
  const orderRecord = useSelector(
    (state: IRootState) => state.shoppingCart.orderRecord
  );

  // console.log("hi 9 ", JSON.stringify(orderRecord));
  console.log("this is orderRecord", orderRecord);
  const totalAmount = orderRecord.reduce((sum, order) => sum + order.price, 0);
  const navigate = useNavigate();
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
          <h1>帳單記錄</h1>
        </div>
        <div className={styles.spacer}></div>
      </div>
      {orderRecord.map((order) => (
        <>
          {/* <h1>{order.item_id}</h1> */}
          <div className={styles.name}>
            <h5>{order.item_name}</h5>
            <h3>${order.price}</h3>
          </div>
          <h5>{order.choices[0].choice_name}</h5>
        </>
      ))}
      <div className={styles.name}>
        <h1>訂單總金額</h1>
        <h1>${totalAmount}</h1>
      </div>
    </>
  );
}
