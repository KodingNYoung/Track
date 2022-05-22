import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// core component
import DashboardLayout from "../../layout/DashboardLayout";
// Routes
import Overview from "./Overview";
import Transactions from "./Transactions";
import Analytics from "./Analytics";
import Categories from "./Categories";

const Dashboard = () => {
  const [currentView, setCurrentView] = useState("");

  return (
    <DashboardLayout activeView={currentView}>
      <Routes>
        <Route path="/" element={<Overview setView={setCurrentView} />} />
        <Route
          path="transactions"
          element={<Transactions setView={setCurrentView} />}
        />
        <Route
          path="categories"
          element={<Categories setView={setCurrentView} />}
        />
        <Route
          path="analytics"
          element={<Analytics setView={setCurrentView} />}
        />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
