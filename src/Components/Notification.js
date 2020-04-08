import React from "react";

import "react-notifications-component/dist/theme.css";
import ReactNotification, { store } from "react-notifications-component";

class Notification extends React.Component {
  constructor() {
    super();
    this.state = {
      data: false,
    };
  }
  componentDidMount() {
    let url = "http://localhost:8000/Notifications/2";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp });
      });
    });
  }
  handleNotification = () => {
    let data = this.state.data;
    store.addNotification({
      title: data.Header,
      message: data.message,
      type: "success",
      container: "top-left",
      insert: "top",
      animationIN: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        showIcon: true,
      },
      width: 600,
    });
  };
  render() {
    let data = this.state.data;
    console.warn(data);
    return (
      <div>
        <ReactNotification />

        <button
          onClick={this.handleNotification}
          style={{ margin: 111, float: "right" }}
        >
          whats New
        </button>
      </div>
    );
  }
}

export default Notification;
