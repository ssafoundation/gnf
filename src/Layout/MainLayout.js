import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import "./layout.scss";
const MainLayout = ({ children }) => {
  return (
    <div className="gnf-main-layout">
      <div className="gnf-header-top-bar">
        <div className="gnf-logo">
          <img src={logo} alt="" />
        </div>
        <div className="gnf-profile">
          <Dropdown>
            <Dropdown.Toggle>Profile</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="gnf-main-body-wrap">
        <div className="gnf-sidebar-left">
          <div className="gnf-sidebar-menu">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/">Member list</Link>
              </li>
              <li>
                <Link to="/">All Projects</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="gnf-content-body">
          <Container fluid>{children}</Container>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
