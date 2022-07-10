import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Brand } from "components/Brands";

// icons
import {
  MdOutlineDashboard,
  BiCategory,
  BsBarChart,
  RiExchangeFundsFill
} from "imports/icons";

// css
import "assets/css/dashboard.css";

// sub components
const { Sider } = Layout;
const { Item } = Menu;

const DashboardSider = props => {
  // props
  const { collapsed, smScreen, activeView } = props;

  const items = [
    {
      key: "overview",
      label: <NavLink to="/dashboard">Overview</NavLink>,
      icon: <MdOutlineDashboard />
    },
    {
      key: "transactions",
      label: <NavLink to="/dashboard/transactions"></NavLink>,
      icon: <RiExchangeFundsFill />
    },
    {
      key: "categories",
      label: <NavLink to="/dashboard/categories"></NavLink>,
      icon: <BiCategory />
    },
    {
      key: "chart",
      label: <NavLink to="/dashboard/analytics"></NavLink>,
      icon: <BsBarChart />
    }
  ];

  return (
    <Sider trigger={null} collapsible collapsed={true} className="sidebar">
      <Brand collapsed={true} color="white" />
      <Menu
        mode="inline"
        defaultSelectedKeys={["overview"]}
        selectedKeys={[activeView]}
        className="menu"
        items={items}
      >
        {/* <Item key="overview" icon={<MdOutlineDashboard />}>
          <NavLink to="/dashboard">Overview</NavLink>
        </Item>
        <Item key="transactions" icon={<RiExchangeFundsFill />}>
          <NavLink to="/dashboard/transactions">Transactions</NavLink>
        </Item>
        <Item key="categories" icon={<BiCategory />}>
          <NavLink to="/dashboard/categories">Categories</NavLink>
        </Item>
        <Item key="analytics" icon={<BsBarChart />}>
          <NavLink to="/dashboard/analytics">Chart</NavLink>
        </Item> */}
      </Menu>
    </Sider>
  );
};

export default DashboardSider;
