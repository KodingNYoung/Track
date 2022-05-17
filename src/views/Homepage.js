import React from "react";

import { Button } from "antd";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Homepage = () => {
  return (
    <>
      <nav>
        <Link to="dashboard">
          <MdDashboard />
          <span>Dashboard</span>
        </Link>
      </nav>
      <div>Homepage</div>
      <Button type="primary">Primary</Button>
    </>
  );
};

export default Homepage;
