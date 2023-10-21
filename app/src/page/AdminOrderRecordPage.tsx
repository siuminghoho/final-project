import React, { useState } from "react";
import styles from "./AdminOrderRecordPage.module.css";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import { AdminMenu } from "../component/AdminMenu";

export const AdminOrderRecordPage = () => {
  const uuid = useSelector((state: IRootState) => state.uuid.uuid);

  return (
    <>
      <AdminMenu />
      <div className={styles["big-container"]}>
      <div className={styles.title}>客人點餐記錄</div>
      <div>UUID: {uuid}</div>
      <div className={styles["order-status-container"]}>
        <div className={styles["first-column"]}>
          <div className={styles.title}>產品1</div>
          <div className={styles.title}>數量</div>
          <div className={styles.title}>特別要求</div>
        </div>

        <div className={styles["second-column"]}>
          <div className={styles.item}>雞腿紅米飯</div>
          <div className={styles.item}>1</div>
          <div className={styles.item}>多飯</div>
        </div>
      </div>
      </div>
    </>
  );
};