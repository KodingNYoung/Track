import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Layout, Menu, Dropdown, Avatar, Button } from "antd";

// icons
import {
  MdOutlineDashboard,
  BiCategory,
  BsBarChart,
  RiExchangeFundsFill
} from "../imports/icons";
import {
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  LogoutOutlined
} from "@ant-design/icons";

// css
import "../assets/css/dashboard.css";
import { Brand } from "../components/Brand/Brands";

// sub components
const { Sider, Header, Content } = Layout;
const { Item } = Menu;

const DashboardLayout = props => {
  const { children, activeView } = props;
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [modal, setModal] = useState(false);
  const [smScreen, setSmScreen] = useState(
    window.matchMedia("(max-width: 1080px)").matches
  );

  // functions
  const toggleCollapse = () => setCollapsed(!collapsed);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const logoutUser = () => {
    navigate("/login");
  };
  window.matchMedia("(max-width: 1080px)").addListener(query => {
    setSmScreen(query.matches);
  });

  // UI
  const userMenuContent = (
    <Menu className="user-menu">
      <Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <Item key="2" icon={<UserOutlined />} onClick={openModal}>
        Self Service
      </Item>
      <Item key="3" icon={<LogoutOutlined />} onClick={logoutUser}>
        Logout
      </Item>
    </Menu>
  );
  return (
    <Layout
      theme="light"
      hasSider={true}
      className={`dashboard-layout${collapsed ? " collapsed" : ""}${
        smScreen ? " small-screen" : ""
      }`}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed || smScreen}
        className="sidebar"
      >
        <Brand collapsed={collapsed || smScreen} color="white" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["overview"]}
          selectedKeys={[activeView]}
          className="menu"
        >
          <Item key="overview" icon={<MdOutlineDashboard />}>
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
          </Item>
        </Menu>
      </Sider>
      <Layout className="page-content-layout">
        <Header className="admin-header">
          <section className="trigger-container">
            <MenuOutlined className="trigger" onClick={toggleCollapse} />
            <h1>My Dashboard</h1>
          </section>

          <Dropdown
            trigger={["click"]}
            overlay={userMenuContent}
            className="user-btn"
          >
            <Avatar>JD</Avatar>
          </Dropdown>
        </Header>
        <Content className="site-layout-background">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
