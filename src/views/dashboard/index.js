import React from "react";
import { Routes, Route } from "react-router-dom";
// core component
import DashboardLayout from "../../layout/DashboardLayout";
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
