import React from "react";
import { LoginPage } from "./pages/login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { DashboardPage } from "./pages/dashboard";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
