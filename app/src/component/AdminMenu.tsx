import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminMenu.css";
import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";

export const AdminMenu = () => {
  // State to manage the visibility of the Offcanvas
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Event handler function to toggle the state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="safe-area-container">
        <div className="app-container">
          {/* <div className="iphoneIsland"></div> */}
          {/* <Container fluid> */}

          {/* add bootstrap hamburger menu */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>

          {/* <button
            className="btn btn-primary"
            type="button"
            onClick={toggleSidebar}
          >
            Toggle sidebar
          </button> */}
          {/* Offcanvas element */}
          <div
            className={`offcanvas offcanvas-start ${sidebarOpen ? "show" : ""}`}
            id="sidebar"
          >
            <div className="offcanvas-header">
              <div id="sidebarLabel">restaurant name</div>
              <button
                type="button"
                className="btn-close btn-close-custom text-reset"
                onClick={toggleSidebar}
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="list-unstyled">
                <li>
                  <Link to="/admin">主頁</Link>
                </li>
                <li>
                  <Link to="/admin/orderRecord">點餐記錄</Link>
                </li>
                <li>
                  <Link to="admin/inventory">存貨查詢</Link>
                </li>
                <li>
                  <Link to="admin/message">查閱信息</Link>
                </li>
                <li>
                  <Link to="admin/edit">編輯系統</Link>
                </li>
                <li>
                  <Link to="/logout">登出</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
