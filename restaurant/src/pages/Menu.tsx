import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";

export const Menu = () => {
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
          <button
            className="btn btn-primary"
            type="button"
            onClick={toggleSidebar}
          >
            Toggle sidebar
          </button>
          {/* Offcanvas element */}
          <div
            className={`offcanvas offcanvas-start ${sidebarOpen ? "show" : ""}`}
            id="sidebar"
            aria-labelledby="sidebarLabel"
          >
            <div className="offcanvas-header">
              <h5 id="sidebarLabel">Sidebar</h5>
              <button
                type="button"
                className="btn-close text-reset"
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
