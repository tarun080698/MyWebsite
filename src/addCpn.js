import React, { Component } from "react";

class AddCpn extends Component {
  state = {
    name: null,
    post: null,
    phone: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addc(this.state);
  };

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <br></br>
          <label htmlFor="post">Position:</label>
          <input type="text" id="post" onChange={this.handleChange} />
          <br></br>
          <label htmlFor="phone">Contact:</label>
          <input type="text" id="phone" onChange={this.handleChange} />
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddCpn;
