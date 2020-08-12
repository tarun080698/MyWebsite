import React, { Component } from "react";

class Warning extends Component {
  state = {
    warns: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      warns: !prevState.warns
    }));
  };
  render() {
    return (
      <div>
        <ShowWarn warns={this.state.warns} />
        <button onClick={this.handleClick}>
          {this.state.warns ? "hide" : "Show"}
        </button>
      </div>
    );
  }
}

function ShowWarn(props) {
  let warns = props.warns;
  if (!warns) {
    return null;
  } else
    return (
      <div>
        <h1>WARNING</h1>
      </div>
    );
}

export default Warning;
