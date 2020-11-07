import React, { Component } from "react";
import { Modal, Button } from 'antd';

export default class AppWorks extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>
              Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
            </p>
          </div>
                <div className="contentHolder">
                <Button onClick={this.showModal}>
            <i className="fas fa-play"></i>
          </Button>
          </div>
          <Modal
            title="E-commerce"
            visible={this.state.visible}
            onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <iframe title="Basic Modal" width="100%" height="400" src="https://www.youtube.com/watch?v=V8nFLy9P1go"></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}
