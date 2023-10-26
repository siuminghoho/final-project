import React, { useState, useEffect } from 'react';
import styles from './AdminOrderRecordPage.module.css';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { AdminMenu } from '../component/AdminMenu';

export const AdminOrderRecordPage = () => {
  const uuid = useSelector((state: IRootState) => state.uuid.uuid);

  // Simulating order data. In a real application, orders would be fetched from a server.
  const [orders, setOrders] = useState([
    { id: 1, product: '雞腿紅米飯', quantity: 1, request: '多飯', status: 'not_completed' },
    // ... add more orders as needed for testing
  ]);




  const toggleOrderStatus = (orderId: number) => {
    // Create a new array with the same order objects, except the order with the given ID
    // has its status toggled between 'not_completed' and 'delivered'.
    const newOrders = orders.map((order) => 
      order.id === orderId
        ? { ...order, status: order.status === 'not_completed' ? 'delivered' : 'not_completed' }
        : order
    );

    setOrders(newOrders);
  };

  const getOrderStyle = (status: string) => {
    return status === 'not_completed' ? styles['not-completed'] : styles.delivered;
  };



  // Determine the CSS class based on the order's status.
  const getOrderStatusClass = (status: string) => {
    switch (status) {
      case 'delivered':
        return styles.delivered;
      case 'not_completed':
        return styles['not-completed'];
      default:
        return '';
    }
  };

  // Render each order with the appropriate styling based on its status.
  const renderOrders = () => {
    return orders.map((order) => (
      <div 
        key={order.id} 
        className={`${styles["order-status-container"]} ${getOrderStatusClass(order.status)}`}
        onClick={() => toggleOrderStatus(order.id)} // <-- Click event is bound here
      >
        <div className={styles['first-column']}>
          <div className={styles.title}>產品1</div> {/* Product name */}
          <div className={styles.title}>數量</div> {/* Quantity */}
          <div className={styles.title}>特別需求</div> {/* Special request */}
        </div>
        <div className={styles['second-column']}>
        <div className={styles.title}>{order.product}</div> {/* Product name */}
          <div className={styles.title}>{order.quantity}</div> {/* Quantity */}
          <div className={styles.title}>{order.request}</div> {/* Special request */}
          {/* Additional order details can be displayed here */}
        </div>
      </div>
    ));
  };

  return (
    <>
      <AdminMenu />
      <div className={styles['big-container']}>
        <div className={styles.title}>客人點餐記錄</div>
        <div>UUID: {uuid}</div>
        {renderOrders()}
      </div>
    </>
  );
};
