import React from "react";
import { Menu } from "antd";

function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
              <div className="logo">
              <a href="https://github.com" ><i className="fas fa-bolt"></i>
                  <b>Tech</b></a>
          </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "50px" }}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="features">Features</Menu.Item>
        <Menu.Item key="howitworks">How it Works</Menu.Item>
        <Menu.Item key="faq">faq</Menu.Item>
        <Menu.Item key="pricing">Pricing</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
              </Menu>
              </div>
    </div>
  );
}

export default AppHeader;
