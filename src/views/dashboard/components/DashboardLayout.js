import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";

// core components
import DashboardHeader from "./children/DashboardHeader";
import DashboardSider from "./children/DashboardSider";

// redux
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, resetStatus } from "redux/features/auth/authSlice";
import { getUserProfile } from "redux/features/user/slice";

// css
import "assets/css/dashboard.css";

// sub components
const { Content } = Layout;

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
  const toggleSiderCollapse = () => setCollapsed(collapsed => !collapsed);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  //
  const logout = () => {
    dispatch(logoutUser());
  };
  const handleStatusReset = () => {
    dispatch(resetStatus());
  };
  const handleGetProfile = () => {
    dispatch(getUserProfile());
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
  useEffect(() => {
    handleGetProfile();
  }, []);

  // UI

  return (
    <Layout
      theme="light"
      hasSider={true}
      className={`dashboard-layout${collapsed ? " collapsed" : ""}${
        smScreen ? " small-screen" : ""
      }`}
    >
      <DashboardSider
        smScreen={smScreen}
        activeView={activeView}
        collapsed={collapsed}
      />
      <Layout className="page-content-layout">
        <DashboardHeader toggleSiderCollapse={toggleSiderCollapse} />
        {/* <Content className="site-layout-background">{children}</Content> */}
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
