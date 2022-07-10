import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown, Avatar } from "antd";

// icons
import { MenuOutlined, HomeOutlined, LogoutOutlined } from "imports/icons";

// css
import "assets/css/dashboard.css";

// sub components
const { Header } = Layout;
const { Item } = Menu;

const DashboardHeader = props => {
  const { toggleSiderCollapse, logout, smScreen } = props;

  return (
    <Header className="admin-header">
      <section className="trigger-container">
        {smScreen && (
          <MenuOutlined className="trigger" onClick={toggleSiderCollapse} />
        )}
      </section>

      <Dropdown
        trigger={["click"]}
        overlay={
          <Menu className="user-menu">
            <Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Item>
            <Item key="3" icon={<LogoutOutlined />} onClick={logout}>
              Logout
            </Item>
          </Menu>
        }
        className="user-btn"
      >
        <Avatar>JD</Avatar>
      </Dropdown>
    </Header>
  );
};

export default DashboardHeader;
