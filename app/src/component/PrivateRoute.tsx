import React from "react";

import { Route,Navigate} from "react-router-dom";

export const PrivateRoute = ({ element, path }: any) => {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated) {
    return <Navigate to="/admin" />;
  }
  return <Route path={path} element={element} />;
}

