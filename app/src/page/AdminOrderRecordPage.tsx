import React, { useState } from "react";
import "./AdminOrderRecordPage.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

export const AdminOrderRecordPage = () => {
  const [hadScanned, setHadScanned] = useState(false);

  const handleQRscan = () => {
    // QR code scanner API

    //set to true for testing
    setHadScanned(true);
  };

  const showOrderRecord = () => {
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
    </>;
  };

  return (
    <>
      <div className="Title">客人點餐記錄</div>
      <button className="btn btn-primary" onClick={handleQRscan}>
        <i className="bi bi-qr-code"></i> Scan QR
      </button>
      {hadScanned && showOrderRecord()}
    </>
  );
};
