import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown, Avatar } from "antd";

// icons
import {
  MenuOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserOutlined,
  FiChevronDown,
  MdOutlineDarkMode,
  MdLightMode
} from "imports/icons";

// css
import "assets/css/dashboard.css";

// sub components
const { Header } = Layout;
const { Item } = Menu;

const DashboardHeader = props => {
  const {
    toggleSiderCollapse,
    logout,
    smScreen,
    setDarkMode,
    darkMode = false,
    isOverview
  } = props;

  return (
    <Header className="admin-header">
      <section className="trigger-container">
        {smScreen && (
          <MenuOutlined className="trigger" onClick={toggleSiderCollapse} />
        )}
        {isOverview && (
          <div className="text">
            Welcome, <span>James</span>
          </div>
        )}
      </section>

      <div className="header-right-content">
        <button
          onClick={() => setDarkMode(darkMode => !darkMode)}
          className="mode-btn"
        >
          {darkMode ? <MdLightMode /> : <MdOutlineDarkMode />}
        </button>
        <Dropdown
          trigger={["click"]}
          placement="bottomRight"
          overlay={
            <Menu className={`user-menu ${darkMode ? "dark" : "light"}`}>
              <Item key="1">
                <Link to="/dashboard/settings">Settings</Link>
              </Item>
              <Item key="2" onClick={logout} className="logout-btn">
                Logout
              </Item>
            </Menu>
          }
          className="user-btn"
        >
          <span>
            <Avatar size={35} icon={<UserOutlined />} />
            <FiChevronDown />
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default DashboardHeader;
