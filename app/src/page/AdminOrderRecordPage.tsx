// import React, { useState, useEffect } from 'react';
// import styles from './AdminOrderRecordPage.module.css';
// import { useSelector } from 'react-redux';
// import { IRootState } from '../store';
// import { AdminMenu } from '../component/AdminMenu';
// import { uuidSlice } from '../slice/uuidSlice';

// export const AdminOrderRecordPage = () => {
//   const uuid = useSelector((state: IRootState) => state.uuid.uuid);

//   // Simulating order data. In a real application, orders would be fetched from a server.
//   const [orders, setOrders] = useState([
//     { id: 1, product: '雞腿紅米飯', quantity: 1, request: '多飯', status: 'not_completed' },
//     // ... add more orders as needed for testing
//   ]);

//   const toggleOrderStatus = (orderId: number) => {
//     // Create a new array with the same order objects, except the order with the given ID
//     // has its status toggled between 'not_completed' and 'delivered'.
//     const newOrders = orders.map((order) =>
//       order.id === orderId
//         ? { ...order, status: order.status === 'not_completed' ? 'delivered' : 'not_completed' }
//         : order
//     );

//     setOrders(newOrders);
//   };

//   const getOrderStyle = (status: string) => {
//     return status === 'not_completed' ? styles['not-completed'] : styles.delivered;
//   };

//   // Determine the CSS class based on the order's status.
//   const getOrderStatusClass = (status: string) => {
//     switch (status) {
//       case 'delivered':
//         return styles.delivered;
//       case 'not_completed':
//         return styles['not-completed'];
//       default:
//         return '';
//     }
//   };

//   // Render each order with the appropriate styling based on its status.
//   const renderOrders = () => {
//     return orders.map((order) => (
//       <div
//         key={order.id}
//         className={`${styles["order-status-container"]} ${getOrderStatusClass(order.status)}`}
//         onClick={() => toggleOrderStatus(order.id)} // <-- Click event is bound here
//       >
//         <div className={styles['first-column']}>
//           <div className={styles.title}>產品1</div> {/* Product name */}
//           <div className={styles.title}>數量</div> {/* Quantity */}
//           <div className={styles.title}>特別需求</div> {/* Special request */}
//         </div>
//         <div className={styles['second-column']}>
//         <div className={styles.title}>{order.product}</div> {/* Product name */}
//           <div className={styles.title}>{order.quantity}</div> {/* Quantity */}
//           <div className={styles.title}>{order.request}</div> {/* Special request */}
//           {/* Additional order details can be displayed here */}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <>
//       <AdminMenu />
//       <div className={styles['big-container']}>
//         <div className={styles.title}>客人點餐記錄</div>
//         <div>UUID: {uuid}</div>
//         {renderOrders()}
//       </div>
//     </>
//   );
// };

// // uuid

import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import CheckOutModal from "../component/CheckOutModal";
import { useState } from "react";
import { orderEntry, toggle_status } from "../slice/orderRecordSlice";
import {
  clear_shoppingCart,
  clear_staging_area,
} from "../slice/shoppingCartSlice";
import styles from "./AdminOrderRecordPage.module.css";
import { AdminMenu } from "../component/AdminMenu";

export function AdminOrderRecordPage() {
  const adminOrderRecord = useSelector(
    (state: IRootState) => state.orderRecord.orderRecord
  );

  // console.log("hi 9 ", JSON.stringify(orderRecord));
  console.log("this is AdminOrderRecordPage", AdminOrderRecordPage);
  const totalAmount = adminOrderRecord.reduce(
    (sum, order) => sum + order.price!,
    0
  );

  const getOrderStatusClass = (status: String) => {
    switch (status) {
      case 'delivered':
        return styles.delivered;
      case 'not_completed':
        return styles['not-completed'];
      default:
        return '';
    }
  };


  const dispatch = useDispatch();
  return (
    <>
      <AdminMenu />
      <div className={styles["big-container"]}>
        <div className={styles.title}>
          <div className={styles.menuTitle}>
            <h1>訂單記錄</h1>
          </div>
        </div>

        {adminOrderRecord.map((order, index) => (
          <div
            key={order.item_id || order.set_id}
            className={`${styles["order-status-container"]} ${getOrderStatusClass(order.status!)}`}
            onClick={() => dispatch(toggle_status({ index: index }))}
          >
            <div className={styles["first-column"]}>
              <div className={styles.title}>產品 {index+1}</div> {/* Product name */}
              {order.choices?.length != undefined
                ? order.choices.map(() => (
                    <div className={styles.title}>特別需求</div>
                  ))
                : null}
              {/* Special request */}
            </div>
            <div className={styles["second-column"]}>
              <div className={styles.title}>
                {order.item_name || order.set_name}
              </div>
              {/* Product name */}
              {/* Quantity */}
              {order.choices?.length != undefined
                ? order.choices.map((entry) => (
                    <div className={styles.title}>{entry.option_name}</div>
                  ))
                : null}
              {/* Special request */}
              {/* Additional order details can be displayed here */}
            </div>
          </div>
        ))}


      </div>
    </>
  );
}
