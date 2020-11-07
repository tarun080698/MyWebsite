import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import AppHeader from "./Components/common/Header";
import AppFooter from "./Components/common/Footer";
import AppHome from "./views/Home";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
        <AppFooter/>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
