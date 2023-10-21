import React, { useState } from "react";
import "./AdminOrderRecordPage.css";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import { AdminMenu } from "../component/AdminMenu";

export const AdminOrderRecordPage = () => {
  const uuid = useSelector((state: IRootState) => state.uuid.uuid);

  return (
    <>
      <AdminMenu />
      <div className="Title">客人點餐記錄</div>
      <h1>UUID: {uuid}</h1>
      <>
        <div className="order-status-container">
          <div className="first-column">
            <div className="title">產品1</div>
            <div className="title">數量</div>
            <div className="title">特別要求</div>
          </div>

          <div className="second-column">
            <div className="item">產品1顯示</div>
            <div className="item">數量顯示</div>
            <div className="item">特別要求顯示</div>
          </div>
        </div>
      </>
      ;
    </>
  );
};
