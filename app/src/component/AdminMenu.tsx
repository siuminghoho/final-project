import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminMenu.css";
import { Link } from "react-router-dom";

export function AdminMenu () {
  // State to manage the visibility of the Offcanvas
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Event handler function to toggle the state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="safe-area-container ">
        {/* <div className="app-container"> */}
          {/* Other components remain unchanged */}

          <nav className="navbar navbar-light bg-light p-0 adminNav">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>

          {/* Offcanvas element */}
          <div
            className={`offcanvas offcanvas-start ${sidebarOpen ? "show" : ""}`}
            id="sidebar"
          >
            <div className="offcanvas-header">
            <img src="/photo/chaRestaurant.png" alt="Cha.restaurant" id="sidebarImage" />
              <button
                type="button"
                className="btn-close btn-close-custom text-reset"
                onClick={toggleSidebar}
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="list-unstyled">
                {/* <li> */}
                  {/* <Link to="/admin">主頁</Link>  */}
                {/* </li> */}
                <li>
                  <Link to="/admin/ticket">建立QR</Link> {/* Moved up: Generate QR code link */}
                </li>
                <li>
                  <Link to="/admin/scan">掃描QR</Link> {/* Order records link */}
                </li>
                <li>
                  <Link to="/admin/orderRecord">點餐記錄</Link> {/* Order records link */}
                </li>
                {/* Repeating 'orderRecord' link removed, assuming it was a mistake. */}
                {/* Other list items remain unchanged */}
                {/* <li>
                  <Link to="admin/message">查閱信息</Link>
                </li>
                <li>
                  <Link to="admin/edit">編輯系統</Link>
                </li> */}
                <li>
                  <Link to="/admin">登出</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};
