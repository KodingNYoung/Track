import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Brand } from "components/Brands";

// icons
import {
  BsBarChart,
  HiHome,
  BiTransferAlt,
  BsCollectionFill,
  FaCog
} from "imports/icons";

// css
import "assets/css/dashboard.css";

// sub components
const { Sider } = Layout;
const { Item } = Menu;

const DashboardSider = props => {
  // props
  const { activeView } = props;

  const items = [
    {
      key: "overview",
      label: <NavLink to="/dashboard">Overview</NavLink>,
      icon: <HiHome style={{ width: "20px !important" }} />
    },
    {
      key: "transactions",
      label: <NavLink to="/dashboard/transactions">Transactions</NavLink>,
      icon: <BiTransferAlt />
    },
    {
      key: "categories",
      label: <NavLink to="/dashboard/categories">Categories</NavLink>,
      icon: <BsCollectionFill />
    },
    {
      key: "analytics",
      label: <NavLink to="/dashboard/analytics">Charts</NavLink>,
      icon: <BsBarChart />
    },
    {
      key: "settings",
      label: <NavLink to="/dashboard/settings">Settings</NavLink>,
      icon: <FaCog />,
      className: "divider-space"
    }
  ];

  return (
    <Sider trigger={null} collapsible collapsed={true} className="sidebar">
      <Brand collapsed={true} color="blue" size="small" />
      <Menu
        mode="inline"
        selectable
        defaultSelectedKeys={["overview"]}
        selectedKeys={[activeView]}
        className="menu"
        items={items}
      />
    </Sider>
  );
};

export default DashboardSider;
