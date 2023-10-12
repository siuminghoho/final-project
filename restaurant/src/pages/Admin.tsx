import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";

export const Admin = () => {
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
                  <a href="/">主頁</a>
                </li>
                <li>
                  <a href="/orderRecord">點餐記錄</a>
                </li>
                <li>
                  <a href="/inventory">存貨查詢</a>
                </li>
                <li>
                  <a href="/message">查閱信息</a>
                </li>
                <li>
                  <a href="/edit">編輯系統</a>
                </li>
                <li>
                  <a href="/logout">登出</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
