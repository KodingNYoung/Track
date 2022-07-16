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
  const [currentView, setCurrentView] = useState("overview");

  return (
    <DashboardLayout
      activeView={currentView}
      setView={setCurrentView}
      view={currentView}
    >
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="categories" element={<Categories />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
