import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Layout, Menu, Dropdown, Avatar } from "antd";

// icons
import {
  MdOutlineDashboard,
  BiCategory,
  BsBarChart,
  RiExchangeFundsFill,
  MenuOutlined,
  HomeOutlined,
  LogoutOutlined
} from "../../imports/icons";

// components
import { Brand } from "../Brand/Brands";

// redux
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, resetStatus } from "../../redux/features/auth/authSlice";

// css
import "../../assets/css/dashboard.css";

// sub components
const { Sider, Header, Content } = Layout;
const { Item } = Menu;

const DashboardLayout = props => {
  // props
  const { children, activeView } = props;
  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // selectors
  const { status, message } = useSelector(state => state.auth.meta);
  // state
  const [collapsed, setCollapsed] = useState(false);
  const [modal, setModal] = useState(false);
  const [smScreen, setSmScreen] = useState(
    window.matchMedia("(max-width: 1080px)").matches
  );

  // functions
  const toggleCollapse = () => setCollapsed(!collapsed);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  //
  const logout = () => {
    dispatch(logoutUser());
  };
  const handleStatusReset = () => {
    dispatch(resetStatus());
  };
  window.matchMedia("(max-width: 1080px)").addListener(query => {
    setSmScreen(query.matches);
  });

  // useEfffect
  useEffect(() => {
    if (status === "logout_success") {
      navigate("/auth/login");
      handleStatusReset();
    }
  }, [status]);

  // UI
  const userMenuContent = (
    <Menu className="user-menu">
      <Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <Item key="3" icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Item>
    </Menu>
  );
  return (
    <Layout
      theme="light"
      hasSider={true}
      className={`dashboard-layout small-screen ${
        collapsed ? " collapsed" : ""
      }`}
    >
      <Sider trigger={null} collapsible collapsed={true} className="sidebar">
        <Brand collapsed={true} color="blue" size="small" />
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
