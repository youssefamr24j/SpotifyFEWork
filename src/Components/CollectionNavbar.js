import React, { Component } from "react";
import ReactNotification, { store } from "react-notifications-component";
import { Notification } from "./Notification";
import { Avatar } from "antd";
import "./CollectionNavbar.css";

class CollectionNavbar extends Component {
  constructor() {
    super();
    this.state = {
      data: Notification,
    };
  }

  // componentDidMount() {
  //   let url = "http://localhost:8080/notification/1";
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       this.setState({ data: resp });
  //     });
  //   });
  // }

  handleNotification = () => {
    let data = this.state.data[0];
    store.addNotification({
      title: data.Header,
      message: data.message,
      type: "danger",
      container: "top-left",
      insert: "top",
      animationIN: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        showIcon: true,
      },
      width: 300,
    });
  };
  render() {
    let notification = this.state.data;
    return (
      <div className="NavLayout">
        <ul className="main-nav">
          <li>
            <a href="/Home" className="previous-btn prev">
              &#8249;
            </a>
          </li>
          <li>
            <a href="/Home" className="next-btn next">
              &#8250;
            </a>

            <a href="/collection/playlists" id="playlist-icon">
              Playlists
            </a>
          </li>
          <li>
            <a href="/collection/podcasts" id="prodcast-icon">
              Podcasts
            </a>
          </li>
          <li>
            <a href="/collection/artists" id="artists-icon">
              Artists
            </a>
          </li>
          <li>
            <a href="/collection/albums" id="albums-icon">
              Albums
            </a>
          </li>

          <li>
            <ReactNotification />
            <button
              className="whatsNewNtn"
              onClick={this.handleNotification}
              style={{ float: "left" }}
            >
              {" "}
              whats New
              <span className="num">{notification[0].id}</span>
            </button>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown">
              <button className="dropbtn">
                <Avatar src="./sultan.png" /> Username
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="/account">Account</a>
                <a href="/login">Logout</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CollectionNavbar;
