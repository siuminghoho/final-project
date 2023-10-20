import React, { useState } from "react";

// import {react-router-dom} from 'react-router-dom';

import QRCode from "qrcode.react"; // you'll need to install this package for QR code generation

import { v4 as uuidv4 } from "uuid"; // for unique QR codes, install the 'uuid' package

import "bootstrap/dist/css/bootstrap.min.css";

import { AdminMenu } from "../component/AdminMenu";

import styles from "./AdminTicket.module.css";

export const AdminTicket = () => {
  const [ticket, setTicket] = useState(false);

  const [qrValue, setQrValue] = useState(""); // this will hold the unique QR code value

  const [people, setPeople] = useState(0);

  const [tableNo, setTableNo] = useState("");
  const [uuid, setUuid] = useState("");

  const generateQRCode = () => {
    const uniqueCode = uuidv4(); // generate a unique code
    const link = `http://192.168.160.81:3000/?uuid=${uniqueCode}`; // this is the link that will be encoded in QR code
    setQrValue(link);
    setUuid(uniqueCode);
    setTicket(true); // you might want to set some condition or reset this later
  };

  // Function to handle the number of people
  const handlePeopleChange = (action: string) => {
    setPeople((prevCount) =>
      action === "add" ? prevCount + 1 : prevCount > 0 ? prevCount - 1 : 0
    );
  };

  // Handler for input changes
  // const handleTableNoChange = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setTableNo(event.target.value);
  // };

  return (
    <>
    <div>
      <AdminMenu />
      <div className={styles['my-custom-container']}>
        {" "}
        {/* Custom class for potential styling adjustments */}
        {/* Conditional rendering of QRCode */}
        {ticket && (
          <div className={styles['qr-container'] + " my-4"}>
            <QRCode value={qrValue} />
            <p className="mt-2">Scan to check in</p>
            <p>UUID: {uuid}</p>
            {/* Displaying the table number and people count */}
            <div className={styles['mt-2']}>
              <p>Table No: {tableNo}</p>
              <p>Number of People: {people}</p>
            </div>
          </div>
        )}
        {/* The 'mt-4' class adds a margin to the top; you might want to reduce or remove it */}
        <div className={`${styles['action-container']} ${styles['mt-2']} ${styles.置中}`}>
          {" "}
          {/* Reduced margin-top */}
          <button className="btn btn-primary" onClick={generateQRCode}>
            Generate QR Code
          </button>
          <div className={`${styles['d-flex']} ${styles['align-items-center']} ${styles['my-2']}`}>
            {" "}
            {/* Reduced margin */}
            <span className={styles['mr-2']}>人數</span> {/* People count label */}
            
            <div className={styles['人數控制']}>
            <button
              className="btn btn-primary "
              onClick={() => handlePeopleChange("subtract")}
            >
              -
            </button>
            <span className="mx-2">{people}</span>
            <button
              className="btn btn-primary"
              onClick={() => handlePeopleChange("add")}
            >
              +
            </button>
            </div>
          </div>
          <input
            type="text"
            value={tableNo}
            onChange={(e) => setTableNo(e.target.value)}
            className="form-control"
            placeholder="枱號"
          />
        </div>
      </div>
      </div>
    </>
  );
};
