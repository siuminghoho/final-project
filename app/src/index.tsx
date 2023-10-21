import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { HomePage } from "./page/HomePage";
import AdminRoot from "./component/AdminRoot";
import { MenuPage } from "./page/MenuPage";
import { AdminMenu } from "./component/AdminMenu";
import { AdminOrderRecordPage } from "./page/AdminOrderRecordPage";
import { AdminLandingPage } from "./page/AdminLandingPage";
import { ItemDetailPage } from "./page/ItemDetailPage";
import { ItemOptionPage } from "./page/ItemOptionPage";
import { CheckOutPage } from "./page/CheckOutPage";
import { Provider } from "react-redux";
import store from "./store";
import { AdminTicket } from "./page/AdminTicket";
import { AdminScan } from "./page/AdminScan";
import { ShoppingCartPage } from "./page/ShoppingCartPage";
import { PrivateRoute } from "./component/PrivateRoute";

// import { AdminMessage } from "./page/AdminMessage";
// import { AdminEditPage } from "./page/AdminEditPage";
export const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/itemDetail" element={<ItemDetailPage />} />
            <Route path="/itemOption" element={<ItemOptionPage />} />
            <Route path="/shoppingCart" element={<ShoppingCartPage />} />
            <Route path="/checkOut" element={<CheckOutPage />} />
            <Route path="/admin" element={<AdminRoot />}>
              <Route index element={<AdminLandingPage />} />
              <Route path="menu" element={<AdminMenu />} />
              <Route path="orderRecord" element={<AdminOrderRecordPage />} />
              <Route path="ticket" element={<AdminTicket />} />
              <Route path="scan" element={<AdminScan />} />
              <Route path="logout" element={<AdminRoot />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
