import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import AppHeader from "./Components/common/Header";
import AppHome from "./views/Home";

import { Layout} from "antd";
const { Header, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppHome/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
