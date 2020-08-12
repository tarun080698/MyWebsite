import React, { Component } from "react";
import Compone from "./compone";
import Comment from "./Comment";
import AddCpn from "./addCpn";
import LoginLogout from './LoginLogout'
import Warning from './Warning'

class App extends Component {
  state = {
    cpn: [
      {
        name: "Tarun",
        post: "System Manager",
        phone: "8390106634",
        id: 1,
      },
      {
        name: "Ravi Datta",
        post: "System Manager",
        phone: "7350237453",
        id: 2,
      },
      {
        name: "Tarun",
        post: "Support Manager",
        phone: "8390106634",
        id: 3,
      },
    ],
    data: {
      author: {
        name: "tarun",
        avatarUrl: "https://dnif.it/images/dnif-logo-reveald.png",
      },
      text: "Hello guys",
      date: new Date().toLocaleTimeString(),
    },
  };

  handleClick = (e, test) => { 
    e.preventDefault()
    console.log(test)
  }
  addComp = (addcpn) => {
    addcpn.id = Math.random();
    let cpn = [...this.state.cpn, addcpn];
    this.setState({
      cpn: cpn,
    });
  };

  deleteComp = (id) => {
    let cpn = this.state.cpn.filter((cpn) => {
      return cpn.id !== id;
    });
    this.setState({
      cpn: cpn,
    });
  };

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>welcome :)</p>
        <LoginLogout />
        <Warning />
        <button onClick={this.handleClick}>Click me</button>

        <Comment data={this.state.data} /> 
        
        <Compone deleteComp={this.deleteComp} cpn={this.state.cpn} />
        <AddCpn addc={this.addComp} />
      </div>
    );
  }
}

export default App;