import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Menu } from "./pages/Menu";

//router setting
import AdminRoot from "./pages/AdminRoot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrderRecord } from "./pages/OrderRecord";
import { Login } from "./pages/Login";
import { Inventory } from "./pages/Inventory";
import { Message } from "./pages/Message";
import { Edit } from "./pages/Edit";
// import { Logout } from "./pages/Logout";
// import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminRoot />}>
          <Route index element={<Login />} />
          <Route path="orderRecord" element={<OrderRecord />} />
          <Route path="menu" element={<Menu />} />
          {/* <Route path="inventory" element={<Inventory />} />
          <Route path="message" element={<Message />} />
          <Route path="edit" element={<Edit />} />
          <Route path="logout" element={<Logout />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
