import React, { Component } from "react";
import Date from './Clock'

class Comment extends Component {
  render() {
    return (
      <div className="container red">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={this.props.data.author.avatarUrl}
            alt={this.props.data.author.name}
          />
          <h3 className="UserInfo-name">{this.props.data.author.name}</h3>
        </div>
        <h5 className="Comment-text">{this.props.data.text}</h5>
        <Date />
      </div>
    );
  }
}


export default Comment;
