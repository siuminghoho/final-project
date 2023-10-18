import { Button } from "react-bootstrap";
import styles from "./CheckOutPage.module.css";
import { useNavigate } from "react-router-dom";

export function CheckOutPage() {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        返回
      </button>
      <div className={styles.tittle}>
        <h1>結帳</h1>
      </div>
      <div>
        <h3>訂單詳情</h3>
      </div>
      <div className={styles.detail}>
        <h3>沙嗲牛肉麵</h3>

        <div className={styles.price}>
          <h3>1</h3>
          <h3>$50</h3>
        </div>
      </div>
      <div className={styles.detail}>
        <h3>凍檸檬茶</h3>

        <div className={styles.price}>
          <h3>1</h3>
          <h3>$2</h3>
        </div>
      </div>
      <h1 className={styles.pay}>付款方法</h1>
      <div className={styles.payment}>
        <Button variant="primary">Apple Pay</Button>
      </div>
    </>
  );
}
