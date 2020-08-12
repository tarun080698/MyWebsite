import React, { Component } from "react";

class LoginLogout extends Component {
    state = {    
    isLoggedIn: false,
  };

    handleLogin= () => {
    this.setState({
      isLoggedIn: true,
    });
  };

    handleLogout= () =>{
     this.setState({
      isLoggedIn: false,
     })
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onClick={this.handleLogout} />;
    } else button = <Login onClick={this.handleLogin} />;
      
      return (
      <div className="card-content">
        <Greet Logged={this.state.isLoggedIn}></Greet>
        {button}
      </div>
    );
  }
}

function Greet(props) {
    const LoggedIn = props.Logged;
  if (LoggedIn) {
    return <h1> Hello User</h1>;
  } else return <h1>Please login</h1>;
}
function Login(props) {
    return (<button onClick={props.onClick}>Login</button>);
}

function Logout(props) {
  return (<button onClick={props.onClick}>Logout</button>);
}


export default LoginLogout