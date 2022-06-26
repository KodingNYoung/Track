import React, { useState } from "react";
import { Brand } from "../Brand/Brands";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { MenuOutlined } from "../../imports/icons";
// styles
import "../../assets/css/navbar.css";
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [smScrnMenuState, setSmScrnMenuState] = useState("closed");
  const [smScreen, setSmScreen] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  // functions
  const toggleMenuActive = () => {
    if (smScrnMenuState === "opened" || smScrnMenuState === "opening") {
      setSmScrnMenuState("closing");
      return setTimeout(() => setSmScrnMenuState("closed"), 300);
    }
    setSmScrnMenuState("opening");
    return setTimeout(() => setSmScrnMenuState("opened"), 300);
  };
  window.matchMedia("(max-width: 767px)").addListener(query => {
    setSmScreen(query.matches);
  });
  return (
    <header
      className={`home-navbar${smScreen ? " smScreen" : ""} ${smScrnMenuState}`}
    >
      <div className="topbar">
        <Brand color="black" />
        <button className="burger-icon" onClick={toggleMenuActive}>
          <MenuOutlined />
        </button>
      </div>
      <div className="home-navbar__links">
        <nav className={navActive ? "active" : ""}>
          <NavItem
            to="/#hero"
            label="Home"
            setNavActive={setNavActive}
            onClick={toggleMenuActive}
          />
          <NavItem
            to="/#features"
            label="Features"
            setNavActive={setNavActive}
            onClick={toggleMenuActive}
          />
          <NavItem
            to="/#contactus"
            label="Contact"
            setNavActive={setNavActive}
            onClick={toggleMenuActive}
          />
        </nav>
        <span className="login-link">
          <Link to="/auth/login">Login</Link>
        </span>
      </div>
    </header>
  );
};
const NavItem = props => {
  const { to, label, setNavActive, onClick } = props;
  const handleMouseEnter = () => setNavActive(true);
  const handleMouseLeave = () => setNavActive(false);
  return (
    <HashLink
      smooth
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {label}
    </HashLink>
  );
};

export default Navbar;
