import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// core component
import DashboardLayout from "./components/DashboardLayout";
// Routes
import Overview from "./views/Overview";
import Transactions from "./views/Transactions";
import Analytics from "./views/Analytics";
import Categories from "./views/Categories";

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
