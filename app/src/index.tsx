import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { HomePage } from "./page/HomePage";
import AdminRoot from "./page/AdminRoot";
import { MenuPage } from "./page/MenuPage";
import { AdminMenu } from "./component/AdminMenu";
import { AdminOrderRecordPage } from "./page/AdminOrderRecordPage";
import { AdminLoginPage } from "./page/AdminLoginPage";
import { ItemDetailPage } from "./page/ItemDetailPage";

// import { AdminMessage } from "./page/AdminMessage";
// import { AdminEditPage } from "./page/AdminEditPage";
export const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/foodDetail" element={<ItemDetailPage />} />
          <Route path="/admin" element={<AdminRoot />}>
            <Route index element={<AdminLoginPage />} />
            <Route path="orderRecord" element={<AdminOrderRecordPage />} />
            <Route path="menu" element={<AdminMenu />} />
            {/* <Route path="edit" element={<Edit />} />}
        {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
