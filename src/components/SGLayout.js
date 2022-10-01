import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const { Header, Content, Footer } = Layout;

const SGLayout = ({ children }) => (
  <Layout style={{ background: "#8ccdc1" }}>
    <Header style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="logo" style={{ fontSize: "25px" }}>
        <Link to={"/"}>kipimo</Link>
      </div>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item>
          <Link to={"/"}>Home</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to={"/open-science"}>Open Science</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/about"}>About</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout">
      <div
        className="site-layout-background"
        style={{
          paddingTop: "20px",
          paddingBotton: "20px",
          paddingLeft: "70px",
          paddingRight: "70px",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Space Grabbers | NASA Earth kipimo | 2022
    </Footer>
  </Layout>
);

export default SGLayout;
