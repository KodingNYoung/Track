import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout } from "antd";

// core components
import DashboardHeader from "./DashboardHeader";
import DashboardSider from "./DashboardSider";

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
  const { children, activeView, setView, view } = props;
  // hooks
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // selectors
  const { status } = useSelector(state => state.auth.meta);
  // state
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [smScreen, setSmScreen] = useState(
    window.matchMedia("(max-width: 1080px)").matches
  );

  // functions
  const toggleSiderCollapse = () => setCollapsed(collapsed => !collapsed);
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
  useEffect(() => {
    const view = location.pathname.split("/")[2];
    setView(view || "overview");
  }, [location]);

  // UI

  return (
    <Layout
      hasSider={true}
      className={`dashboard-layout ${darkMode ? "dark" : "light"} ${
        collapsed ? "collapsed" : ""
      } ${smScreen ? "small-screen" : ""}`}
    >
      <DashboardSider
        smScreen={smScreen}
        activeView={activeView}
        collapsed={collapsed}
      />
      <Layout className="page-content-layout">
        <DashboardHeader
          toggleSiderCollapse={toggleSiderCollapse}
          smScreen={smScreen}
          logout={logout}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          isOverview={view === "overview"}
        />
        <Content className="site-layout-background">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
